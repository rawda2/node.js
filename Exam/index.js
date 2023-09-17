



const fs = require('fs');
const { get } = require('http');
fs.writeFile('todo.txt', '', (err) => {
  if (err) throw err;
  console.log('File created successfully!');
});

function addTask(task) {
  fs.appendFile('todo.txt', `${task}\n`, (err) => {
    if (err) throw err;
    console.log('Task added successfully!');
  });
}

function getTasks() {
  fs.readFile('todo.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}


function deleteTask(task) {
  fs.writeFile('todo.txt', '', (err) => {
    if (err) throw err;
    console.log('File cleared successfully!');
  });
  
  fs.readFile('todo.txt', 'utf8', (err, data) => {
    if (err) throw err;
   
    const tasks = data.split('\n');
    
    const index = tasks.indexOf(task);
    
    tasks.splice(index, 1);
   
    fs.writeFile('todo.txt', tasks.join('\n'), (err) => {
      if (err) throw err;
      console.log('Task deleted successfully!');
    });
  });
}
addTask("play")
addTask("Coding")
addTask("Eating")
addTask("pray")
addTask("do any thing")

deleteTask("play")

getTasks()


// const todoList = [];

// function addItem(item) {
//     todoList.push(item);
//   }
//   function removeItem(index) {
//     todoList.splice(index, 1);
//   }
//   function displayList() {
//     console.log("To-Do List:");
//     todoList.forEach((item, index) => {
//       console.log(`${index + 1}. ${item}`);
//     });
//   }

//   addItem("Buy groceries");
// addItem("Finish homework");
// addItem("Walk the dog");
// removeItem(2)

// displayList();