const express = require('express');
const router = express.Router();

const Tarea = require('../models/tarea');

router.get('/', async (req, res) =>{
    const tareas = await Tarea.find()
    console.log(tareas)
    res.render('index', {
        tareas
    });
});

router.post('/add', async (req, res) => {
    const tarea = new Tarea(req.body);
    await tarea.save();
    res.redirect('/');
})

router.post('/editar/:id', async (req, res) => {
    const { id } = req.params;
    await Tarea.update({_id: id}, req.body);
    res.redirect('/');
})

router.get('/hecho/:id', async (req, res) => {
    const { id } = req.params;
    const tarea = await Tarea.findById(id);
    tarea.status = !tarea.status
    await tarea.save();
    res.redirect('/');
});

router.get('/editar/:id', async (req, res) => {
    const { id } = req.params;
    const tarea = await Tarea.findById(id);
    res.render('editar', {
        tarea
    });
})

router.get('/borrar/:id', async (req, res) => {
    const { id } = req.params;
    await Tarea.remove({_id: id});
    res.redirect('/');
})

module.exports = router;