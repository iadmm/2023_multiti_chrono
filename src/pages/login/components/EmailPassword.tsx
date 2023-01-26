import {
  Navigate,
  redirect,
  useLoaderData,
  useNavigate,
  useRouteLoaderData,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { supabase } from "../../auth/supabaseClient";

function PasswordLess() {
  const { register, handleSubmit } = useForm({
    defaultValues: { email: "", password: "" },
  });
  const { session }: any = useRouteLoaderData("root");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function onSubmit({ email, password }: any) {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      navigate("/");
    } catch (error) {
      console.error(error);
      //alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  }
  if (session) {
    return <Navigate to={"/account"} />;
  }

  return (
    <div>
      <h3>Login with email</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="email">Password</label>
          <input
            id="password"
            type="password"
            {...register("password", { required: true })}
          />
        </div>
        <button className="button block" aria-live="polite" disabled={loading}>
          {loading ? "Loading" : "Send magic link"}
        </button>
      </form>
    </div>
  );
}

export default PasswordLess;
