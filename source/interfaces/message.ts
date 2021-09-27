import { Document, ObjectId, PaginateModel } from 'mongoose';

export default interface IMessage extends Document {
  _id: ObjectId;
  content: string;
  namespace: string;
  author: string;
  _doc: Document;
}

export interface MessageModel<T extends Document> extends PaginateModel<T> {}
