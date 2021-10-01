import { Document, ObjectId, PaginateModel } from 'mongoose';

export default interface IUser extends Document {
  _id: ObjectId;
  names: string;
  username?: string;
  surnames: string;
  email: string;
  password?: string;
  state?: boolean;
  birthday?: Date;
  image?: string;
  avatar?: string;
  organization?: string;
  location?: string;
  website?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  biography?: string;
}

export interface UserModel<T extends Document> extends PaginateModel<T> {}
