
import cors from 'cors' 
import express from 'express'
import  gerarConselhoAleatorio  from './conselhoHandle.js'

const app = express()
app.use(cors())

app.get("/", (req, res) =>{
	const conselho = gerarConselhoAleatorio() 
	res.send({"Conselho" : conselho}) 
})

const PORT = 3001; 

app.listen(PORT, () => {
	console.log(`Escutando na porta ${PORT}`) 
})
