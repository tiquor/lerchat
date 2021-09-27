import { Document, ObjectId } from 'mongoose';

export default interface IServer extends Document {
  _id: ObjectId;
  message: string;
  namespace: string;
  creator: string;
}
