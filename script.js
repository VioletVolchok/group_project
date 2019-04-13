function showLang() {
  var langBox = document.getElementsById('langPage');
  if (langBox.style.display === 'none') {
    langBox.style.display = 'block';
  } else {
    langBox.style.display = 'none';
  }
}

showLang();
