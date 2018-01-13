import Role from "./Role";

export class Worker implements Role {
  public run(): void {
    console.log("Running");
  }
}
