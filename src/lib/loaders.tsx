import { Session } from "@supabase/gotrue-js";
import { supabase } from "../pages/auth/supabaseClient";
import { ProfilePayload } from "../pages/auth/useAccount";

export const loadSession = () => {
  return supabase.auth
    .getSession()
    .then(({ data: { session }, error }) => ({ session, error }));
};
export const getProfile = async (session: Session) => {
  try {
    const { user } = session;

    let { data, error, status } = await supabase
      .from("profiles")
      .select(`username, full_name, avatar_url`)
      .eq("id", user.id)
      .single();

    if (error && status !== 406) {
      throw error;
    }

    return data;
  } catch (error) {
    alert(error.message);
    return null;
  }
};

export const updateProfile = async (
  session: Session,
  updates: ProfilePayload
) => {
  try {
    const { user } = session;

    let { error } = await supabase
      .from("profiles")
      .upsert({ id: user.id, updated_at: new Date(), ...updates });

    if (error) {
      throw error;
    }
  } catch (error) {
    alert(error.message);
  }
};
