import mongoose, { model, Schema } from 'mongoose';
import IServer from '../interfaces/server';

mongoose.Promise = global.Promise;

const ServerSchema: Schema = new Schema(
  {
    name: { type: String, required: true, unique: true, maxlength: 30 },
    creator: { type: Schema.Types.ObjectId, required: true, ref: 'Users' },
    description: { type: String, required: false, maxlength: 512 },
    public: { type: Boolean, default: true },
    image: { type: String, required: false },
    state: { type: Boolean, default: true }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

export default mongoose.models.Servers ||
  model<IServer>('Servers', ServerSchema);
