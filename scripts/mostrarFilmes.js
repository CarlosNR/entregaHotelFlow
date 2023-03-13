window.onload = function() {

    for (var i = 0; i < localStorage.length; i++){

        let key =  Object.keys(localStorage)
        
        document.getElementById("filmes").innerHTML += 
            '<option value="'+i+'">'
            + key[i].toString().slice(1, -1)
            + '</option>' 
	}
    
}