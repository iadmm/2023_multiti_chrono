declare module Multiti {
  interface MongoDocument {
    _id: string;
  }
  export interface Slide extends MongoDocument {
    title: string;
    type: string;
    value: string;
    image: { url: string };
  }
  export interface Playlist extends MongoDocument {
    name: string;
    slides: Slide[];
    currentlyPlaying: Slide;
  }
}
