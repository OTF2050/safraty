import './CSS/style.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.min.js';

import 'jquery/dist/jquery.min';

import 'popper.js/dist/popper.min';

import"@fortawesome/fontawesome-free/css/all.min.css"

import "./sass/style.scss"


import $ from "jquery";

document.addEventListener("click", function(){
    
})
const cities = 
{
  EGY:  ["القاهرة", "الإسكندرية", "البحيرة", "كفر الشيخ", "دمياط", "بورسعيد", "الإسماعيلية", "السويس", "الشرقية", "بني سويف", "المنيا", "أسيوط", "الفيوم", "المنوفية", "الغربية", "الدقهلية", "كفر الدوار", "قنا", "الأقصر", "أسوان", "سوهاج", "الوادي الجديد", "شمال سيناء", "جنوب سيناء", "البحر الأحمر", "مطروح", "الساحل الشمالي"],
  UAE: ["أبو ظبي","دبي","شارقة","عجمان","أم القيوين","رأس الخيمة","الفجيرة"]
};

const countrySelect = document.getElementById('country');
const citySelect = document.getElementById('city');

countrySelect.addEventListener('change', (event) => {
  const selectedCountry = event.target.value;
  citySelect.innerHTML = '';
  citySelect.disabled = true;
  const defaultOption = document.createElement('option');
  defaultOption.text = '--Please choose a city--';
  defaultOption.value = '';
  citySelect.appendChild(defaultOption);

  if (selectedCountry) {
    const citiesArray = cities[selectedCountry];
    citiesArray.forEach(city => {
      const option = document.createElement('option');
      option.value = city;
      option.text = city;
      citySelect.appendChild(option);
    });
    citySelect.disabled = false;
  }

});
document.getElementById("nigh-icon").addEventListener("click", backFunction);

function backFunction() {
  var background = document.body;
  background.classList.toggle("night-mode");
  }
const btEl= document.querySelector(".night-icon");

document.getElementById("search-icon").addEventListener("click",myFunction);

function myFunction() {
  let x = document.getElementById("icon");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  
}
document.getElementById("toggler").addEventListener("click",toggleFunction);
function toggleFunction(){
  $('.wrap').toggleClass('toggled');
}
