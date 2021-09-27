import { Document, ObjectId } from 'mongoose';

export default interface IMessage extends Document {
  _id: ObjectId;
  content: string;
  namespace: ObjectId;
  author: ObjectId;
}
