import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: "EXPRESS BRAINS"
    })
})

router.post('/mistere', (req, res) => {
    
})

export default router;