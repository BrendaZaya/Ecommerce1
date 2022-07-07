
// arrays de productos

    const productos = [
        {
            id: 1,
            nombre: "IPA",
            amargor: "ALTO",
            ibu: "82",
            aroma: "CITRICA",
            ABV: "6,5%",
            tamaño: "500 cc",
            precio: 260
        },
        
        {
            id: 2,
            nombre: "KOLSCH",
            amargor: "MODERADO",
            ibu: "21",
            aroma: "FRUTADA",
            ABV: "4,5%",
            tamaño: "500 cc",
            precio: 220
        },
        
        {
            id: 3,
            nombre: "STOUT",
            amargor: "MEDIO",
            ibu: "42",
            aroma: "TOSTADA",
            ABV: "6,5%",
            tamaño: "500 cc",
            precio: 240
        },
        
        {
            id: 4,
            nombre: "RED IPA",
            amargor: "ALTO",
            ibu: "70",
            aroma: "CITRICA",
            ABV: "6,0%",
            tamaño: "500 cc",
            precio: 260
        },
        
        {
            id: 5,
            nombre: "BARLEY WINE",
            amargor: "MEDIO",
            ibu: "54",
            aroma: "CARAMELO",
            ABV: "11%",
            tamaño: "500 cc",
            precio: 240
        },

        {
            id: 6,
            nombre: "PORTER",
            amargor: "BAJO",
            ibu: "32",
            aroma: "CHOCOLATE",
            ABV: "6,5%",
            tamaño: "500 cc",
            precio: 240
        },

        {
            id: 7,
            nombre: "HONEY",
            amargor: "BAJO",
            ibu: "20",
            aroma: "CITRICA",
            ABV: "6%",
            tamaño: "500 cc",
            precio: 220
        },

        {
            id: 8,
            nombre: "RED HONEY",
            amargor: "BAJO",
            ibu: "15",
            aroma: "ACARAMELADO",
            ABV: "4,5%",
            tamaño: "500 cc",
            precio: 220
        },
        
        {
            id: 9,
            nombre: "IRISH",
            amargor: "MEDIO",
            ibu: "24",
            aroma: "MALTA",
            ABV: "5,3%",
            tamaño: "500 cc",
            precio: 220
        },
        
        {
            id: 10,
            nombre: "GOLDEN ALE",
            amargor: "BAJO",
            ibu: "22",
            aroma: "FRUTAL",
            ABV: "5%",
            tamaño: "500 cc",
            precio: 220
        },
        
        {
            id: 11,
            nombre: "APA",
            amargor: "MEDIO",
            ibu: "34",
            aroma: "LÚPULO",
            ABV: "5,5%",
            tamaño: "500 cc",
            precio: 240
        },
        
        {
            id: 12,
            nombre: "CREAM STOUT",
            amargor: "MODERADO",
            ibu: "32",
            aroma: "CAFÉ",
            ABV: "8%",
            tamaño: "500 cc",
            precio: 260
        },
        
        {
            id: 13,
            nombre: "NEIPA",
            amargor: "ALTO",
            ibu: "62",
            aroma: "LÚPULO",
            ABV: "8,5%",
            tamaño: "500 cc",
            precio: 260
        },

        {
            id: 14,
            nombre: "AMERICAN STOUT",
            amargor: "MEDIO",
            ibu: "42",
            aroma: "CANELA",
            ABV: "6%",
            tamaño: "500 cc",
            precio: 240
        },

        {
            id: 15,
            nombre: "PILSEN",
            amargor: "BAJO",
            ibu: "18",
            aroma: "MALTA",
            ABV: "5%",
            tamaño: "500 cc",
            precio: 220
        }
    ]
    

    // Validar edad

    function validarEdad() {
        if (confirm("Para poder acceder a este contenido, necesitamos validar tu edad. ¿Sos mayor de 18?") == true) {
            alert("Te damos la bienvenida");
        } else {
            alert("Lo sentimos, no podés ingresar");
        }
    }

    // simulacion de compra

    function simuladorCompra() {
        let total = 0;
        let seguirComprando = '';
        do {
            let nombreProducto = prompt("¿Que cerveza querés comprar? (honey, ipa, golden, pilsen, barley wine, kolch, neipa, porter, irish, etc)").toUpperCase();

            let cantidad = parseInt(prompt (`¿Cuantas latas de ${nombreProducto} querés agregar al carrito?`));

            let producto = productos.find(elemento => elemento.nombre === nombreProducto);

            let subtotal = producto.precio * cantidad;

            total = total + subtotal;

            seguirComprando = prompt("¿Querés seguir comprando?").toUpperCase();

        } while (seguirComprando === "SI");

        alert("El precio total a pagar es de: $ " + total);
        
    }

    // buscador

    function buscador() {
        let buscar = prompt("¿Qué cerveza estás buscando?").toUpperCase();

        let resultadosDeBusqueda = productos.filter(elemento => elemento.nombre.includes(buscar));
        console.log(resultadosDeBusqueda);
    }
    
    // filtro

    function filtro() {
        let filtrar = prompt("¿Desea filtrar resultados?").toUpperCase(); 

        if (filtrar === "SI") {

            let asignarFiltro = prompt("¿Que filtro querés aplicar (Nombre, Precio, amargor)").toUpperCase();

            if (asignarFiltro === "NOMBRE") {
                let filtro = prompt("Ingrese nombre").toUpperCase();

                let resultadosDeFiltro = productos.filter((elemento) => elemento.nombre === filtro);
                console.log(resultadosDeFiltro);

            } else if (asignarFiltro === "PRECIO") {
                let filtro = parseInt(prompt("Ingrese precio maximo"));

                let resultadosDeFiltro = productos.filter((elemento) => elemento.precio <= filtro);
                console.log(resultadosDeFiltro);

            } else if (asignarFiltro === "AMARGOR") {
                let filtro = prompt("ingrese amargor deseado (bajo, medio, moderado, alto)").toUpperCase();

                let resultadosDeFiltro = productos.filter((elemento) => elemento.amargor === filtro);
                console.log(resultadosDeFiltro);
            } else {
                alert("El filtro ingresado es invalido");
            }
        }
    }

    // DOM saludo

    function validarEdad() {
        if (confirm("Para poder acceder a este contenido, necesitamos validar tu edad. ¿Sos mayor de 18?") == true) {
            let saludo = document.getElementById("saludo");
            saludo.innerHTML = "Bienvenido";
        } else {
            alert("Lo sentimos, no podés ingresar");
        }
    }

    function usuarioRegistrado() {
        let registro = prompt("¿Estás registrado?").toUpperCase();

        if (registro === "SI") {
            let usuario = prompt("Ingresá tu nombre de usuario").toUpperCase();
            let bienvenida = document.getElementById("tituloContacto");
            bienvenida.innerHTML = usuario + " dejanos tu mensaje";
        } else {
            alert ("Podés registrarte para contactarnos");
        }
    }

    validarEdad()
    usuarioRegistrado();
    // simuladorCompra()
    // buscador()
    // filtro()




