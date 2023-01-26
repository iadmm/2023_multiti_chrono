import React, { useEffect, useState } from "react";
import { AuthChangeEvent, Session } from "@supabase/gotrue-js";
import { supabase } from "../../pages/auth/supabaseClient";

export const SessionContext = React.createContext<{
  session: Session | null;
  loading: boolean;
}>({ session: null, loading: false });

const SessionProvider = ({ children }: any) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {


    supabase.auth.onAuthStateChange(
      (_event: AuthChangeEvent, session: Session | null) => {
        setSession(session);
      }
    );
  }, []);

  return (
    <SessionContext.Provider value={{ session, loading }}>
      {children}
    </SessionContext.Provider>
  );
};
export default SessionProvider;