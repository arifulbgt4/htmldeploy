class ToDo {
  constructor() {
    this.open = [];
    this.completed = [];
  }

  create(text) {
    this.open.push(text);
  }

  complete(index) {
    console.log("first in: ", index);
    this.completed.push(this.open[index]);
    this.open.splice(index, 1);
  }

  onopen(index) {
    console.log("first in: ", index);
    this.open.push(this.completed[index]);
    this.completed.splice(index, 1);
  }
}

const todo = new ToDo();

todo.create("Today i have a class at 9:30pm");
todo.create("I have a meeting at 11:00pm");
todo.create("I have a meeting at 12:00pm");

todo.complete(2);
todo.complete(0);
todo.onopen(0);

const app = document.getElementById("index");

function createList(open, completed) {
  const h31 = document.createElement("h3");
  const ul1 = document.createElement("ul");
  const h32 = document.createElement("h3");
  const ul2 = document.createElement("ul");

  h31.innerText = "Open Tasks";
  app.appendChild(h31);
  app.appendChild(ul1);
  open.map((d, i) => {
    const li = document.createElement("li");
    li.onclick = () => {
      todo.complete(i);
    };
    li.innerText = d;
    ul1.appendChild(li);
  });

  h32.innerText = "Completed tasks";
  app.appendChild(h32);
  app.appendChild(ul2);
  completed.map((d, i) => {
    const li = document.createElement("li");
    const del = document.createElement("del");
    del.innerText = d;
    li.appendChild(del);
    li.onclick = () => {
      todo.onopen(i);
    };
    ul2.appendChild(li);
  });
}

createList(todo.open, todo.completed);
