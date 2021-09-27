import { Socket } from 'socket.io';
import { sanitizeErrors } from '../errors/errors';
import { NamespaceID } from '../libs/types';
import { ClientEvents, Response, ServerEvents } from '../events/events';
import INamespace from '../interfaces/namespace';

const handlerNamespaces = (socket: Socket<ClientEvents, ServerEvents>) => {
  return {
    createNamespace: async (
      payload: INamespace,
      callback: (res: Response<void>) => void
    ) => {
      try {
        callback({
          data: undefined
        });

        socket.broadcast.emit('namespace:created', payload);
      } catch (error) {
        return callback({
          msg: sanitizeErrors(error as string)
        });
      }
    },

    readNamespace: async (
      id: NamespaceID,
      callback: (res: Response<void>) => void
    ) => {
      try {
        callback({
          data: undefined
        });
      } catch (error) {
        return callback({
          msg: sanitizeErrors(error as string)
        });
      }
    },

    updateNamespace: async (
      payload: INamespace,
      callback: (res: Response<void>) => void
    ) => {
      try {
        callback({
          data: undefined
        });

        socket.broadcast.emit('namespace:updated', payload);
      } catch (error) {
        return callback({
          msg: sanitizeErrors(error as string)
        });
      }
    },

    deleteNamespace: async (
      id: NamespaceID,
      callback: (res: Response<void>) => void
    ) => {
      try {
        callback({
          data: undefined
        });

        socket.broadcast.emit('namespace:deleted', id);
      } catch (error) {
        return callback({
          msg: sanitizeErrors(error as string)
        });
      }
    }
  };
};

export default handlerNamespaces;
