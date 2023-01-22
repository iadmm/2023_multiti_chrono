import {
  Navigate,
  redirect,
  useLoaderData, useNavigate,
  useRouteLoaderData,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { supabase } from "../auth/supabaseClient";

/*
export default function Login() {
  const {session, loading:sessionLoading} = useAuth();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };
  if (sessionLoading){return null}
  if (session){
    return <Navigate to={"/home"} />
  }
  return (
    <div className="row flex-center flex">
      <div className="col-6 form-widget" aria-live="polite">
        <h1 className="header">Supabase + React</h1>
        <p className="description">
          Sign in via magic link with your email below
        </p>
        {loading ? (
          "Sending magic link..."
        ) : (
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="button block" aria-live="polite">
              Send magic link
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
*/

export default function Login() {
  const { register, handleSubmit } = useForm({ defaultValues: { email: "" } });
  const { session }: any = useRouteLoaderData("root");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  async function onSubmit({ email }: any) {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      navigate("/");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  }
  if (session) {
    return <Navigate to={"/account"} />;
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email", { required: true })}
        />
        <button className="button block" aria-live="polite" disabled={loading}>
          {loading ? "Loading" : "Send magic link"}
        </button>
      </form>
    </div>
  );
}
