import { IState } from "../ts/interfaces/app_interfaces";

export const initialState: IState = {
  currentUser: {},
  isChatOpen: false,
  messages: [
    {
      id: 0,
      text: "Привет!",
      member: {
        userId: 0,
        firstName: "Bekzhan",
        lastName: "Zhamantayev",
        jobPosition: "junior frontend developer",
      },
    },
    {
      id: 1,
      text: "Как дела?",
      member: {
        userId: 1,
        firstName: "Bekzhan",
        lastName: "Zhamantayev",
        jobPosition: "junior frontend developer",
      },
    },
  ],
};
