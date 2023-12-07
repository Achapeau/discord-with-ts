import { Server, Member, Profile } from "@prisma/client";

export type ServerWithMembersWithProfiles = Server & {
  members: Member & {
    role: any;
    profileId: string;
    id: string; profile: Profile 
}[];
};
