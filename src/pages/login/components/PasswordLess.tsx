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
  const { register, handleSubmit } = useForm({ defaultValues: { email: "" } });
  const { session }: any = useRouteLoaderData("root");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
      <h3>Login without password</h3>
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

export default PasswordLess;