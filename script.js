const doTasks = () =>{
    const tasks ={};
    do{
    const key  = prompt("Введите время: ");
    const value = prompt("Введите задачу:");
    
    
    
    if(!key||!value){
       // alert("There are not more information");
        return false;
       }
       tasks[key] = value;
       console.log(`tasks`, tasks);   
    }
    
    while(true);
   return tasks;
}
 doTasks();
