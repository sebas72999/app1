require('dotenv').config(); // Cargar configuración desde .env
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importar CORS

// Configuración de la app
const app = express();
app.use(bodyParser.json());
app.use(cors()); // Usar CORS

// Verificar que las variables de entorno se carguen correctamente
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);

// Configuración de la base de datos
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        process.exit(1);
    }
    console.log('Conexión exitosa a la base de datos');

    // Seleccionar la base de datos explícitamente
    db.query('USE ' + process.env.DB_NAME, (err) => {
        if (err) {
            console.error('Error al seleccionar la base de datos:', err);
            process.exit(1);
        }
        console.log('Base de datos seleccionada correctamente');
    });
});

// Consulta de prueba
db.query('SELECT 1', (err, results) => {
    if (err) {
        console.error('Error en la consulta de prueba:', err);
    } else {
        console.log('Consulta de prueba exitosa:', results);
    }
});

// Rutas
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Inicializar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
