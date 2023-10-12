import express from 'express'
import { conn } from './db.js'
import { PORT } from './config.js'

const app = express()

app.get('/', async (req, res) => {
    const [rows] = await conn.query('select * from users')
    res.json(rows)
})

app.get('/pin', async (req, res) => {
    const [rows] = await conn.query('select "hello world" as result');
    console.log('resultado', result[0])
    res.json(rows[0])
})

app.get('/create', async (req, res) => {
    const [result] = await conn.query('insert into users(name) values ("wanyos")')
    res.json(result)
})

app.listen(PORT)
console.log('server on port..', PORT)