function showLang() {
  var langBox = mapview.getElementsById('langPage');
  if (langBox.style.display === 'none') {
    langBox.style.display = 'block';
  } else {
    langBox.style.display = 'none';
  }
}
