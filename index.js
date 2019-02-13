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

$('.h').live('click', function(){
	openclose();
});