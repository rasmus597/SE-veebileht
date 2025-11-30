function andmetüüp(evt, tüüp) {
  var i, tabcontent, tablinks;
  
  //Automaatselt peidab kõik elemendid, mille klass on "sakksisu"
  tabcontent = document.getElementsByClassName("sakksisu");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  //Leiab kõik elemendid, mille klass on "sakklink" ja võtab neilt "active" märgise
  tablinks = document.getElementsByClassName("sakklink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
 //Näitab antud saki infot ning määrab ta aktiivseks
  document.getElementById(tüüp).style.display = "block";
  evt.currentTarget.className += " active";
} 

//Kood ei ole minu kirjutatud! Autoriks on W3Schools, kood saadud lehelt https://www.w3schools.com/howto/howto_js_tabs.asp