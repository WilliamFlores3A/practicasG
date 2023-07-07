import mongoose from 'mongoose'
import { App } from '@tinyhttp/app'
import { cors } from '@tinyhttp/cors'
import { urlencoded } from 'milliparsec'
import canchaModel from './cancha.model.js'

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL

const app = new App()
app.use(cors({ origin: '*' }))
app.use(urlencoded())

// EndPoints
app.get('/', (_, res) => res.json({ message: 'The server is running...' }))

app.get('/cancha', async (_, res) => {
  const canchas = await canchaModel.find({})
  return res.json(canchas)
})

app.post('/cancha', async (req, res) => {
  const { description } = req.body
  console.log({ description })
  const cancha = await canchaModel.create({ description })
  return res.json(cancha)
})

// Start Server
mongoose.connect(MONGO_URL)
  .then(() => app.listen(PORT, () => console.log('Server Running...')))
