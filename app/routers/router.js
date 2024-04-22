import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    if(req.session && !req.session.goodNumber) {
        req.session.goodNumber = parseInt(Math.random()*100);
    }
    console.log(req.session.goodNumber);
    const flash = {...req.session.flash}
    req.session.flash = {};
    res.render('index', {goodNumber: req.session.goodNumber, flash: flash });
})

router.post('/', (req, res) => {
    req.session.flash = {};
    let playAgain = req.body.playAgain;
    if(playAgain){
        req.session.goodNumber = parseInt(Math.random()*100);
        console.log(req.session.goodNumber);
        const flash = {...req.session.flash}
        req.session.flash = {};
        return res.render('index', {goodNumber: req.session.goodNumber, flash: flash });
    }
    if(parseInt(req.body.reponse) > req.session.goodNumber) {
        req.session.flash.status="danger"
        req.session.flash.message="Nombre trop grand"
    } else if(parseInt(req.body.reponse) < req.session.goodNumber) {
        req.session.flash.status="danger"
        req.session.flash.message="Nombre trop petit"
    } else if(parseInt(req.body.reponse) === req.session.goodNumber) {
        req.session.flash.status="success"
        req.session.flash.message="Bravo !"
    } else {
        req.session.flash.status="danger"
        req.session.flash.message="Vous devez fournir un nombre"
    }
    res.redirect('/');
})

export default router;