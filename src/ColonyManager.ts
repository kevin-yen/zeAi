import Colony from "./Colony";
import Harvest from "./tasks/Harvest";
import MoveTo from "./tasks/MoveTo";
import Task from "./tasks/Task";
import Transfer from "./tasks/Transfer";

export default class Executive {
    private colony: Colony;
    private creeps: Creep[];

    constructor(colony: Colony, creeps: Creep[]) {
        this.colony = colony;
        this.creeps = creeps;
    }

    public get creeps(): Creep[] {
        return this.creeps;
    }

    public getTasks(): Task[] {
        for (const spawn of this.colony.spawns) {
            if (spawn.energy < spawn.energyCapacity) {
                const rechargeSpawnTasks: Task[] = [];

                const closestSource = spawn.pos.findClosestByRange(this.colony.sources);

                rechargeSpawnTasks.unshift(new MoveTo(closestSource));
                rechargeSpawnTasks.unshift(new Harvest(closestSource));
                rechargeSpawnTasks.unshift(new MoveTo(spawn));
                rechargeSpawnTasks.unshift(new Transfer(spawn));

                return rechargeSpawnTasks;
            }
        }
    }

}
