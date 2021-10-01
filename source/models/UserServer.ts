import mongoose, { model, Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import IUserServer, { UserServerModel } from '../interfaces/userServer';

mongoose.Promise = global.Promise;

const UserServerSchema: Schema = new Schema(
  {
    server: { type: Schema.Types.ObjectId, required: true, ref: 'Servers' },
    user: { type: Schema.Types.ObjectId, require: true, ref: 'Users' }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

UserServerSchema.plugin(mongoosePaginate);

const UserServer: UserServerModel<IUserServer> = model<
  IUserServer,
  UserServerModel<IUserServer>
>('UserServers', UserServerSchema);

export default UserServer;
