import Task from "./Task";

export type Transferable = Creep | StructureContainer | StructureStorage | StructureSpawn | StructureExtension |
    StructureLab | StructureLink | StructureNuker | StructurePowerSpawn | StructureTerminal | StructureTower;

export default class Transfer implements Task {
    private target: Transferable;
    private resourceType: ResourceConstant;

    constructor(target: Transferable, resourceType: ResourceConstant) {
        this.target = target;
        this.resourceType = resourceType;
    }

    public execute(creep: Creep): boolean {
        creep.transfer(this.target, this.resourceType);

        console.log(creep + " transferred " + this.resourceType + " to " + this.target);

        return true;
    }

}
