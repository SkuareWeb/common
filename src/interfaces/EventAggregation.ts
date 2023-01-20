import { IEvent } from "./Event";
import { IBrunchEvent } from "./BrunchEvent";
import { IExhibitionEvent } from "./ExhibitionEvent";
import { ILiveBandEvent } from "./LiveBandEvent";
import { ILoungeEvent } from "./LoungeEvent";
import { IOneTimeEvent } from "./OneTimeEvent";
import { IStandUpEvent } from "./StandUpEvent";
import { ILiveScreeningEvent } from "./LiveScreeningEvent";
import { ISportsEvent } from "./SportsEvent";

export type HasArtistEvent =
  | IBrunchEvent
  | IExhibitionEvent
  | ILiveBandEvent
  | ILiveScreeningEvent
  | ILoungeEvent
  | IOneTimeEvent
  | ISportsEvent
  | IStandUpEvent;

export type IAggregatedEvent = IEvent | HasArtistEvent;
