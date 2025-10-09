// Datos de los productos (puedes modificarlos o añadir más)
const productos = {
	moca: [
		{ nombre: "Moca Clásico", precio: "$12", img: "https://i.imgur.com/6QqC5L2.jpg" },
		{ nombre: "Moca Blanco", precio: "$13", img: "https://i.imgur.com/sC2Sgqz.jpg" },
		{ nombre: "Moca Caramelo", precio: "$14", img: "https://i.imgur.com/fqj7Dnb.jpg" },
		{ nombre: "Moca Helado", precio: "$15", img: "https://i.imgur.com/Gm4BfPp.jpg" },
	],
	americano: [
		{ nombre: "Americano Suave", precio: "$10", img: "https://i.imgur.com/8vO8TkT.jpg" },
		{ nombre: "Americano Intenso", precio: "$11", img: "https://i.imgur.com/pw2dQAf.jpg" },
		{ nombre: "Americano Doble", precio: "$12", img: "https://i.imgur.com/3zW5Zsk.jpg" },
		{ nombre: "Americano Premium", precio: "$13", img: "https://i.imgur.com/6u5H8bC.jpg" },
	],
	capuchino: [
		{ nombre: "Capuchino Clásico", precio: "$12", img: "https://i.imgur.com/lG0PK6T.jpg" },
		{ nombre: "Capuchino Canela", precio: "$13", img: "https://i.imgur.com/yD7yY9z.jpg" },
		{ nombre: "Capuchino Vainilla", precio: "$14", img: "https://i.imgur.com/vsLt4sQ.jpg" },
		{ nombre: "Capuchino Helado", precio: "$15", img: "https://i.imgur.com/yHvAZlw.jpg" },
	],
	especialidad: [
		{ nombre: "Café del Valle", precio: "$16", img: "https://i.imgur.com/t94HywA.jpg" },
		{ nombre: "Café de Altura", precio: "$17", img: "https://i.imgur.com/ZgxIVZj.jpg" },
		{ nombre: "Café Orgánico", precio: "$18", img: "https://i.imgur.com/qAfzbl2.jpg" },
		{ nombre: "Café Reserva", precio: "$19", img: "https://i.imgur.com/yq7W0rU.jpg" },
	],
};

// Función para mostrar productos dinámicamente
function mostrarProductos() {
	for (let categoria in productos) {
		const contenedor = document.getElementById(categoria);
		productos[categoria].forEach((prod) => {
			const div = document.createElement("div");
			div.classList.add("producto");
			div.innerHTML = `
				<img src="${prod.img}" alt="${prod.nombre}">
				<h3>${prod.nombre}</h3>
				<p class="precio">${prod.precio}</p>
				<button class="btn-comprar">Agregar al carrito</button>
			`;
			contenedor.appendChild(div);
		});
	}
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", mostrarProductos);
