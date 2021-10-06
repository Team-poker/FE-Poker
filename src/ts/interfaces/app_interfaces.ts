import {
  ADD_VOTE,
  CREATE_CARDS,
  CREATE_ISSUE, CREATE_PLAYER,
  CREATE_RESULT, CREATE_TIMER,
  EDIT_CARD_TITLE,
  EDIT_TITLE,
  SET_ACTIVE_ISSUE,
  SET_CARDSLIST,
  SET_ISSUESLIST,
  SET_USERSLIST,
  UPDATE_USERSLIST,
} from "src/redux/types.ts";
import {CREATE_TIMER_SETTINGS} from "src/redux/types";

export interface IState {
  messages?: Array<IMessage>;
  currentUser?: IUser | {};
  issues?: Array<IIssue>;
  isChatOpen: Boolean;
}

export interface IUser {
  userId: number;
  firstName: string;
  lastName: string;
  jobPosition: string;
  roomName: string;
  dealer: boolean;
}
export interface IMessage {
  id: number;
  member: IMember;
  text: string;
}

export interface IMember {
  userId: number;
  firstName: string;
  lastName: string;
  jobPosition: string;
  image?: string;
}

export interface ICard {
  title: string;
  count?: number;
  storyPoint?: string;
  image: string;
  id: string;
}

export interface IEditCard {
  id: string;
  newTitle: string;
}

export interface ICreateCards {
  type: typeof CREATE_CARDS | typeof SET_CARDSLIST;
  payload: ICard;
}

export interface IIssue {
  title: string;
  priority: string;
  link: string;
}

export interface IVote {
  userId: string,
  issueTitle: string,
  userVote: string,
}

// export interface ITimer {
//   time: number;
//   minutes: number;
//   seconds: number;
// }

export interface IResult {
  id: string;
  title: string;
  score: string;
}

export interface IDealerPlayer {
  isDealerPlayer: boolean;
}

//Actions:

export interface ICreateIssue {
  type: typeof CREATE_ISSUE;
  payload: IIssue;
}

export interface IEditTitle {
  type: typeof EDIT_TITLE;
  payload: string;
}
export interface IEditCards {
  type: typeof EDIT_CARD_TITLE;
  payload: ICard;
}

export interface ICreateResult {
  type: typeof CREATE_RESULT;
  payload: IResult;
}

export interface IAddUser {
  type: typeof UPDATE_USERSLIST;
  payload: IUser;
}

export interface ISetUsers {
  type: typeof SET_USERSLIST;
  payload: Array<IUser>;
}

export interface ISetIssues {
  type: typeof SET_ISSUESLIST;
  payload: Array<IIssue>;
}

export interface ISetActiveIssue {
  type: typeof SET_ACTIVE_ISSUE;
  payload: string;
}

export interface IAddVote {
  type: typeof ADD_VOTE;
  payload: IVote;
}
export interface ICreatePlayer {
  type: typeof CREATE_PLAYER;
  payload: boolean;
}

export interface ICreateTimerSettings {
  type: typeof CREATE_TIMER_SETTINGS ;
  payload: boolean;
}
export interface ICreateTimer {
  type: typeof CREATE_TIMER;
  payload: number;
}
