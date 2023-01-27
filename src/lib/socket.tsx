import React, { createContext } from "react";

import io from "socket.io-client";

const socket = io(import.meta.env.VITE_BACKEND_PATH || "http://localhost:3000");
export const Socket = createContext(socket);
const SocketProvider = ({ children }: { children: any }) => {
  return <Socket.Provider value={socket}>{children}</Socket.Provider>;
};

export default SocketProvider;
