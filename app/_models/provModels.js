import { Schema, model, models } from 'mongoose';

const provinceSchema = new Schema({
  prov_id: {
    type: Number,
    unique: true
  },
  coordinates: Array,
  seal: String,
  description: String,
  nickname: String,
  prov_name: {
    type: String,
    unique: true
  }
}, { timestamps: true })

const provinces = models.provinces || model('provinces', provinceSchema)

export default provinces;