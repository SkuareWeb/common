import { IUser } from "./User";
import { ISocialLinks } from "./SocialLinks";
import { ArtistType, UserType } from "../constants";
export interface IArtist extends IUser {
    stageName?: string;
    socialLinks: ISocialLinks[];
    type: UserType.Artist;
    description?: string;
    artistType: ArtistType;
    shareUrl?: string;
    isVerified: boolean;
}
