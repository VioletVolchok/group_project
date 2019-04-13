//Uncaught TypeError: Cannot read property 'display' of undefined
// at showLang (script.js:3)
// at HTMLButtonElement.onclick (mapview.html:387)
//
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

//This one works
$("button").click(function(){
    $('.langPage').toggle();
});

// This one works
// function testFunction() {
//     var x = document.getElementsByClassName("langPage");
//     alert(x[0].innerHTML);
// }
