// FUNCIONES
function numeroRandom(nro) {
    return Math.round(Math.random() * nro)
}

function formatearPalabra(palabra){
    palabra = palabra.toUpperCase()
    palabra = palabra.split('')
    return palabra
}

function imprimirPista(indice){
    switch (indice){
        case 0:
            return 'ANIMAL'
            break
        case 1:
            return 'FRUTA'
            break
        case 2:
            return 'PAIS'
            break
        case 3:
            return 'COLOR'
            break
        case 4:
            return 'COMIDA'
            break
        default:
            window.location.reload()
            break
    }
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
    
    ingresado = e.target.children[0].value.toUpperCase()
    form.reset()
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
    

// GLOBAL
const divPalabra = document.querySelector('.palabra'),
input = document.querySelector('input'),
imagen = document.querySelector('img'),
form = document.querySelector('form')

let ingresado, acu = 0, letrasUsadasCorrecto = []


let indiceC = numeroRandom(4)
  categoria = categorias[`${imprimirPista(indiceC)}`],
    palabra = categoria[numeroRandom(categoria.length - 1)]

document.querySelector('h1').textContent = imprimirPista(indiceC)
palabra = formatearPalabra(palabra)


imprimirPalabra(palabra)
document.addEventListener('submit', arrancar)