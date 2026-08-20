const PHONE = "918178009011";
const INSTAGRAM_URL = "https://instagram.com/tricity_thyrocare_centre";

// Add your exact Facebook Page URL here when you have it.
const FACEBOOK_URL = "";

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
menuBtn.addEventListener("click", () => navMenu.classList.toggle("open"));
document.querySelectorAll("#navMenu a").forEach(a => a.addEventListener("click", () => navMenu.classList.remove("open")));

const dateInput = document.getElementById("date");
const timeSelect = document.getElementById("time");
const today = new Date();
today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
dateInput.min = today.toISOString().slice(0,10);

function getSlots(dateString){
  if(!dateString) return [];
  const day = new Date(dateString + "T00:00:00").getDay();
  // Centre/home collection slots; adjust these times whenever needed.
  if(day === 0) return ["08:00 AM","09:00 AM","10:00 AM","11:00 AM"];
  return ["07:00 AM","08:00 AM","09:00 AM","10:00 AM","11:00 AM","12:00 PM",
          "01:00 PM","02:00 PM","03:00 PM","04:00 PM","05:00 PM","06:00 PM"];
}

dateInput.addEventListener("change", () => {
  const slots = getSlots(dateInput.value);
  timeSelect.innerHTML = '<option value="">Select time slot</option>';
  slots.forEach(slot => {
    const opt = document.createElement("option");
    opt.value = slot; opt.textContent = slot;
    timeSelect.appendChild(opt);
  });
});

function choosePackage(pkg){
  document.getElementById("package").value = pkg;
  document.getElementById("booking").scrollIntoView({behavior:"smooth"});
  setTimeout(() => document.getElementById("name").focus(), 500);
}

document.querySelectorAll("[data-package]").forEach(btn => {
  btn.addEventListener("click", () => choosePackage(btn.dataset.package));
});

document.getElementById("bookingForm").addEventListener("submit", e => {
  e.preventDefault();
  const phone = document.getElementById("phone").value.trim();
  if(!/^[6-9]\d{9}$/.test(phone)){
    alert("Please enter a valid 10-digit Indian mobile number.");
    return;
  }
  const details = {
    package: document.getElementById("package").value,
    name: document.getElementById("name").value.trim(),
    phone,
    collection: document.getElementById("collection").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    notes: document.getElementById("notes").value.trim()
  };
  if(!details.date || !details.time){ alert("Please select date and time slot."); return; }

  const msg =
`*NEW TEST BOOKING – TRICITY THYROCARE COLLECTION CENTRE*

Package/Test: ${details.package}
Patient Name: ${details.name}
Mobile: ${details.phone}
Collection: ${details.collection}
Date: ${details.date}
Time Slot: ${details.time}
Address/Notes: ${details.notes || "Not provided"}

Please confirm my booking.`;

  window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
});

const modal = document.getElementById("offerModal");
const closeModal = () => { modal.classList.remove("show"); modal.setAttribute("aria-hidden","true"); };
document.getElementById("closeModal").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if(e.target === modal) closeModal(); });
document.getElementById("modalBook").addEventListener("click", () => { closeModal(); choosePackage("Full Body Checkup"); });

setTimeout(() => {
  if(!sessionStorage.getItem("offerShown")){
    modal.classList.add("show");
    modal.setAttribute("aria-hidden","false");
    sessionStorage.setItem("offerShown","1");
  }
}, 4500);

const fb = document.getElementById("facebookLink");
if(FACEBOOK_URL){
  fb.href = FACEBOOK_URL;
} else {
  fb.href = "https://www.facebook.com/";
  fb.addEventListener("click", e => {
    if(!FACEBOOK_URL) alert("Facebook Page URL अभी website में add नहीं किया गया है. script.js में FACEBOOK_URL में अपना exact Page link डालें.");
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
