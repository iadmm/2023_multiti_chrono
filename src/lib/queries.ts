import axios from "axios";
import Playlist = Multiti.Playlist;

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_PATH,
});

export const getPlaylists = async () => {
  const { data } = await instance.get<Playlist[]>("/playlists");
  return data;
};
export const getPlaylist = async (playlistId: string) => {
  const { data } = await instance.get<Playlist>(`/playlists/${playlistId}`);
  return data;
};

export const deletePlaylist = async (playlistId: string) => {
  const { data } = await instance.delete<any>(`/playlists/${playlistId}`);
  return data;
};

export const deleteSlide = async (playlistId: string, slideId: string) => {
  const { data } = await instance.delete<any>(
    `/playlists/${playlistId}/slides/${slideId}`
  );
  return data;
};

interface SlidePartial {
  value: string;
}

export const createSlide = async (playlistId: string, slide: SlidePartial) => {
  const { data } = await instance.post<any>(
    `/playlists/${playlistId}/slides`,
    slide
  );
  return data;
};
