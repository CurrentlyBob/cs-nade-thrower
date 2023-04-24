import mongoose, { Types } from 'mongoose'

const Schema = mongoose.Schema


const nadeThrowSchema = new Schema({
  map: String,
  location: String,
  gifLink: String,
  mapType: String,
  tickRate: Number,
  jumpThrow: Boolean,
  //comments: [commentSchema], 
  creator: { type: Schema.Types.ObjectId, ref: 'Profile' },
}, {
  timestamps: true
})

const NadeThrow = mongoose.model('NadeThrow', nadeThrowSchema)

export {
  NadeThrow
}
