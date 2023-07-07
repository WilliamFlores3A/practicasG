import dotenv from 'dotenv'
import mongoose from 'mongoose'
import server from './routes/index.js'

dotenv.config()

// ENV Variables
const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL

// Start Server
async function init () {
  try {
    await mongoose.connect(MONGO_URL)
    server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))
  } catch (e) {
    console.error(e)
  }
}

init()
