export interface IState {
  messages?: Array<IMessage>
  currentUser?: IUser | {}
}

export interface IUser {
  userId: number,
  firstName: string,
  lastName: string,
  jobPosition: string,
  roomName: string
}
export interface IMessage {
  id: number,
  member: IMember,
  text: string
}

export interface IMember {
  userId: number,
  firstName: string,
  lastName: string,
  jobPosition: string,
  image?: string
}