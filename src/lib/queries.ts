import axios from "axios";
import Playlist = Multiti.Playlist;

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

export const getPlaylists = async () => {
  const { data } = await instance.get<Playlist[]>("/playlists");
  return data;
};

export const deletePlaylist = async (playlistId: string) => {
  const { data } = await instance.delete<any[]>(`/playlists/${playlistId}`);
  return data;
};
