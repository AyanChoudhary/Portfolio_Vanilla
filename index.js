let x = 0;
function openclose()
{
	if (x%2 === 0) 
	{ 
		document.getElementById('topnav').style.height = "20vh";
		x++; 
	}
	
	else
	{
		document.getElementById('topnav').style.height = "0vh";
		x++;
	}
}

function closenav()
{
	if (x%2 != 0) 
	{
		document.getElementById('topnav').style.height = "0vh";
		x++;
	}
}

let path = "/home/ayan/Desktop/Portfolio/"

function switch_About_Me(url)
{
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET", path + url, true);
	xhttp.responseType = 'text';
	xhttp.onreadystatechange = function() {
		if (this.readystate === 4 && this.status === 200) {
			document.getElementById("parent").innerHTML = this.responseText;
			document.getElementById("portf").style.fontWeight = "900";
		}
	};
	xhttp.send(null);
}

function switch_Projects(url)
{
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET", path + url, true);
	xhttp.responseType = 'text';
	xhttp.onreadystatechange = function() {
		if (this.readystate === 4 && this.status === 200) {
			document.getElementById("parent").innerHTML = this.responseText;
			document.getElementById("proj").style.fontWeight = "900";
		}
	};
	xhttp.send(null);
}