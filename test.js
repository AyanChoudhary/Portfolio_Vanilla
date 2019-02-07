let x = 0;
function openclose()
{
	if (x%2 === 0) 
	{ 
		document.getElementById('topnav').style.height = "25vh";
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
	document.getElementById('topnav').style.height = "0vh";
}