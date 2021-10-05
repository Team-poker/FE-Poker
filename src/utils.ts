// Проверка, является ли игрок с известным id текущим игроком

import { IUser } from "./ts/interfaces/app_interfaces";

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
