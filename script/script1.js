var xhr;
var menuItem = document.getElementsByClassName("menuItem");
var clickedMenuItem;
var fileName;

function setXhr() {
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    xhr = new ActiveXObject("Msxml2.XMLHTTP");
  } else {
    throw new Error("Ajax is not supported by your browser");
  }
}

function getMenuItem() {

  for (i = 0; i < menuItem.length; i++) {
    menuItem[i].onclick = function(e) {
      clickedMenuItem = this.id;
    }

    menuItem[i].addEventListener('click', getMenuItem);
  }

  if (clickedMenuItem === "sco") {
    fileName = "sco.html";
  } else if (clickedMenuItem === "dev") {
    fileName = "dev.html";
  } else if (clickedMenuItem === "uex") {
    fileName = "uex.html";
  } else if (clickedMenuItem === "ptm") {
    fileName = "ptm.html";
  } else {
     fileName = "index.html";
   }

  getData(fileName)
}

function getData(file) {
  setXhr();
  fileName = file;
  xhr.onreadystatechange = function() {
    if (xhr.readyState < 4)
      document.getElementsByClassName("content").innerHTML = "Loading...";
    else if (xhr.readyState === 4) {
      if (xhr.status == 200 && xhr.status < 300) {
        document.getElementById("content").innerHTML = xhr.responseText;
      }
    }
  }
  xhr.open('GET', '../content/' + fileName, true);
  xhr.send(null);
}

function loadFunctions() {
  getMenuItem();
}


document.onload = loadFunctions();
