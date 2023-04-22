import mongoose from 'mongoose'

const Schema = mongoose.Schema

const votesSchema = new Schema({
    
})

const grenadeSchema = new Schema({
  mapName: String,
  location: String,
  creator: { type: Schema.Types.ObjectId, ref: 'Profile'},
  gifLink: String,
  mapType: String,
  tickRate: Number,
  jumpThrow: Boolean,
  votes: [votesSchema], 
}, {
  timestamps: true
})

const Grenade = mongoose.model('Grenade', grenadeSchema)

export {
  Grenade
}
