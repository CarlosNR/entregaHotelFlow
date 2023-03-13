window.onload = function() {
    for (var i = 0; i < localStorage.length; i++){
	
		let ver = localStorage.getItem(localStorage.key(i), localStorage[localStorage.key(i)])
		let dados = JSON.parse(ver)

        let key =  Object.keys(localStorage)
        
        if(i>1){
            document.getElementById("filmes").innerHTML += 
            '<div class="hidden card"><div class="card-header" id="titulo"><h2>'
            + key[i].toString().slice(1, -1)
            + '</h2>'
            + '</div><div class="card-body"><p class="card-text">' 
            + dados.resumo 
            + '</p><p class="card-text">' 
            + dados.nota 
            + '</p><p class="card-text">'
            + dados.data + '</p>'
            + '<button class="btn btn-danger" id="delete" onclick="deletar('+i+')">Deletar</button>'
            + '</div></div>'
        }else{
            document.getElementById("filmes").innerHTML += 
            '<div class="card"><div class="card-header" id="titulo"><h2>'
            + key[i].toString().slice(1, -1)
            + '</h2>'
            + '</div><div class="card-body"><p class="card-text">' 
            + dados.resumo 
            + '</p><p class="card-text">' 
            + dados.nota 
            + '</p><p class="card-text">'
            + dados.data + '</p>'
            + '<button class="btn btn-danger" id="delete" onclick="deletar('+i+')">Deletar</button>'
            + '</div></div>'
            
        }
        	
	}
    
}


