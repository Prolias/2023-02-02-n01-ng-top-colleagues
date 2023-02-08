import {Colleague} from "./colleague";
import {LikeHate} from "./like-hate";

export interface Vote {
  colleague: Colleague;
  likeHate: LikeHate;
  score?: number;
}