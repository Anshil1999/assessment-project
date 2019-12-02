var request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/region', true);

request.onload = function()
{
	var regions = JSON.parse(this.responseText);
	var reg = document.getElementById('reg');
	reg.innerHTML +="<br><br><br><b>Different Regions for you to search for:-<b><br><br>";
	for(var i =0;i<7;i++)
	 {
		 region = regions.results[i].name;
		 reg.innerHTML += "<br>"+"("+(i+1)+") "+region+"<br>";
	 }
}
request.send();

function findRegion()
{
	var reg = document.getElementById('reg')
	reg.innerHTML = "";
	var http = new XMLHttpRequest();
	var search = document.getElementById("box").value;
	var url = "https://pokeapi.co/api/v2/region/" + search;
	http.open("GET", url);
	http.onreadystatechange = function()
	{
		if(this.status == 200 && this.readyState == 4)
		{
			var data = JSON.parse(this.responseText);
			console.log(data)
			var name1 = document.getElementById('name1');
			name = data.name;
			name1.innerHTML = "Name of the region:- " + name;

			var name9 = document.getElementById('name9')
			// location = data.locations[0].name;
			name9.innerHTML = "Locations of the specified region are:- " + data.locations[0].name + " , " + data.locations[1].name;

			var name3 =document.getElementById('name3')
			generation = data.main_generation.name
			name3.innerHTML = "GENERATION THIS REGION WAS INTRODUCED INTO:- "+generation;

			var name4 = document.getElementById('name4')
			groups = data.version_groups[0].name + " , " + data.version_groups[1].name;
			name4.innerHTML = "LIST OF VERSION GROUPS WHERE THI REGION CAN BE VISITED:- " + groups;
		}
	}
	http.send();
}
