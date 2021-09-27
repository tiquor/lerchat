import mongoose, { model, Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import IServer, { ServerModel } from '../interfaces/server';

mongoose.Promise = global.Promise;

const ServerSchema: Schema = new Schema(
  {
    name: { type: String, required: true, unique: true, maxlength: 30 },
    creator: { type: Schema.Types.ObjectId, required: true, ref: 'Users' },
    namespaces: [{ type: Schema.Types.ObjectId, ref: 'Namespaces' }],
    image: { type: String, required: false },
    users: [{ type: Schema.Types.ObjectId, ref: 'Users' }],
    state: { type: Boolean, default: true }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

ServerSchema.plugin(mongoosePaginate);

const Server: ServerModel<IServer> = model<IServer, ServerModel<IServer>>(
  'Servers',
  ServerSchema
);

export default Server;
