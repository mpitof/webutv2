function showmenu()
{
	var menu=document.getElementById("menu");
	if(menu.style.display=="block" || menu.style.display=="" )
		document.getElementById("menu").style.display="none";
	else
		menu.style.display="block";
}