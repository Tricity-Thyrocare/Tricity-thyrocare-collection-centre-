const packages=[
["Aarogyam Prime",65,1299,899,"bg1","🫀"],["Wellness Basic",66,1399,1049,"bg2","🧬"],["Full Body Health Checkup",71,1899,1299,"bg3","🩺"],["Aarogyam Advance",78,2200,1589,"bg4","🔬"],["Complete Health Check with Vitamins",122,6000,1599,"bg1","💊"],["Executive Full Body Health Checkup",127,2200,1599,"bg2","❤️"],["Comprehensive Health Check",111,4500,2299,"bg3","🧪"],["Aarogyam Male",103,4000,2299,"bg4","👨"],["Aarogyam Female",105,4200,2399,"bg1","👩"],["Aarogyam X with Allergy Screening",140,8500,4199,"bg2","🌿"],["Aarogyam XL with Allergy Screening",150,9999,5299,"bg3","🧫"],["Food Intolerance Profile",218,10999,6500,"bg4","🥗"]];
const cards=document.getElementById("cards"), sel=document.getElementById("package");
packages.forEach((p,i)=>{
 cards.innerHTML+=`<article class="card"><div class="card-img ${p[4]}">${p[5]}</div><div class="card-body"><span class="tag">${p[1]} TESTS</span><h3>${p[0]}</h3><p>Preventive health screening package with selected diagnostic parameters for routine wellness.</p><div class="price"><del>₹${p[2]}</del><b>₹${p[3]}</b></div><button class="btn primary" onclick="openBooking('${p[0]}')">Book Now →</button></div></article>`;
 sel.innerHTML+=`<option>${p[0]}</option>`;
});
sel.innerHTML+=`<option>Thyroid Profile</option><option>Diabetes Profile</option><option>Lipid Profile</option><option>Liver Function Test</option><option>Kidney Function Test</option><option>Other Blood Test</option>`;
function openBooking(pkg=""){document.getElementById("modal").classList.add("show");document.body.style.overflow="hidden";if(pkg)sel.value=pkg}
function closeBooking(){document.getElementById("modal").classList.remove("show");document.body.style.overflow=""}
function closePopup(){document.getElementById("popup").classList.remove("show")}
function toggleMenu(){document.querySelector("nav").classList.toggle("mobile-open")}
function category(name){openBooking(name)}
document.getElementById("date").min=new Date().toISOString().split("T")[0];
document.getElementById("bookingForm").addEventListener("submit",e=>{
 e.preventDefault();
 const msg=`*TRICITY THYROCARE COLLECTION CENTRE – BOOKING REQUEST*%0A%0A*Test/Package:* ${encodeURIComponent(sel.value)}%0A*Patient:* ${encodeURIComponent(document.getElementById("name").value)}%0A*Mobile:* ${encodeURIComponent(document.getElementById("mobile").value)}%0A*Age:* ${encodeURIComponent(document.getElementById("age").value)}%0A*Collection:* ${encodeURIComponent(document.getElementById("collection").value)}%0A*Date:* ${encodeURIComponent(document.getElementById("date").value)}%0A*Slot:* ${encodeURIComponent(document.getElementById("slot").value)}%0A*Pincode:* ${encodeURIComponent(document.getElementById("pin").value)}%0A*Address:* ${encodeURIComponent(document.getElementById("address").value)}`;
 window.open("https://wa.me/918178009011?text="+msg,"_blank");
});
window.addEventListener("load",()=>setTimeout(()=>document.getElementById("popup").classList.add("show"),1800));
document.getElementById("popup").addEventListener("click",e=>{if(e.target.id==="popup")closePopup()});
document.getElementById("modal").addEventListener("click",e=>{if(e.target.id==="modal")closeBooking()});
