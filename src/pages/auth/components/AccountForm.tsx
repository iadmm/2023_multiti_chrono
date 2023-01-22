import { useForm } from "react-hook-form";
import useAccount, { Profile } from "../useAccount";

interface AccountFormProps {
  profile: Profile;
  onSubmit: (data: { username: string; full_name: string }) => void;
}

export default function AccountForm({ profile, onSubmit }: AccountFormProps) {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: profile });

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label htmlFor="username">
        <input id="username" {...register("username", { required: true })} />
        {errors.username && <span>This field is required</span>}
      </label>
      <label htmlFor="full_name">
        <input id="full_name" {...register("full_name", { required: true })} />
        {errors.full_name && <span>This field is required</span>}
      </label>

      <input type="submit" />
    </form>
  );
}
