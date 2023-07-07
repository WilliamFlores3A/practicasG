import { Schema, model } from 'mongoose'

const canchaSchema = new Schema({
  description: String
})

canchaSchema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

export default model('Cancha', canchaSchema)
