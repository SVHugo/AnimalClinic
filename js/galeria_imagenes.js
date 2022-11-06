const galerias = [
    '../img/gato2.jpg',
    '../img/gato1.jpg',
    '../img/gato3.jpg',
    '../img/gato4.jpg',
    '../img/perro1.jpg',
    '../img/perro2.jpg',
    '../img/perro3.jpg',
    '../img/perro4.jpg',
    '../img/gato5.jpg',
    '../img/gato6.jpg',
    '../img/gato7.jpg',
    '../img/gato8.jpg',
    '../img/perro5.jpg',
    '../img/perro6.jpg',
    '../img/perro8.jpg',
    '../img/perro9.jpg',
    '../img/gato10.jpg',
    '../img/gato11.jpg',
    '../img/gato12.jpg',
    '../img/perro10.jpg'];

const grilla_galeria = document.querySelector("#grilla_galeria")

    
galerias.forEach(function(element,index){
    let imagen = document.createElement('img')
    imagen.className = "galeria"
    
    imagen.src =element;
    imagen.style.objectFit="cover";

    grilla_galeria.insertAdjacentElement("beforeend",imagen)
    console.log(grilla_galeria)
})
