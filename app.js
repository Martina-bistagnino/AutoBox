const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Configuración de Pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Archivos públicos: CSS, imágenes, etc.
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal
app.get("/", (req, res) => {
    res.render("index");
});

//simulador de back que se va a pisar con clientes.json de Dalila
app.get("/clientes", (req, res) => {

    const clientes = [
        {
            id: 1,
            nombre: "Carlos",
            apellido: "Gómez",
            telefono: "3515551234",
            email: "carlos@gmail.com"
        },
        {
            id: 2,
            nombre: "Lucía",
            apellido: "Fernández",
            telefono: "1155558877",
            email: "lucia@gmail.com"
        }
    ];

    res.render("clientes", {
        clientes: clientes
    });
});

//simulador de back que se va a pisar con Jorge
app.get("/vehiculos", (req, res) => {

    const vehiculos = [
        {
            id: 1,
            patente: "AB123CD",
            marca: "Toyota",
            modelo: "Corolla",
            clienteId: 1
        },
        {
            id: 2,
            patente: "AC456EF",
            marca: "Ford",
            modelo: "Focus",
            clienteId: 2
        }
    ];

    res.render("vehiculos", {
        vehiculos: vehiculos
    });
});

app.get("/vehiculos/nuevo", (req, res) => {
    res.render("nuevoVehiculo");
});
app.get("/vehiculos/:id", (req, res) => {

    const vehiculos = [
        {
            id: 1,
            patente: "AB123CD",
            marca: "Toyota",
            modelo: "Corolla",
            clienteId: 1
        },
        {
            id: 2,
            patente: "AC456EF",
            marca: "Ford",
            modelo: "Focus",
            clienteId: 2
        }
    ];

    const id = Number(req.params.id);

    const vehiculo = vehiculos.find(
        vehiculo => vehiculo.id === id
    );

    res.render("vehiculoDetalle", {
        vehiculo: vehiculo
    });
});

//simulador de back que se va a pisar con... 
app.get("/turnos", (req, res) => {

    const turnos = [
        {
            id: 1,
            clienteId: 1,
            vehiculoId: 1,
            fecha: "15/09/2026",
            hora: "10:00",
            servicio: "Cambio de aceite"
        },
        {
            id: 2,
            clienteId: 2,
            vehiculoId: 2,
            fecha: "16/09/2026",
            hora: "14:30",
            servicio: "Revisión general"
        }
    ];

    res.render("turnos", {
        turnos: turnos
    });
});
app.get("/turnos/nuevo", (req, res) => {
    res.render("nuevoTurno");
});

app.get("/turnos/:id", (req, res) => {

    const turnos = [
        {
            id: 1,
            clienteId: 1,
            vehiculoId: 1,
            fecha: "15/09/2026",
            hora: "10:00",
            servicio: "Cambio de aceite"
        },
        {
            id: 2,
            clienteId: 2,
            vehiculoId: 2,
            fecha: "16/09/2026",
            hora: "14:30",
            servicio: "Revisión general"
        }
    ];

    const id = Number(req.params.id);

    const turno = turnos.find(
        turno => turno.id === id
    );

    res.render("turnoDetalle", {
        turno: turno
    });
});

app.get("/clientes/nuevo", (req, res) => {
    res.render("nuevoCliente");
});

//:ID Ruta dinamica 
app.get("/clientes/:id", (req, res) => {

    const clientes = [
        {
            id: 1,
            nombre: "Carlos",
            apellido: "Gómez",
            telefono: "3515551234",
            email: "carlos@gmail.com"
        },
        {
            id: 2,
            nombre: "Lucía",
            apellido: "Fernández",
            telefono: "1155558877",
            email: "lucia@gmail.com"
        }
    ];

    const id = Number(req.params.id);

    const cliente = clientes.find(
        cliente => cliente.id === id
    );

    res.render("clienteDetalle", {
        cliente: cliente
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor AutoBox funcionando en http://localhost:${PORT}`);
});