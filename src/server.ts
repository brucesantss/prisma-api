import express from 'express';

import UserRouter from './routes/UserRouter';

const app = express();
const port = 8080;

//compatibilidade
app.use(express.json());

//rotas
app.use('/', UserRouter)

app.get('/', (req, res) => {
    return res.status(200).json({ msg: 'bem-vindo a home.' });
});

app.listen(port, () => {
    console.log('server: running...');
})

