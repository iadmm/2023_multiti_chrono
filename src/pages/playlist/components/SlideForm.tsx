import Playlist = Multiti.Playlist;
import { useForm } from "react-hook-form";
import { createSlide } from "../../../lib/queries";
import { useQueryClient } from "react-query";

export function SlideForm({ playlist }: { playlist: Playlist }) {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      value: "",
    },
  });

  async function onSubmit(data: { value: string }) {
    await createSlide(playlist._id, data);
    await queryClient.invalidateQueries(["playlists", playlist._id]);
    reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="mb-2">
          <label htmlFor="title" className="text-sm text-slate-600 mb-4 block">
            Add slide
          </label>
          <input
            className="text-slate-600"
            type="text"
            {...register("value", { required: true })}
          />
        </div>

        <button className="bg-slate-600 block px-4 py-2 text-xs">Submit</button>
      </form>
    </div>
  );
}
