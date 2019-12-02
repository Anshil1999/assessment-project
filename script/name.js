function findPokemon()
{
	var http = new XMLHttpRequest();
	var search = document.getElementById("box").value;
	var url = "https://pokeapi.co/api/v2/pokemon/" + search;
	http.open("GET", url);
	http.setRequestHeader("x-rapidapi-host", "Pokestefan-skliarovV1.p.rapidapi.com");
	http.setRequestHeader("x-rapidapi-key", "52c82ee3e6msh7437aa5efb37eadp125e19jsn304237dd65eb");
	http.onreadystatechange = function()
	{
		if(this.status == 200 && this.readyState == 4)
		{
			var data = JSON.parse(this.responseText);
			var name1 = document.getElementById('name1');

			name = data.name;
			name1.innerHTML="Name: "+name;

			var w1 = document.getElementById('w1');
			weight = data.weight
			w1.innerHTML = "Weight: "+weight+" lbs";

			var h1 = document.getElementById('h1');
			height = data.height
			h1.innerHTML = "Height: "+height+"cm";

			var types = document.getElementById('type');
			type = data.types[0].type.name;
			types.innerHTML = "Type: "+type;

			var abi = document.getElementById('ability')
			abilitys = data.abilities[0].ability.name + " , "+data.abilities[1].ability.name
			abi.innerHTML = "Abilities: " + abilitys;

			var name2 = document.getElementById('move')
			moves = data.moves[0].move.name;
			name2.innerHTML = "Moves: "+moves;

			var imgs = document.getElementById('pok_img');
			image_src = data.sprites.front_default
			imgs.setAttribute("src",image_src);
		}
	}
	http.send();
}
