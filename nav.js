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
          document.getElementById("contact").style.height = 0;
          document.getElementById("canvas").style.visibility = "visible";
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
      }

    else if (data.includes("projects.html")) {
          switch_Projects("projects.html");
      }

    else if (data.includes("index.html")) {
          switch_Home("index.html");
    }

    else {
        console.log(e.state);
    }
});