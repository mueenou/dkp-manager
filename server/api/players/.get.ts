import { Player } from "./players";
export default defineEventHandler(async (event) => {
  const players = await Player.find();
  return players;
});
