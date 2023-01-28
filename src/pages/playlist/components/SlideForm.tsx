import Playlist = Multiti.Playlist;
import { useForm } from "react-hook-form";
import { createSlide } from "../../../lib/queries";
import { useQueryClient } from "react-query";
import { useState } from "react";

export function SlideForm({ playlist }: { playlist: Playlist }) {
  const [submitting, setSubmitting] = useState(false);
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      value: "",
    },
  });

  async function onSubmit(data: { value: string }) {
    setSubmitting(true);
    try {
      await createSlide(playlist._id, data);
      await queryClient.invalidateQueries(["playlists", playlist._id]);
      reset();
      setSubmitting(false);
    } catch (e) {
      setSubmitting(false);
    }
  }

  return (
    <div>
      {submitting && (
        <div className="bg-green-700 text-white p-4">Submitting</div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="mb-8">
          <label htmlFor="title" className="text-sm text-slate-600 mb-4 block">
            Add youtube video
          </label>
          <input
            className="text-slate-600 block w-full text-lg rounded-lg py-2 px-4"
            type="text"
            {...register("value", { required: true })}
          />
        </div>

        <button
          className="bg-pink-500 block px-4 py-2 text-xs disabled:bg-slate-400 w-full rounded-full text-2xl"
          disabled={submitting}
        >
          {submitting ? "Submitting" : "Submit"}
        </button>
      </form>
    </div>
  );
}
