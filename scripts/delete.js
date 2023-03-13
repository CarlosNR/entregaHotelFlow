const deletar = (i) => {

    console.log(i)

	localStorage.removeItem(localStorage.key(i))
	window.location.reload();

}

