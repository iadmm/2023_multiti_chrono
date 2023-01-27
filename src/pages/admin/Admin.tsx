import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { deletePlaylist, getPlaylists } from "../../lib/queries";
import Playlist = Multiti.Playlist;
import { Link } from "react-router-dom";

const Admin = () => {
  const queryClient = useQueryClient();
  const { isLoading, data } = useQuery<Playlist[]>("playlists", getPlaylists);

  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  async function onDeletePlaylist(playlist: Playlist) {
    await deletePlaylist(playlist._id);
    await queryClient.invalidateQueries("playlists");
  }

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="bg-white py-8 px-6 rounded-xl text-slate-800 shadow-2xl shadow-slate-800">
        <h1 className="text-3xl mb-6">Please select a playlist</h1>
        <ul className="flex flex-col gap-4">
          {data.map((playlist) => (
            <li
              className="text-slate-600 px-4 py-2 bg-slate-100 block border border-slate-200 rounded-lg flex items-center justify-between"
              key={playlist._id}
            >
              <Link to={`/admin/${playlist._id}`} className="">
                {playlist.name}
              </Link>
              <button
                className="text-xs bg-red-700 h-4 w-4 rounded-full text-white"
                onClick={() => onDeletePlaylist(playlist)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
