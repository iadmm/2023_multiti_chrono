import React, { useContext, useEffect, useState } from "react";
import { SessionContext } from "../../components/auth/SessionProvider";
import { supabase } from "./supabaseClient";
import { Session } from "@supabase/gotrue-js";
import { useRouteLoaderData } from "react-router-dom";

export interface ProfileForm {
  username: string;
  full_name: string;
}
export interface AvatarForm {
  avatar_url: string;
}
export type ProfilePayload = AvatarForm | ProfileForm;
export type Profile = AvatarForm & ProfileForm;

const getProfile = async (session: Session) => {
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

const updateProfile = async (session: Session, updates: ProfilePayload) => {
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

const useAccount = () => {
  const { session } = useRouteLoaderData("root") as any;
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<Profile | null>();

  useEffect(() => {
    if (session) {
      setLoading(true);
      getProfile(session as Session)
        .then((profile) => setProfile(profile))
        .finally(() => setLoading(false));
    }
  }, [session]);

  return {
    loading,
    updateProfile: (data: ProfilePayload) =>
      session && updateProfile(session as Session, data),
    profile,
  };
};

export default useAccount;
