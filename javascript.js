function andmetüüp(evt, tüüp) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("sakksisu");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("sakklink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tüüp).style.display = "block";
  evt.currentTarget.className += " active";
} 

//Kood ei ole minu kirjutatud! Autoriks on W3Schools, kood saadud lehelt https://www.w3schools.com/howto/howto_js_tabs.asp