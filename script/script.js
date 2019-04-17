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

function getData() {
  setXhr();

  xhr.onreadystatechange = function() {
    if (xhr.readyState < 4)
      document.getElementById('content').innerHTML = "Loading...";
    else if (xhr.readyState === 4) {
      if (xhr.status == 200 && xhr.status < 300) {
        var data = JSON.parse(this.responseText);

        var output = '';

        for (var i in data) {
          output += '<ul>' +
            '<li>' + data[i].vak + '</li>' +
            '<li>' + data[i].doelstellingen.title + '</li>' +
            '</ul>';
        }

        document.getElementById('content').innerHTML = output;
      }
    }
  }
  xhr.open('GET', 'content/pagecontent.json', true);
  xhr.send(null);
}


document.onload = getData();
