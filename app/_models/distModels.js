import { Schema, model, models } from 'mongoose';

const districtSchema = new Schema({
  dist_id: {
    type: Number,
    unique: true
  },
  province_id: Number,
  name: {
    type: String,
    unique: true
  },
  coordinates: Array,
}, { timestamps: true })

const districts = models.districts || model('districts', districtSchema)

export default districts;