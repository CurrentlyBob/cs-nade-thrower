import mongoose, { Types } from 'mongoose'

const Schema = mongoose.Schema


const nadeThrowSchema = new Schema({
  map: String,
  location: String,
  creator: { type: Schema.Types.ObjectId, ref: 'Profile' },
  gifLink: String,
  mapType: String,
  tickRate: Number,
  jumpThrow: Boolean,
  //comments: [commentSchema], 
}, {
  timestamps: true
})

const NadeThrow = mongoose.model('NadeThrow', nadeThrowSchema)

export {
  NadeThrow
}
