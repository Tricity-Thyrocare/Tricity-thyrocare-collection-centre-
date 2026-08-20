# Tricity Thyrocare Collection Centre Website

## Included
- Responsive Thyrocare-style professional design
- Packages with uploaded images
- Dynamic booking form
- Date selection and time slots
- Home Collection / Centre Visit
- WhatsApp booking confirmation to 8178009011
- Click-to-call
- Instagram button: tricity_thyrocare_centre
- Mobile menu
- Offer popup
- Easy package booking buttons

## Important
The Facebook Page URL was not available from the supplied details. Open `script.js` and replace:

const FACEBOOK_URL = "";

with the exact Facebook Page URL.

## Upload to GitHub
Upload these items to your repository:
- index.html
- style.css
- script.js
- assets folder

Then enable GitHub Pages from Settings > Pages > Deploy from branch > main > / (root).

## Real shared booking system
This version sends booking details to WhatsApp. The selected slot is not stored on a central server. For a true multi-user live slot system (where one booked slot becomes unavailable to everyone), connect the form to Firebase, Supabase, Google Sheets/Apps Script, or a custom backend.
