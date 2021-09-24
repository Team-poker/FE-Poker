import { CREATE_CARDS, CREATE_ISSUE, EDIT_TITLE } from "src/redux/types.ts";

export interface IState {
  messages?: Array<IMessage>;
  currentUser?: IUser | {};
  issues?: Array<IIssue>;
}

export interface IUser {
  userId: number;
  firstName: string;
  lastName: string;
  jobPosition: string;
  roomName: string;
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
  count: number;
  storyPoint: string;
  image: string;
  id: string;
}
export interface ICreateCards {
  type: typeof CREATE_CARDS;
  payload: ICard;
}
export interface IIssue {
  title: string;
  priority: string;
  link: string;
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
