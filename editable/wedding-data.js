/**
 * wedding-data.js — Customer-facing editable data layer for Mohammad Saba & Nahid
 * Edit this file to update couple names, parents, dates, venue, Islamic dua, contacts, and photos.
 */

window.WEDDING_DATA = {
  couple: {
    groom: {
      first: "Mohammad",
      last: "Saba",
      script: "Mohammad Saba",
      parents: "Son of Shahid Perwez",
      note: "Son of Shahid Perwez — steady, kind and endlessly devoted.",
    },
    bride: {
      first: "Nahid",
      last: "",
      script: "Nahid",
      parents: "Daughter of Md Ekram",
      note: "Daughter of Md Ekram — a heart full of grace and quiet light.",
    },
  },

  wedding: {
    eventName: "Nikah Ceremony",
    dateISO: "2026-12-13T12:00:00+05:30",
    dateLabel: "December",
    day: "13",
    year: "2026",
    weekday: "Sunday",
    time: "12:00 PM onward",
    blessing: "With the blessings of Allah and our families, we invite you to share in the joy of our wedding celebrations as two hearts become one.",
  },

  events: [
    {
      eventName: "Nikah Ceremony",
      dateISO: "2026-12-13T12:00:00+05:30",
      dateLabel: "December",
      day: "13",
      year: "2026",
      weekday: "Sunday",
      time: "12:00 PM onward",
      venue: "Vill - Natesar, P.O. Jharna Saren",
      venueLine2: "P.S. - Nimchak Bathani, Dist. Gaya, Bihar 823311",
      address: "Vill - Natesar, P.O Jharna Saren, P.S - Nimchak Bathani, Dist Gaya, Bihar 823311",
    },
    {
      eventName: "Walima Ceremony",
      dateISO: "2026-12-14T18:00:00+05:30",
      dateLabel: "December",
      day: "14",
      year: "2026",
      weekday: "Monday",
      time: "6:00 PM onward",
      venue: "At our residence, Inerwa Road",
      venueLine2: "Infront of Raza Mosque, Baldiha, Jaynagar, Bihar",
      address: "At our residence, Inerwa road, Infront of Raza mosque Baldiha Jaynagar, Bihar",
    },
  ],

  religious: {
    duaArabic: "اللَّهُمَّ بَارِكْ لَهُمَا وَبَارِكْ عَلَيْكُمَا وَاجْمَعْ بَيْنَهُمَا فِي خَيْرٍ",
    duaTranslit: "O Allah, bless them, and send Your blessings upon them, and unite them in goodness.",
  },

  venue: {
    name: "Vill - Natesar, P.O. Jharna Saren",
    line2: "P.S. - Nimchak Bathani, Dist. Gaya, Bihar 823311",
    address: "Vill - Natesar, P.O Jharna Saren, P.S - Nimchak Bathani, Dist Gaya, Bihar 823311",
    hosts: "Best Compliments from Shahid Perwez & Sanaullah",
  },

  hosts: {
    title: "Best Compliments from",
    names: "Shahid Perwez & Sanaullah",
  },

  contacts: [
    {
      name: "Shahid Perwez",
      phone: "8434824050",
    },
    {
      name: "Sanaullah",
      phone: "9304292121",
    },
  ],

  music: {
    src: "./editable/assets/bg-music.mp3",
    autoplay: true,
    loop: true,
  },

  images: {
    bride: "./editable/assets/bride.jpg",
    groom: "./editable/assets/groom.jpg",
    floralCorner: "./editable/assets/floral-corner.png",
    goldFlourish: "./editable/assets/gold-flourish.png",
    masjid: "./editable/assets/masjid.png",
    mandala: "./editable/assets/mandala.png",
    paperTexture: "./editable/assets/paper-texture.jpg",
  },
};
