import { Document, ObjectId, PaginateModel } from 'mongoose';

export default interface IServer extends Document {
  _id: ObjectId;
  message: string;
  namespace: string;
  creator: string;
}

export interface ServerModel<T extends Document> extends PaginateModel<T> {}
