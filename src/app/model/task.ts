export class Task {
  id:string;
  name: string;
  comment?: string;

  tag?: string[];

  creationDate: Date;
  dueDate?: Date;
  doneDate?: Date;

  priority: number;
  repeat?: number;

  constructor(name: string, priority: number = 0){
    this.name = name;
    this.priority = priority;
    this.creationDate = new Date();
    this.id = name.split(" ")[0] + Task.generateRandom();
  }

  static generateRandom(): number{
    return Math.floor(Math.random() * 1000000);
  }
}
