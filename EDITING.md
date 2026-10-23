# Customer Editing Guide — Mohammad Saba & Nahid Khatun

This template is an Islamic Nikkah & Walima invitation featuring gold, parchment styling, Arabic calligraphy (Dua), couple introduction cards, live countdown timer, event details cards (Nikah and Walima ceremonies), RSVP / contact buttons, and Google Maps & calendar export.

---

## Customer Changes

All customer edits are configured in:
→ [editable/wedding-data.js](file:///c:/invitestory/week8/saba-khatun/editable/wedding-data.js)

### Couple Profiles
Edit `couple.groom` and `couple.bride` in `editable/wedding-data.js`:
- `first` & `last`: First and last names (e.g. `"Mohammad"`, `"Saba"`, `"Nahid"`, `"Khatun"`)
- `script`: Traditional script designation
- `parents`: Parents lineage line (e.g. `"Son of Shahid Perwez"`, `"Daughter of Md Ekram"`)
- `note`: Biographical description
- `photo`: Path to photo

### Wedding Events & Countdown
Edit `events` and `wedding` in `editable/wedding-data.js`:
- `eventName`: Event title (e.g. `"Nikah Ceremony"`, `"Walima Ceremony"`)
- `dateISO`: Event timestamp in ISO 8601 (`"YYYY-MM-DDTHH:MM:SS+05:30"`). Drives the live countdown timer and Google Calendar export.
- `dateLabel`: Month name (e.g. `"December"`)
- `day`: Day number string (e.g. `"13"`, `"14"`)
- `year`: Year string (e.g. `"2026"`)
- `weekday`: Day of the week (e.g. `"Sunday"`, `"Monday"`)
- `time`: Formatted time string (e.g. `"12:00 PM onward"`, `"6:00 PM onward"`)
- `venue`: Venue location name
- `venueLine2`: Area, City, State and Pincode
- `address`: Complete physical address string for Google Maps query

### Islamic Blessings
Edit `religious` in `editable/wedding-data.js`:
- `duaArabic`: Arabic Nikkah blessing calligraphy
- `duaTranslit`: English translation / transliteration of the dua

### Host & Compliments
Edit `hosts` in `editable/wedding-data.js`:
- `title`: Compliments title (e.g. `"Best Compliments from"`)
- `names`: Host names (e.g. `"Shahid Perwez & Sanaullah"`)

### Contact & RSVP
Edit `contacts` in `editable/wedding-data.js`:
- `name`: Contact person name
- `phone`: Mobile number for direct calling & WhatsApp

---

## Validation
Validate changes with `node --check editable/wedding-data.js`.
