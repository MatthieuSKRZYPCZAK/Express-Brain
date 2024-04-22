"use strict"

import express from 'express';
import router  from './app/routers/router.js';
import session from 'express-session';
const app = express();
const port = 3000;

app.use(session({
    secret: 'maCléSecrète',
    resave: true,
    saveUninitialized: true
}));

/* Configuration EJS comme moteur de template */
app.set('view engine', 'ejs');
app.set('views', 'app/views');


app.use(express.json());
/* Middleware pour parser le contenu des requêtes POST */
app.use(express.urlencoded({extended: false}))

/* Fichiers statiques (css, img) */
app.use(express.static('public'));

/* utilisation des routes importé afin de gérer les routes */
app.use(router);

/* Démarrage du serveur */
app.listen(port,()=> {
    console.log(`App listenning on port : ${port}`);
})
