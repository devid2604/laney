export default class LaneNumber {

  private value: number;

  private secret: boolean;


  public constructor() {
    this.value = Math.floor(Math.random() * 10) + 1;

    this.secret = Math.random() < 0.1;
  }


  /**
   * return random number 1-10
   */
  public getValue(): number {
    return this.value;
  }

  /**
   * return 10% chance is secret
   */
  public isSecret(): boolean {
    return this.secret;
  }
}
