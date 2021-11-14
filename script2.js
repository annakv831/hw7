const createSalaries = () =>{
    const salaries = {};
  
    let key;
    let value;
  
    do {
        const key  = prompt("Name employee: ");
        const value = prompt("Salary employee:");
      if (key === null || value === null) {
         break;
       }
  
      salaries[key] = value;
     
    } while (true);
  
  console.log(`salaries`, salaries);
  return salaries;
  };
    
const getSalariesTotal =(salaries) =>{

    let total=0;
    let currentlySalaries=0;
    for(let employee in salaries){
        currentlySalaries=parseFloat(salaries[employee]);
        console.log(salaries[employee]);
        total+=currentlySalaries;
       
    }
    return total.toFixed(2);
};
//const salaries={
 //   1:"4300.00",
  // 2:"5700.40",
 //  3:"4900.95",
//}


const totalResult = getSalariesTotal(createSalaries());
console.log(`totalResult`, totalResult);