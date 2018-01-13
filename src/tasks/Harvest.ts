import Task from "./Task";

export class Harvest implements Task {
  private source: Source;

  constructor(source: Source) {
    this.source = source;
  }

  public run(): void {
    console.log("Harvesting from " + this.source);
  }
}
