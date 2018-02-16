class Colony {

    private _rooms: Room[];
    private name: string;

    constructor(name: string, rooms: Room[]) {
        this._rooms = rooms;
        this.name = name;
    }

    get rooms(): Room[] {
        return this._rooms;
    }

    get structures(): Structure[] {
        return this._rooms
            .reduce((structures, room) => structures.concat(room.find(FIND_STRUCTURES)), [] as Structure[]);
    }

    get spawns(): StructureSpawn[] {
        return this.structures.filter((structure) => structure.structureType === STRUCTURE_SPAWN);
    }

    get sources(): Source[] {
        return this._rooms.reduce((sources, room) => rooms.concat(room.find(FIND_SOURCES)), [] as Source[]);
    }

}

export default Colony;
