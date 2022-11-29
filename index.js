
    // Variables
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Caramelo',
            descripcion: 'Descripción del producto',
            precio: 5,
            imagen: 'imagen'
        },
        {
            id: 2,
            nombre: 'Chicle',
            descripcion: 'Descripción del producto',
            precio: 4,
            imagen: 'imagen'
        },
        {
            id: 3,
            nombre: 'Chupetin',
            descripcion: 'Descripción del producto',
            precio: 1,
            imagen: 'imagen'
        },
        {
            id: 4,
            nombre: 'Alfajor',
            descripcion: 'Descripción del producto',
            precio: 3,
            imagen: 'imagen'
        }

    ];

    let carrito = [];
          const divisa = '$';
          const DOMitems = document.querySelector('#items');
          const DOMcarrito = document.querySelector('#carrito');
          const DOMtotal = document.querySelector('#total');
          const DOMbotonVaciar = document.querySelector('#boton-vaciar');



          // Funciones

        /**
          * Dibuja todos los productos a partir de la base de datos. 
          */
         function renderizarProductos() {
            baseDeDatos.forEach((info) => {
                // Estructura
                const miNodo = document.createElement('div');
                miNodo.classList.add('card', 'col-sm-4');
                // Body
                const miNodoCardBody = document.createElement('div');
                miNodoCardBody.classList.add('card-body');
                // Titulo
                const miNodoTitle = document.createElement('h2');
                miNodoTitle.classList.add('card-title');
                miNodoTitle.textContent = info.nombre;
                // Imagen
                const miNodoImagen = document.createElement('img');
                miNodoImagen.classList.add('img-fluid');
                miNodoImagen.setAttribute('src', info.imagen);
                // Precio
                const miNodoPrecio = document.createElement('p');
                miNodoPrecio.classList.add('card-text');
                miNodoPrecio.textContent = `${info.precio}${divisa}`;
                // Boton 
                const miNodoBoton = document.createElement('button');
                miNodoBoton.classList.add('btn', 'btn-primary');
                miNodoBoton.textContent = '+';
                miNodoBoton.setAttribute('marcador', info.id);
                miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
               
                // Insertamos
                miNodoCardBody.appendChild(miNodoImagen);
                miNodoCardBody.appendChild(miNodoTitle);
                miNodoCardBody.appendChild(miNodoPrecio);
                miNodoCardBody.appendChild(miNodoBoton);
                miNodo.appendChild(miNodoCardBody);
                DOMitems.appendChild(miNodo);
            });
        }

        /**
          * Evento para añadir un producto al carrito de la compra
          */
         function anyadirProductoAlCarrito(evento) {
            // Anyadimos el Nodo a nuestro carrito
            carrito.push(evento.target.getAttribute('marcador'))
            // Actualizamos el carrito 
            renderizarCarrito();

        }


