import { Server as HttpServer } from 'http';
import { Server, ServerOptions } from 'socket.io';
import { ClientEvents, ServerEvents } from '../events/events';
import createNamespaceHandlers from '../namespaces/handlers';
import createMessageHandlers from '../messages/handlers';
import createUserHandlers from '../users/handlers';

export function createApplication(
  httpServer: HttpServer,
  serverOptions: Partial<ServerOptions> = {}
): Server<ClientEvents, ServerEvents> {
  const io = new Server<ClientEvents, ServerEvents>(httpServer, serverOptions);

  io.of(/\w/).on('connection', (socket) => {
    socket.prependAny((event) => {
      console.log(event);
    });

    const { userConnect, userDisconnect, userTyping, userStopTyping } =
      createUserHandlers(socket);
    const { createMessage, readMessage, updateMessage, deleteMessage } =
      createMessageHandlers(socket);
    const { createNamespace, readNamespace, updateNamespace, deleteNamespace } =
      createNamespaceHandlers(socket);

    // messages events
    socket.on('message:create', createMessage);
    socket.on('message:read', readMessage);
    socket.on('message:update', updateMessage);
    socket.on('message:delete', deleteMessage);

    // namespace events
    socket.on('namespace:create', createNamespace);
    socket.on('namespace:read', readNamespace);
    socket.on('namespace:update', updateNamespace);
    socket.on('namespace:delete', deleteNamespace);

    // user events
    socket.on('user:connect', userConnect);
    socket.on('user:disconnect', userDisconnect);
    socket.on('user:typing', userTyping);
    socket.on('user:stop-typing', userStopTyping);
  });

  return io;
}
