import mongoose, { Types } from 'mongoose'

const Schema = mongoose.Schema


const nadeThrowSchema = new Schema({
  map: { type: String, required: true, },
  location: String,
  gifLink: String,
  mapType: String,
  tickRate: Number,
  jumpThrow: { type: Boolean, required: true, },
  //comments: [commentSchema], 
  creator: { type: Schema.Types.ObjectId, ref: 'Profile' },
}, {
  timestamps: true
})

const NadeThrow = mongoose.model('NadeThrow', nadeThrowSchema)

export {
  NadeThrow
}
