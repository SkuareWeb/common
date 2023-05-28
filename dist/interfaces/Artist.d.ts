import { IUser } from "./User";
import { ISocialLink } from "./SocialLink";
import { ArtistType, UserType } from "../constants";
export interface IArtist extends IUser {
    stageName?: string;
    socialLinks: ISocialLink[];
    type: UserType.Artist;
    description?: string;
    artistType: ArtistType;
    shareUrl?: string;
    isVerified: boolean;
}
