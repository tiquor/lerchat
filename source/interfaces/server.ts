import { Document, ObjectId } from 'mongoose';

export default interface IServer extends Document {
  _id: ObjectId;
  message: string;
  description: string;
  public: boolean;
  namespace: string;
  creator: string;
}
