export default class Lane {

  private total: number;

  private addNumber: number;

  private isBusted: boolean;

  /**
   * creates laneNumber
   *
   */
  public constructor() {
    this.total = 0;
    this.addNumber = 1;
    this.isBusted = false;
  }

  public getTotal(): number {
    for (let i = 0; i < getTotal.length; i++) {
      return;
    }
  }

  public isBusted(): boolean {
    if (this.getTotal > 70) {
      return true;
    }
  }
}
