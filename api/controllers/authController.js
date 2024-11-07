const db = require('../db');
const bcrypt = require('bcrypt');

exports.register = (req, res) => {
    const { nombre, lugar, correo, clave } = req.body;

    // Verificar si el usuario ya existe
    db.query('SELECT * FROM users WHERE email = ?', [correo], async (err, results) => {
        if (err) {
            console.error('Error en la consulta de la base de datos:', err);
            return res.status(500).json({ message: 'Error en la consulta de la base de datos' });
        }
        if (results.length > 0) {
            return res.status(400).json({ message: 'Este correo ya está registrado.' });
        }

        try {
            const hashedPassword = await bcrypt.hash(clave, 10);

            // Insertar usuario en la base de datos
            db.query('INSERT INTO users (username, email, password, place) VALUES (?, ?, ?, ?)',
                [nombre, correo, hashedPassword, lugar], (err, results) => {
                    if (err) {
                        console.error('Error al registrar el usuario:', err);
                        return res.status(500).json({ message: 'Error al registrar el usuario' });
                    }
                    res.status(201).json({ message: 'Usuario registrado con éxito' });
                });
        } catch (error) {
            console.error('Error al encriptar la contraseña:', error);
            res.status(500).json({ message: 'Error al encriptar la contraseña' });
        }
    });
};


exports.login = (req, res) => {
    const { correo, clave } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [correo], async (err, results) => {
        if (err) {
            console.error('Error en la consulta de la base de datos:', err);
            return res.status(500).json({ message: 'Error en la consulta de la base de datos' });
        }
        if (results.length === 0) {
            return res.status(400).json({ message: 'Credenciales incorrectas' });
        }

        try {
            const user = results[0];
            const match = await bcrypt.compare(clave, user.password);

            if (!match) {
                return res.status(400).json({ message: 'Credenciales incorrectas' });
            }

            res.status(200).json({ message: 'Inicio de sesión exitoso' });
        } catch (error) {
            console.error('Error al comparar la contraseña:', error);
            res.status(500).json({ message: 'Error al comparar la contraseña' });
        }
    });
};

exports.recoverPassword = (req, res) => {
    const { email } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) {
            console.error('Error en la consulta de la base de datos:', err);
            return res.status(500).json({ message: 'Error en la consulta de la base de datos' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Correo no encontrado' });
        }

        res.status(200).json({ message: 'Correo de recuperación enviado' });
    });
};
