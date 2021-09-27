import mongoose, { model, Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import INamespace, { NamespaceModel } from '../interfaces/namespace';

mongoose.Promise = global.Promise;

const NamespaceSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    server: { type: Schema.Types.ObjectId, required: true, ref: 'Servers' },
    state: { type: Boolean, default: true }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

NamespaceSchema.plugin(mongoosePaginate);

const Namespace: NamespaceModel<INamespace> = model<
  INamespace,
  NamespaceModel<INamespace>
>('Namespaces', NamespaceSchema);

export default Namespace;
