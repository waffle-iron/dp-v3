
// DP Javascript
// Copyright Andrew Fischer 2015

////////////////
//// HEADER ////
////////////////

var secBtn = document.getElementById('section-dropdown-btn');
var dropdown = document.getElementById('section-dropdown');
secBtn.addEventListener("click", function(){
    'use strict';
    dropdown.classList.toggle('closed');
    secBtn.classList.toggle('closed');
});


var tweets = document.querySelector('[id^="twitter-"]');
