import { Socket } from 'socket.io';
import IMessage from '../interfaces/message';
import { sanitizeErrors } from '../errors/errors';
import { MessageID } from '../libs/types';
import { ClientEvents, Response, ServerEvents } from '../events/events';

const handlerMessages = (socket: Socket<ClientEvents, ServerEvents>) => {
  return {
    createMessage: async (
      payload: IMessage,
      callback: (res: Response<void>) => void
    ) => {
      try {
        callback({
          data: undefined
        });

        socket.broadcast.emit('message:created', payload);
      } catch (error) {
        return callback({
          msg: sanitizeErrors(error as string)
        });
      }
    },

    readMessage: async (
      id: MessageID,
      callback: (res: Response<void>) => void
    ) => {
      try {
        callback({
          data: undefined
        });
      } catch (error) {
        callback({
          msg: sanitizeErrors(error as string)
        });
      }
    },

    updateMessage: async (
      payload: IMessage,
      callback: (res: Response<void>) => void
    ) => {
      try {
        callback({
          data: undefined
        });

        socket.broadcast.emit('message:updated', payload);
      } catch (error) {
        return callback({
          msg: sanitizeErrors(error as string)
        });
      }
    },

    deleteMessage: async (
      id: MessageID,
      callback: (res: Response<void>) => void
    ) => {
      try {
        callback({
          data: undefined
        });

        socket.broadcast.emit('message:deleted', id);
      } catch (error) {
        return callback({
          msg: sanitizeErrors(error as string)
        });
      }
    }
  };
};

export default handlerMessages;
