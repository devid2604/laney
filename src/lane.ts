import LaneNumber from "./laneNumber.js";

export default class Lane {

  private total: number;

  private busted: boolean;

  public constructor() {
    this.total = 0;
    this.busted = false;
  }

  /**
   *
   * adds and limit numbers
   */

  public addNumber(number: LaneNumber): void {
    this.total = this.total + number.getValue();

    if (this.total > 70) {
      this.busted = true;
    }
  }

  /**
   *
   * return total number
   */

  public getTotal(): number {
    return this.total;
  }

  /**
   *
   * return checks if its over 70
   */
  public isBusted(): boolean {
      return this.busted;
  }
}
