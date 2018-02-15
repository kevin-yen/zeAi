import Task from "./Task";

export default class MoveTo implements Task {
  private target: RoomObject | RoomPosition;

  constructor(target: RoomObject | RoomPosition) {
    this.target = target;
  }

  public execute(creep: Creep): boolean {
    if (creep.pos.isNearTo(this.target)) {
      creep.moveTo(this.target);

      console.log(creep + " has reached " + this.target);

      return true;
    }

    creep.moveTo(this.target);

    return false;
  }

}
