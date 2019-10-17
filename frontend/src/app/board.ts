import { Player } from './player'
export class Board
{
  player: Player; //Player instance
  tiles: Object[]; // an array of objects making up the tiles in the board

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}