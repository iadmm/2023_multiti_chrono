import { SessionContext } from "./SessionProvider";
import React from "react";

const useAuth = () => {
  return React.useContext(SessionContext);
};

export default useAuth;
