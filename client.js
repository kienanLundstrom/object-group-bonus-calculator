const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// // YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// // Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// // This problem is massive! Break the problem down. Use the debugger.
// // What is the fewest lines of code I can write and test to get just a little closer?

// // This is not a race. Everyone on your team should understand what is happening.
// // Ask questions when you don't.

// console.log(individualBonusCalc(employees ));

function getBonus (employeeInput){
  let bonus = 0
  switch (true){
      case (employeeInput.reviewRating <= 2): 
      bonus = 0;
      break;
      case (employeeInput.reviewRating == 3) :
      bonus = 0.04
      break;   
      case (employeeInput.reviewRating == 4) :
      bonus = 0.06
      break;
      case (employeeInput.reviewRating == 5) :
      bonus = 0.10
      break; 
  }
  if (employeeInput.employeeNumber.length == 4) {
      bonus = bonus + 0.05;
  } 
  if (employeeInput.annualSalary > 65000) {
      bonus = bonus - 0.01;
  }
  if (bonus>0.13){
      bonus = .13
  } 
  if (bonus < 0){
      bonus = 0
  }
  
  return bonus
}


function Employee (employeeInput) {
  this.name = employeeInput.name;
  this.bonusPercentage = getBonus(employeeInput);
  this.totalCompensation = Math.round(employeeInput.annualSalary + employeeInput.annualSalary * this.bonusPercentage);
  this.totalBonus= Math.round(employeeInput.annualSalary * this.bonusPercentage);

}

let newEmployee = [] ;

for (let i = 0; i < employees.length; i++) {
//   console.log(employees[i]);
   let newEmp = new Employee(employees[i]);
   console.log(newEmp);
   newEmployee.push(newEmp);
}
