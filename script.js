const app = document.getElementById("index");

const h31 = document.createElement("h3");
const ul1 = document.createElement("ul");
const h32 = document.createElement("h3");
const ul2 = document.createElement("ul");
h31.innerText = "Open Tasks";
app.appendChild(h31);
app.appendChild(ul1);
h32.innerText = "Completed tasks";
app.appendChild(h32);
app.appendChild(ul2);

function getList(open, completed) {
  const openList = open.map((d, i) => {
    return `<li onclick="handleComplete(${i})">${d}</li>`;
  });
  ul1.innerHTML = openList;

  const completedList = completed.map((d, i) => {
    return `<li onclick="handleOpen(${i})"><del>${d}</del></li>`;
  });
  ul2.innerHTML = completedList;
}

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
    getList(this.open, this.completed);
  }

  onopen(index) {
    this.open.push(this.completed[index]);
    this.completed.splice(index, 1);
    getList(this.open, this.completed);
  }
}

const todo = new ToDo();

todo.create("Today i have a class at 9:30pm");
todo.create("I have a meeting at 11:00pm");
todo.create("I have a meeting at 12:00pm");

todo.complete(2);
todo.complete(0);
todo.onopen(0);

const handleComplete = (i) => {
  todo.complete(i);
};
const handleOpen = (i) => {
  todo.onopen(i);
};
