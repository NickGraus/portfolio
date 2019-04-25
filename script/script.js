var xhr;


function setXhr() {
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    xhr = new ActiveXObject("Msxml2.XMLHTTP");
  } else {
    throw new Error("Ajax is not supported by your browser");
  }
}

function getData(idName) {
  setXhr();

  xhr.onreadystatechange = function() {
    if (xhr.readyState < 4)
      document.getElementsByClassName("idName").innerHTML = "Loading...";
    else if (xhr.readyState === 4) {
      if (xhr.status == 200 && xhr.status < 300) {
        var data = JSON.parse(this.responseText);

        var output = '';

        for (var i in data) {
          output += '<h2>' + data[i].vak + '</h2>';
          for (var n in data[i].doelstellingen) {
            output += '<h3>' + data[i].doelstellingen[n].title + '</h3>' +
              '<p>' + data[i].doelstellingen[n].content + '</p>'
          }
        }

        document.getElementById(idName).innerHTML = output;
      }
    }
  }
  xhr.open('GET', 'content/pagecontent.json', true);
  xhr.send(null);
}

function getMenuItem() {
  var clickedItem = document.getElementById("menuItem").onclick();
  if (clickedItem == "home") {
    console.log("home");
  } else if (clickedItem == "sco") {
    console.log("sco")
  } else if (clickedItem == "uex") {
    console.log("sco")
  } else if (clickedItem == "ptm") {
    console.log("sco")
  } else if (clickedItem == "dev") {
    console.log("dev")
  }
}

function loadFunctions() {
  getData('content');
  getMenuItem();
}


document.onload = loadFunctions();
