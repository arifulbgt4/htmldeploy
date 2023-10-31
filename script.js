class ToDo {
  constructor() {
    this.open = [];
    this.completed = [];
  }

  create(text) {
    this.open.push(text);
  }

  complete(index) {
    this.completed.push(this.open[index]);
    this.open.splice(index, 1);
  }
}

const todo = new ToDo();

todo.create("Today i have a class at 9:30pm");
todo.create("I have a meeting at 11:00pm");
todo.create("I have a meeting at 12:00pm");

todo.complete(2);

console.log("open: ", todo.open);
console.log("completed: ", todo.completed);
