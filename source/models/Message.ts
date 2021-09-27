import mongoose, { model, models, Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import IMessage, { MessageModel } from '../interfaces/message';

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

MessageSchema.plugin(mongoosePaginate);

const Message: MessageModel<IMessage> = model<IMessage, MessageModel<IMessage>>(
  'Messages',
  MessageSchema
);

export default Message;
