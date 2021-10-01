import mongoose, { model, Schema } from 'mongoose';
import IUser from '../interfaces/user';

mongoose.Promise = global.Promise;

const UserSchema: Schema = new Schema(
  {
    names: { type: String, required: true, maxlength: 30 },
    username: { type: String, required: false, maxlength: 30 },
    surnames: { type: String, required: true, maxlength: 30 },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      maxlength: 36
    },
    password: { type: String, required: true, maxlength: 36 },
    state: { type: Boolean, default: true },
    birthday: { type: Date, required: false },
    image: { type: String, required: false, maxlength: 40 },
    avatar: { type: String, required: false, maxlength: 40 },
    organization: { type: String, required: false, maxlength: 36 },
    location: { type: String, required: false, maxlength: 36 },
    website: { type: String, required: false, maxlength: 36 },
    linkedin: { type: String, required: false, maxlength: 36 },
    github: { type: String, required: false, maxlength: 36 },
    instagram: { type: String, required: false, maxlength: 36 },
    biography: { type: String, required: false, maxlength: 512 }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

export default mongoose.models.Users || model<IUser>('Users', UserSchema);
