const doTasks = () => {
    const tasks = {};
  
    let key;
    let value;
  
    do {
      key = prompt("Введите время: ");
      value = prompt("Введите задачу:");
      if (key === null || value === null) {
         break;
       }
  
      // и тут уже тогда добавлять , если break не сработал
      tasks[key] = value;
     // console.log(`tasks`, tasks);
    } while (true);
  
  //   и не забудь из функции вернуть tasks
  console.log(`tasks`, tasks);
  return tasks;
  
  };
  doTasks();
  