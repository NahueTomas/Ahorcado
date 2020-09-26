// Funciones
function verificarPP(e) {
    e.preventDefault()
    const palabraPP = e.target.children[0].value.toUpperCase().trim()
    const pistaPP = e.target.children[1].value.toUpperCase().trim()

    if (palabraPP === '' || pistaPP === ''){
        window.location.reload()
    }else{
        localStorage.setItem('palabra', palabraPP)
        localStorage.setItem('pista', pistaPP) 
        window.location = "../html/game.html"
    }

}

// Global
const formularioPP = document.querySelector('#form-palabra-pista')
document.addEventListener('submit', verificarPP)