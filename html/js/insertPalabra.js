// Funciones
function verificarPP(e) {
    e.preventDefault()
    palabra = e.target.children[0].value.toUpperCase().trim()
    const pista = e.target.children[1].value.toUpperCase().trim()

    formulario.reset()

    if (palabra === '' || pista === ''){
        mostrarMensaje('Tiene que rellenar los campos')
        return
    }


    document.querySelector('h1').textContent = pista
    oculto.style.display = 'block' 
    document.querySelector('.form-palabra-pista').style.display = 'none'
    palabra = palabra.split('')
    imprimirPalabra(palabra)

    formLetra.addEventListener('submit', arrancar)
}

function mostrarMensaje(mensaje) {
    const div = document.createElement('div')
    div.textContent = mensaje
    div.classList.add('error')

    document.querySelector('.contenedor').insertBefore(div, document.querySelector('img'))
    document.querySelector('.contenedor-enviar input').disabled = true
    document.querySelector('.contenedor-enviar input').style.backgroundColor = 'rgba(80, 45, 22, 0.326)'

    window.setTimeout(()=>{
        div.remove()
        document.querySelector('.contenedor-enviar input').disabled = false
        document.querySelector('.contenedor-enviar input').style.backgroundColor = '#502d16ff'
    },2000)
}

function imprimirPalabra(arrayPalabra){
    arrayPalabra.forEach(element => {
        const div = document.createElement('div')
        div.setAttribute('class', `${element}`)
        div.classList.add('letra')
        div.textContent = element
        divPalabra.appendChild(div)
})
}

function arrancar(e){
    e.preventDefault()

    ingresado = document.querySelector('.form-letra input').value.toUpperCase()
    formLetra.reset()
    comprobarLetra(palabra, ingresado)

    const stringPalabra = palabra.toString(), 
    stringLetras = letrasUsadasCorrecto.toString()

    if (acu === 6){
        window.setTimeout(()=>{
            window.location = "perdiste.html"
        }, 500)

    }else if(stringLetras === stringPalabra){
        window.setTimeout(()=>{
            window.location = "ganaste.html"
        }, 500)
    }
}

function comprobarLetra(array, letra){
    if (array.indexOf(letra) !== -1){
        array.forEach((element, index) =>{
            if (element === letra){
                divPalabra.children[index].style.color = 'white'
                letrasUsadasCorrecto[index] = letra
            }
        })
    }else{
        acu++
        imagen.setAttribute('src', `img/Frames/horca-${acu}.svg`)
    }
}

// Global
const formulario = document.querySelector('#form-palabra-pista'),
formLetra = document.querySelector('.form-letra'),
imagen = document.querySelector('img'),
divPalabra = document.querySelector('.palabra'),
oculto = document.querySelector('.hidden')

let palabra, ingresado, acu = 0, letrasUsadasCorrecto = []

formulario.addEventListener('submit', verificarPP)