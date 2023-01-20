import { ObjectType } from "../constants";
import { IArea } from "./Area";
import { IArtist } from "./Artist";
import { IEstablishment } from "./Establishment";
import { IEvent } from "./Event";

export interface ISearchResult {
  type: ObjectType;
  results: IArea[] | IArtist[] | IEstablishment[] | IEvent[];
}
