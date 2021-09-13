export interface IMessagesList {
  messages?: Array<IMessage>
}

export interface IMessage {
    id?: number,
    text: string,
    member: IMember
}

export interface IMember {
  firstName: string,
  lastName: string,
  position: string,
  image?: string
}