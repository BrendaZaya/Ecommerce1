
    // botones de confirmacion de edad 

    const mayor = document.getElementById("mayorDeEdad");
    const menor = document.getElementById("menorDeEdad");
    const contenedorModal = document.getElementById("contenedorModal");

    function verificarEdad() {

        mayor.addEventListener("click", respuestaClick);
        function respuestaClick () {
            contenedorModal.classList.remove('contenedorModal');
        }

        menor.addEventListener("click", salirDelSitio);
        function salirDelSitio () {
            window.location = "https://www.youtube.com/watch?v=ZAAjm4IJhFY";
        }
    }

    


// traer al contenedor de las tarjetas

const contenedorProductos = document.querySelector('.contenedorProductos');

// Conector con json

try {
    fetch('../api.json')
    .then(respuesta => {
        return respuesta.json()
    })
    .then(datos => {
        let contador = 0;
        while (datos.length > contador) {

            // Creacion de cards para productos

            let producto = document.createElement('div');

            let tituloProducto = document.createElement('div');

            let iconoContainer = document.createElement('div');
            let icono = document.createElement('img');

            let nombreProducto = document.createElement('h2');

            let imgContenedor = document.createElement('div');
            let img = document.createElement('img');

            let infoProducto = document.createElement('div');
            let especificaciones = document.createElement('div');

            let ul = document.createElement('ul');
            let liIbu = document.createElement('li');
            let liAbv = document.createElement('li');
            let liCc = document.createElement('li');

            let botonAgregar = document.createElement('buton');
            let precioBoton = document.createElement('p');
            let agregarAlCarrito = document.createElement('p');
            let descripcionProducto = document.createElement('div')
            let textoDescriptivo = document.createElement('p');

            // asignación de clases

            producto.setAttribute('class', 'producto');

            tituloProducto.setAttribute('class', 'tituloProducto');
            iconoContainer.setAttribute('class', 'iconoContainer');
            icono.setAttribute('class', 'icono');
            icono.setAttribute('src', datos[contador].icono);
            nombreProducto.setAttribute('class', 'nombreProducto');

            imgContenedor.setAttribute('class', 'imgContenedor');
            img.setAttribute('src', datos[contador].img);

            infoProducto.setAttribute('class', 'infoProducto');

            especificaciones.setAttribute('class', 'especificaciones');
            ul.setAttribute('class', 'ul');
            liIbu.setAttribute( 'class', 'ibu');
            liAbv.setAttribute('class', 'abv');
            liCc.setAttribute( 'class', 'cc');

            botonAgregar.setAttribute('class', 'botonAgregar');
            precioBoton.setAttribute('class', 'precio');
            agregarAlCarrito.setAttribute('class', 'agregarAlCarrito');

            descripcionProducto.setAttribute('class', 'descripcionProducto');
            textoDescriptivo.setAttribute('class', 'textoDescriptivo')

            // Completar información de las cars con los productos json

            nombreProducto.innerHTML = datos[contador].nombre;
            liIbu.innerHTML = "IBU: " + datos[contador].ibu;
            liAbv.innerHTML = "ABV: " + datos[contador].ABV;
            liCc.innerHTML = datos[contador].tamaño;
            agregarAlCarrito.innerHTML = "Agregar al carrito";
            precioBoton.innerHTML = "$ " + datos[contador].precio;

            textoDescriptivo.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, at recusandae!";
            
            // ordenado de las etiquetas (padres e hijos)
            contenedorProductos.appendChild(producto);
            
            producto.appendChild(tituloProducto);
            producto.appendChild(imgContenedor);
            producto.appendChild(infoProducto);

            tituloProducto.appendChild(iconoContainer);
            tituloProducto.appendChild(nombreProducto);

            iconoContainer.appendChild(icono);

            imgContenedor.appendChild(img);

            infoProducto.appendChild(especificaciones);
            infoProducto.appendChild(botonAgregar);
            infoProducto.appendChild(descripcionProducto);

            especificaciones.appendChild(ul);
            ul.appendChild(liIbu);
            ul.appendChild(liAbv);
            ul.appendChild(liCc);

            botonAgregar.appendChild(precioBoton);
            botonAgregar.appendChild(agregarAlCarrito);

            descripcionProducto.appendChild(textoDescriptivo);

            contador++;
        }
    });
} catch (e) {
    console.log(e);
}

// llamada a la funcion

verificarEdad();
