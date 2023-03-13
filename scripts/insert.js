const cadastrar = () => {

    const nome = document.getElementById('nomeFilme').value
    const resumo = document.getElementById('resumo').value
    const nota = document.getElementById('nota').value
    const data = document.getElementById('lancamento').value

	let dados = {
		"resumo": resumo,
		"nota": nota,
		"data": data
	}

	let nomeJson = JSON.stringify(nome)
	let str = JSON.stringify(dados)
	
	if(localStorage.getItem(nomeJson)){
		alert("Cadastro falhou: filme já adicionado no sistema")
	}else{

		localStorage.setItem(nomeJson, str)
		alert("Filme cadastrado com sucesso!")	
			
	}

}

