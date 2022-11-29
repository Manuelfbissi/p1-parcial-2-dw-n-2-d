
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

          