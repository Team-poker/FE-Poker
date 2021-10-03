// Проверка, является ли игрок с известным id текущим игроком

export const isCurrentUser = (playerId: string, currentUserId: string) => {
  return playerId === currentUserId;
};
