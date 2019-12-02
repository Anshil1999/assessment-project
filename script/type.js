function findType()
{
var request = new XMLHttpRequest();

request.open('GET', 'https://pokeapi.co/api/v2/type', true);

request.onreadystatechange = function()
{
	if(this.status == 200 && this.readyState == 4)
	{
	var types = JSON.parse(this.responseText);

	var name1 = document.getElementById('name1');
	name1.innerHTML = "<b>Types of Pokemon:-</b><br><br>";
	for(var i=0;i<20;i++)
	{
	 var type = types.results[i].name;
	 name1.innerHTML += "("+(i+1)+") "+type +"<br>";
 	}
}
}
request.send();
}
