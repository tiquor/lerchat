import { Document, ObjectId, PaginateModel } from 'mongoose';

export default interface INamespace extends Document {
  _id: ObjectId;
  name: string;
  server: string;
}

export interface NamespaceModel<T extends Document> extends PaginateModel<T> {}
