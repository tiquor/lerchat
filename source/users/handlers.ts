import { Socket } from 'socket.io';
import { sanitizeErrors } from '../errors/errors';
import { MessageID, UserID } from '../libs/types';
import { ClientEvents, Response, ServerEvents } from '../events/events';

const handlerUsers = (socket: Socket<ClientEvents, ServerEvents>) => {
  return {
    userConnect: async (
      id: UserID,
      callback: (res: Response<void>) => void
    ) => {
      try {
        callback({
          data: undefined
        });

        socket.broadcast.emit('user:connect', id);
      } catch (error) {
        return callback({
          msg: sanitizeErrors(error as string)
        });
      }
    },

    userDisconnect: async (
      id: UserID,
      callback: (res: Response<void>) => void
    ) => {
      try {
        callback({
          data: undefined
        });
        socket.broadcast.emit('user:disconnect', id);
      } catch (error) {
        callback({
          msg: sanitizeErrors(error as string)
        });
      }
    },

    userTyping: async (id: UserID, callback: (res: Response<void>) => void) => {
      try {
        callback({
          data: undefined
        });

        socket.broadcast.emit('user:typing', id);
      } catch (error) {
        return callback({
          msg: sanitizeErrors(error as string)
        });
      }
    },

    userStopTyping: async (
      id: MessageID,
      callback: (res: Response<void>) => void
    ) => {
      try {
        callback({
          data: undefined
        });

        socket.broadcast.emit('user:stop-typing', id);
      } catch (error) {
        return callback({
          msg: sanitizeErrors(error as string)
        });
      }
    }
  };
};

export default handlerUsers;
