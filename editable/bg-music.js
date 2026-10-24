/**
 * bg-music.js — Background music controller for Mohammad Saba & Nahid
 * Provides robust audio playback across all mobile & desktop browsers.
 */

(function () {
  function initMusic() {
    var audio = document.getElementById('weddingBgm');
    var btn = document.getElementById('bg-music-toggle');
    if (!audio || !btn) return;

    var isPlaying = false;
    var userInteracted = false;
    var manuallyPaused = false;

    function setPlayingState(playing) {
      isPlaying = playing;
      var playingIcon = btn.querySelector('.music-icon-playing');
      var mutedIcon = btn.querySelector('.music-icon-muted');
      if (playing) {
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');
        if (playingIcon) playingIcon.style.display = 'block';
        if (mutedIcon) mutedIcon.style.display = 'none';
        btn.style.color = '#9c6c24';
      } else {
        btn.classList.remove('is-active');
        btn.setAttribute('aria-pressed', 'false');
        if (playingIcon) playingIcon.style.display = 'none';
        if (mutedIcon) mutedIcon.style.display = 'block';
        btn.style.color = '#8c7f76';
      }
    }

    function cleanupUnlock() {
      unlockEvents.forEach(function (evt) {
        window.removeEventListener(evt, onFirstGesture, true);
        document.removeEventListener(evt, onFirstGesture, true);
      });
    }

    function tryPlay() {
      if (manuallyPaused) return;
      if (!audio.paused && !audio.ended) {
        setPlayingState(true);
        cleanupUnlock();
        return;
      }
      var promise = null;
      try {
        promise = audio.play();
      } catch (err) {
        setPlayingState(false);
        return;
      }
      if (promise !== undefined && promise && typeof promise.then === 'function') {
        promise
          .then(function () {
            setPlayingState(true);
            cleanupUnlock();
          })
          .catch(function () {
            setPlayingState(false);
          });
      }
    }

    function onFirstGesture() {
      if (manuallyPaused) return;
      userInteracted = true;
      tryPlay();
    }

    // Capture phase listeners so React propagation cannot swallow the unlock gesture
    var unlockEvents = ['click', 'touchstart', 'touchend', 'pointerdown', 'keydown'];
    unlockEvents.forEach(function (evt) {
      window.addEventListener(evt, onFirstGesture, { capture: true, passive: true });
      document.addEventListener(evt, onFirstGesture, { capture: true, passive: true });
    });

    // Toggle button click
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      e.preventDefault();
      userInteracted = true;
      if (!audio.paused) {
        manuallyPaused = true;
        audio.pause();
        setPlayingState(false);
      } else {
        manuallyPaused = false;
        tryPlay();
      }
    });

    // Listen to native audio events to sync state
    audio.addEventListener('play', function () {
      setPlayingState(true);
    });
    audio.addEventListener('pause', function () {
      if (!isPlaying) return;
      setPlayingState(false);
    });
    audio.addEventListener('ended', function () {
      if (audio.loop) {
        tryPlay();
      } else {
        setPlayingState(false);
      }
    });

    // Initial attempt in case browser allows unprompted playback
    tryPlay();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMusic);
  } else {
    initMusic();
  }
})();
