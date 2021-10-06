// Проверка, является ли игрок с известным id текущим игроком

import { IIssue, IUser, IVote } from "./ts/interfaces/app_interfaces";

export const isCurrentUser = (playerId: string, currentUserId: string) => {
  return playerId === currentUserId;
};

// Проверка, есть ли в игре дилер

export const isDealerPresent = (usersList: Array<IUser>) => {
  let dealerData = usersList.filter((user) => user.dealer);
  return dealerData.length > 0;
};

// Проверка, является ли текущий игрок дилером

export const isCurrentDealer = (player: IUser) => {
  return player.dealer;
};

// Проверка, закончено ли голосование по Issue

export const isAllMembersVoted = (
  usersList: any,
  votes: Array<IVote>,
  activeIssue: string
) => {
  const issueVotes = votes.filter((item) => item.issueTitle === activeIssue);
  for (let i = 0; i < usersList.length; i++) {
    if (issueVotes.findIndex((vote) => vote.userId === usersList[i].id) === -1)
      return false;
  }
  return true;
};
