const pegarDados = async (option) => {
    document.getElementById('dadosAtualizar').style.display='inline-block'
}

const atualizarDados = async () => {
    
    var element = document.getElementById("filmes");
    var valorSel = element.options[element.selectedIndex].value;

    const titulo = localStorage.key(valorSel).toString()

    const resumo = document.getElementById('resumo').value
    const nota = document.getElementById('nota').value
    const data = document.getElementById('lancamento').value

    let dados = {
        "resumo": resumo,
        "nota": nota,
        "data": data
    }

    let str = JSON.stringify(dados)

    localStorage.setItem(titulo, str)

    alert("Atualizado com sucesso")
}
