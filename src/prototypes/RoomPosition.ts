RoomPosition.prototype.getRange = function(pos: RoomPosition): number {
  if (this.roomName === pos.roomName) {
    return this.getRangeTo(pos);
  }
  else {
    return 50 * Game.map.getRoomLinearDistance(this.roomName, pos.roomName);
  }
};
