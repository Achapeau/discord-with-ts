import { Server as NetServer, Socket } from "net";
import { NextApiResponse } from "next";
import { Server as SocketIOServer } from "socket.io";

import { Server, Member, Profile } from "@prisma/client";

export type ServerWithMembersWithProfiles = Server & {
  members: Member &
    {
      role: any;
      profileId: string;
      id: string;
      profile: Profile;
    }[];
};

export type NextApiResponseServerIo = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOServer;
    };
  };
};
