import Colony from "../Colony";
import Task from "../tasks/Task";
import Role from "./Role";

export class Worker implements Role {

  public run(creep: Creep): void {
    let taskQueue: Task[] = this.getTaskQueue(creep);
    const colony: Colony = this.getColony(creep);

    if (this.taskQueue.length === 0) {
      taskQueue = this.colony.getTasks();
    }

    const taskComplete = this.taskQueue[0].execute();

    console.log("Running");
  }

  public getTaskQueue(creep: Creep): Task[] {
    return [];
  }

  public getColony(creep: Creep): Colony {
    return null;
  }

}
