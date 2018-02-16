import Task from "./Task";

export type Mine = Source | Mineral;

export default class Harvest implements Task {
    private mine: Mine;

    constructor(mine: Mine) {
        this.mine = mine;
    }

    public execute(creep: Creep): boolean {
        creep.harvest(this.mine);

        if (creep.carryCapacity === 0 || _.sum(creep.carry) < creep.carryCapacity) {
            console.log(creep + " harvested from " + this.mine);

            return true;
        }

        return false;
    }
}
