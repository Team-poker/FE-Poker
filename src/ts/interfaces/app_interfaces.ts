import { CREATE_ISSUE } from "src/redux/types.ts";

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

export interface IIssue {
  issueTitle: string;
  priority: string;
}

//Action types:

export interface ICreateIssue {
  type: typeof CREATE_ISSUE;
  payload: IIssue;
}
