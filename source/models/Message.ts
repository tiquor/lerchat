import mongoose, { model, Schema } from 'mongoose';
import IMessage from '../interfaces/message';

mongoose.Promise = global.Promise;

const MessageSchema: Schema = new Schema(
  {
    content: { type: String, required: true, maxlength: 512 },
    author: { type: Schema.Types.ObjectId, required: true, ref: 'Users' },
    namespace: { type: Schema.Types.ObjectId, required: true },
    state: { type: Boolean, default: true }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

export default mongoose.models.Messages ||
  model<IMessage>('Messages', MessageSchema);
