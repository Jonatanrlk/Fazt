import {Router} from 'express'

const router = Router()

router.get('/',(req, res) =>{
    res.send("Hello world");
});

router.get('/about',(req, res) =>{
    res.send("texto abuot");
});

export default router;


