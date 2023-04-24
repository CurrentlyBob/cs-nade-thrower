import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: String,
  author: { type: Schema.Types.ObjectId, ref: "Profile"},
})

const nadeThrowSchema = new Schema({
  map: { type: String, required: true, },
  location: String,
  gifLink: String,
  mapType: String,
  tickRate: Number,
  jumpThrow: Boolean,
  creator: { type: Schema.Types.ObjectId, ref: 'Profile' },
  comments: [commentSchema], 
}, {
  timestamps: true
})

const NadeThrow = mongoose.model('NadeThrow', nadeThrowSchema)

export {
  NadeThrow
}
