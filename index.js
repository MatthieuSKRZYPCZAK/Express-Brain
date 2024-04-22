"use strict"

import express from 'express';
import router  from './app/routers/router.js';
const app = express();
const port = 3000;

/* Configuration EJS comme moteur de template */
app.set('view engine', 'ejs');
app.set('views', 'app/views');

/* Middlewre pour parser le contenu des requêtes POST */
app.use(express.urlencoded({extended: true}))

/* Fichiers statiques (css, img) */
app.use(express.static('public'));

/* utilisation des routes importé afin de gérer les routes */
app.use(router);

/* Démarrage du serveur */
app.listen(port,()=> {
    console.log(`App listenning on port : ${port}`);
})
