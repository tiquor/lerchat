import { Document, ObjectId, PaginateModel } from 'mongoose';

export default interface IUserServer extends Document {
  _id: ObjectId;
  user: string;
  server: string;
}

export interface UserServerModel<T extends Document> extends PaginateModel<T> {}
