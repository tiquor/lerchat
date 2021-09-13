import { MessageID, NamespaceID } from '../messages/message.repository';
import IMessage from '../../interfaces/message';

interface Error {
  error: string;
  errorDetails?: Error[];
}

interface Success<T> {
  data: T;
}

export type Response<T> = Error | Success<T>;

export interface ServerEvents {
  'message:created': (message: IMessage) => void;
  'message:updated': (message: IMessage) => void;
  'message:deleted': (id: MessageID) => void;
}

export interface ClientEvents {
  'message:list': (
    namespace: NamespaceID,
    callback: (res: Response<IMessage[]>) => void
  ) => void;

  'message:create': (
    payload: IMessage,
    callback: (res: Response<MessageID>) => void
  ) => void;

  'message:read': (
    id: MessageID,
    callback: (res: Response<IMessage>) => void
  ) => void;

  'message:update': (
    payload: IMessage,
    callback: (res?: Response<void>) => void
  ) => void;

  'message:delete': (
    id: MessageID,
    callback: (res?: Response<void>) => void
  ) => void;
}
