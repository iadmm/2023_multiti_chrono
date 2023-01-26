import React, { useEffect, useState } from "react";
import { supabase } from "../auth/supabaseClient";

const Admin = () => {
  useEffect(() => {
    supabase
      .from("slides")
      .select()
      .then((r) => console.log(r));
  });
  useEffect(() => {
    const channel = supabase.channel("db-messages");

    const roomId = 1;
    const userId = "user1";

    channel.on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "slides",
        filter: `playlist_id=eq.${roomId}`,
      },
      (payload) => console.log(payload)
    );

    channel.subscribe(async (status) => {
      console.log(status);
      if (status === "SUBSCRIBED") {
        console.log("subscribed");
        /*
        const res = await supabase.from("slides").insert({
          playlist_id: roomId,
          type: "video",
          playlist_order: 2,
          value: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        });
        console.log(res);
        */
      }
    });
  }, []);
  return (
    <div>
      <div>Admin</div>
      <button
        onClick={async () => {
          const res = await supabase.from("slides").insert({
            playlist_id: 1,
            type: "video",
            playlist_order: 2,
            value: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          });
        }}
      >
        Create
      </button>
    </div>
  );
};

export default Admin;
