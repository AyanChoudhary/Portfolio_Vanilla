let path = "./"
let data;

function switch_Home(url)
{
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
          data = window.location.href;
          document.getElementById("parent").innerHTML = this.responseText;
          document.getElementById("portf").style.fontWeight = "bold";
          document.getElementById("about").style.fontWeight = "normal";
          document.getElementById("proj").style.fontWeight = "normal";
          document.getElementById("canvas").style.visibility = "visible";
          document.getElementById("chart").style.display = "none";
          openclose();
          history.pushState(data, null, "index.html");
        }
    };

  xhttp.open("GET", url, true);
  xhttp.send(null);
}

function switch_About_Me(url)
{
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
          data = window.location.href;
          document.getElementById("parent").innerHTML = this.responseText;
          document.getElementById("about").style.fontWeight = "bold";
          document.getElementById("portf").style.fontWeight = "normal";
          document.getElementById("proj").style.fontWeight = "normal";
          document.getElementById("canvas").style.visibility = "hidden";
          document.getElementById("chart").style.display = "block";
          openclose();
          history.pushState(data, null, "about_me.html");
        }
      };

  xhttp.open("GET", url, true);
  xhttp.send(null);
}

function switch_Projects(url)
{
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
          data = window.location.href;
          document.getElementById("parent").innerHTML = this.responseText;
          document.getElementById("proj").style.fontWeight = "bold";
          document.getElementById("portf").style.fontWeight = "normal";
          document.getElementById("about").style.fontWeight = "normal";
          document.getElementById("canvas").style.visibility = "hidden";
          document.getElementById("chart").style.display = "none";
          openclose();
          history.pushState(data, null, "projects.html");
        }
  };
  xhttp.open("GET", url, true);
  xhttp.send(null);
}

window.addEventListener('popstate', function(e){
    if (data.includes("about_me.html")) {
          switch_About_Me("about_me.html");
          openclose();
          document.getElementById("chart").style.display = "block";
      }

    else if (data.includes("projects.html")) {
          switch_Projects("projects.html");
          openclose();
          document.getElementById("chart").style.display = "none";
      }

    else if (data.includes("index.html")) {
          switch_Home("home.html");
          openclose();
          document.getElementById("chart").style.display = "none";
    }

    else {
        console.log(e.state);
    }
});