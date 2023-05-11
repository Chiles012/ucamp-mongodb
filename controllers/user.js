const userModel = require('../models/user');

const getAll = async (req, res) => {
    const users = await userModel.find();

    res
        .status(200)
        .json({
            users: users
        })
        .send()
}

const create = async (req, res) => {

    const { name, email, password, age } = req.body;

    console.log({
        name, email, password, age
    })

    await userModel.create({
        name,
        email,
        password,
        age
    })

    res
        .status(201)
        .json({
            mensaje: "Usuario creado"
        })
        .send()
    
}

module.exports = {
    getAll,
    create
}