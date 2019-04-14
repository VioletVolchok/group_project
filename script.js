// [Uncaught TypeError: Cannot read property 'display' of undefined
// at showLang (script.js:3)
// at HTMLButtonElement.onclick (mapview.html:387)]
// function showLang() {
//   var langBox = document.getElementsByClassName('langPage');
//   if (langBox.style.display === 'none') {
//     langBox.style.display = 'block';
//   } else {
//     langBox.style.display = 'none';
//   }
// }
//
// showLang();

// This one works
// function testFunction() {
//     var x = document.getElementsByClassName("langPage");
//     alert(x[0].innerHTML);
// }
//
// $(document).click(function(){
//   $('.arabicPage').hide();
// });
//
// $('.arabicPage').click(function(e){
//   e.stopPropagation();
// });
//
//This works but needs closing
// $(".Arabic").click(function(){
//   $('.arabicPage').show();
// });
//
// $(".Lithuanian").click(function(){
//   $('.lithuanianPage').toggle();
// });

//Arabic
//show popup when clicking the trigger
$('.Arabic').on('click touch', function(){
  $('.arabicPage').slideToggle();
});
//hide it when clicking anywhere else except the popup and the trigger
$(document).on('click touch', function(event) {
  if (!$(event.target).parents().addBack().is('.Arabic')) {
    $('.arabicPage').hide();
  }
});
// Stop propagation to prevent hiding "#tooltip" when clicking on it
$('.arabicPage').on('click touch', function(event) {
  event.stopPropagation();
});

//Bengali
$('.Bengali').on('click touch', function(){
  $('.bengaliPage').slideToggle();
});
$(document).on('click touch', function(event) {
  if (!$(event.target).parents().addBack().is('.Bengali')) {
    $('.bengaliPage').hide();
  }
});
$('.bengaliPage').on('click touch', function(event) {
  event.stopPropagation();
});

//French
$('.French').on('click touch', function(){
  $('.frenchPage').slideToggle();
});
$(document).on('click touch', function(event) {
  if (!$(event.target).parents().addBack().is('.French')) {
    $('.frenchPage').hide();
  }
});
$('.frenchPage').on('click touch', function(event) {
  event.stopPropagation();
});

//Gujurati
$('.Gujurati').on('click touch', function(){
  $('.gujuratiPage').slideToggle();
});
$(document).on('click touch', function(event) {
  if (!$(event.target).parents().addBack().is('.Gujurati')) {
    $('.gujuratiPage').hide();
  }
});
$('.gujuratiPage').on('click touch', function(event) {
  event.stopPropagation();
});

//Lithuanian
$('.Lithuanian').on('click touch', function(){
  $('.lithuanianPage').slideToggle();
});
$(document).on('click touch', function(event) {
  if (!$(event.target).parents().addBack().is('.Lithuanian')) {
    $('.lithuanianPage').hide();
  }
});
$('.lithuanianPage').on('click touch', function(event) {
  event.stopPropagation();
});

//Nepali
$('.Nepali').on('click touch', function(){
  $('.nepaliPage').slideToggle();
});
$(document).on('click touch', function(event) {
  if (!$(event.target).parents().addBack().is('.Nepali')) {
    $('.nepaliPage').hide();
  }
});
$('.nepaliPage').on('click touch', function(event) {
  event.stopPropagation();
});

//Polish
$('.Polish').on('click touch', function(){
  $('.polishPage').slideToggle();
});
$(document).on('click touch', function(event) {
  if (!$(event.target).parents().addBack().is('.Polish')) {
    $('.polishPage').hide();
  }
});
$('.polishPage').on('click touch', function(event) {
  event.stopPropagation();
});

//Portugese
$('.Portugese').on('click touch', function(){
  $('.portugesePage').slideToggle();
});
$(document).on('click touch', function(event) {
  if (!$(event.target).parents().addBack().is('.Portugese')) {
    $('.portugesePage').hide();
  }
});
$('.portugesePage').on('click touch', function(event) {
  event.stopPropagation();
});

//Punjabi
$('.Punjabi').on('click touch', function(){
  $('.punjabiPage').slideToggle();
});
$(document).on('click touch', function(event) {
  if (!$(event.target).parents().addBack().is('.Punjabi')) {
    $('.punjabiPage').hide();
  }
});
$('.punjabiPage').on('click touch', function(event) {
  event.stopPropagation();
});

//Spanish
$('.Spanish').on('click touch', function(){
  $('.spanishPage').slideToggle();
});
$(document).on('click touch', function(event) {
  if (!$(event.target).parents().addBack().is('.Spanish')) {
    $('.spanishPage').hide();
  }
});
$('.spanishPage').on('click touch', function(event) {
  event.stopPropagation();
});

//Tamil
$('.Tamil').on('click touch', function(){
  $('.tamilPage').slideToggle();
});
$(document).on('click touch', function(event) {
  if (!$(event.target).parents().addBack().is('.Tamil')) {
    $('.tamilPage').hide();
  }
});
$('.tamilPage').on('click touch', function(event) {
  event.stopPropagation();
});

//Turkish
$('.Turkish').on('click touch', function(){
  $('.turkishPage').slideToggle();
});
$(document).on('click touch', function(event) {
  if (!$(event.target).parents().addBack().is('.Turkish')) {
    $('.turkishPage').hide();
  }
});
$('.turkishPage').on('click touch', function(event) {
  event.stopPropagation();
});

//Urdu
$('.Urdu').on('click touch', function(){
  $('.urduPage').slideToggle();
});
$(document).on('click touch', function(event) {
  if (!$(event.target).parents().addBack().is('.urduPage')) {
    $('.urduPage').hide();
  }
});
$('.urduPage').on('click touch', function(event) {
  event.stopPropagation();
});
