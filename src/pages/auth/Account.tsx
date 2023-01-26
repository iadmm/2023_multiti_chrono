import React from "react";
import { supabase } from "./supabaseClient";
import {
  useLoaderData,
  useNavigate,
  useRouteLoaderData,
} from "react-router-dom";
import AccountForm from "./components/AccountForm";
import Avatar from "./components/Avatar";
import { updateProfile } from "../../lib/loaders";

export interface ProfileForm {
  username: string;
  full_name: string;
}
export interface AvatarForm {
  avatar_url: string;
}
export type ProfilePayload = AvatarForm | ProfileForm;
export type Profile = AvatarForm & ProfileForm;

const Account = () => {
  const navigate = useNavigate();
  const { profile, session } = useRouteLoaderData("auth") as any;
  const signout = () => {
    supabase.auth.signOut();
    navigate("/");
  };
  return (
    <div>
      <div>
        {profile && (
          <AccountForm
            profile={profile}
            onSubmit={(values) => updateProfile(session, profile)}
          />
        )}
      </div>
      <div>
        {profile && (
          <Avatar
            size={150}
            profile={profile}
            onUpload={(avatar_url) => updateProfile(session, { avatar_url })}
          />
        )}
      </div>
      <div className="u-margin-bottom-md">
        <button type="button" className="button block" onClick={signout}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Account;
