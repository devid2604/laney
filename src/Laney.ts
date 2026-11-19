import Lane from "./lane.js";
import LaneNumber from "./laneNumber.js";

export default class Laney {

  private busted: boolean;

  private lanes: Lane[];

  private nextNumbers: LaneNumber[];

  public constructor(numberOfLanes: number = 3) {
    this.busted = false;

    this.lanes = [];
    for (let i = 0; i < numberOfLanes; i++) {
      this.lanes.push(new Lane());
    }

    this.nextNumbers = [];
    for (let i = 0; i < 3; i++) {
      this.nextNumbers.push(new LaneNumber());
    }
  }

  /**
   * Places the next pending number into the specified lane and then enqueues a new next number.
   * Does nothing if the game is already busted.
   * @param laneIndex index of the lane to receive the number.
   * @returns void
   */
  public placeNumberInLane(laneIndex: number): void {
    if (this.busted) {
      return;
    }
    const next = this.nextNumbers[0];

    this.nextNumbers.splice(0, 1);
    this.lanes[laneIndex].addNumber(next);
    this.nextNumbers.push(new LaneNumber());
  }

  /**
   * Returns a message about the current game state.
   * If busted, indicates that the game is over. Otherwise, lists the next numbers.
   * @returns string
   */
  public getMessage(): string {

    this.busted = false;
    for (let i = 0; i < this.lanes.length; i++) {
      if (this.lanes[i].isBusted()) {
        this.busted = true;
      }
    }
    if (this.busted) {
      return "You busted! Start a new game?";
    }

    let message = "Next numbers are: ";
    for (let i = 0; i < this.nextNumbers.length; i++) {
      if (i > 0) {
        message = message + ", ";
      }
      if (this.nextNumbers[i].isSecret()) {
        message = message + "?";
      } else {
        message = message + this.nextNumbers[i].getValue();
      }
    }
    return message;
  }


  /**
   * Returns the total score for the specified lane.
   * @param laneIndex index of the lane to get the total for.
   * @returns number
   */
  public getLaneTotal(laneIndex: number): number {
    return this.lanes[laneIndex].getTotal();
  }

  /**
   * Returns the total score across all lanes.
   * @returns number
   */
  public getTotal(): number {
    let total = 0;
    for (let i = 0; i < this.lanes.length; i++) {
      total = total + this.lanes[i].getTotal();
    }
    return total;
  }

  /**
   * Returns whether the game is busted.
   * @returns boolean
   */
  public isBusted(): boolean {
    return this.busted;
  }
}
