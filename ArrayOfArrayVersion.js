// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
let i = -1;
let employeeData = []
const empData = [];
const dummyData = ['','',''];
let done=false;

const collectEmployees = function() {
  let j = 0;
  // TODO: Get user input to create and return an array of employee objects

  let firstName = prompt ('First Name: ');
  if (firstName !== null) {
      empData[i][j] = firstName;
    } else {
        done=true;
      }
  j = j + 1;
  if (!done) {
    let lastName = prompt ('Last Name: ');
    if ((lastName !== null) && !done) {
      empData[i][j] = lastName;
      } else {
      done=true;
    }
  }
  j = j + 1;
  if (!done) {
    let sal = prompt ('Salary: ');
    // Verify if entered Salary is a number, if not, repeat asking for a number.
    // Regular Exressions: =>  "Regex" -> /^\d*$/.test(value) => true / false.
    let salIsNumber = /^\d*$/.test(sal);
    while (!salIsNumber) {
      alert("Please, enter a valid number: ");
      sal = prompt ('Salary: ');
      salIsNumber = /^\d*$/.test(sal);
    }
    if ((sal !== null) && !done) {
      empData[i][j] = sal;
      } else {
        done=true;
      }
  }
  // Regular Exressions: =>  "Regex" -> /^\d*$/.test(value)
  //         isSalaryNumber = /^\d*$/.test(salary)
  //         parseInt("75") -> 75 as a number
}

// Collect employee data until done. 
while (!done) {
  i++;
  empData.push(['','','']);
  collectEmployees();
}
alert("User Input Done.");
alert("Entered input data =   " + empData);



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0;
  for (i=0; i<(empData.length-1); i++) {
    sum = sum + Number(empData[i][2]);
  }
  alert("Average salary of employees =   " + sum/i);
}

displayAverageSalary();



// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
    // The maximum is exclusive and the minimum is inclusive
  }

  function getRandomEmployeeName () {
    let randomNum = getRandomInt(0, empData.length-1);
    let randomEmpFName = empData[randomNum][0];
    let randomEmpLName = empData[randomNum][1];
    alert('Lucky Winner is:  ' + randomEmpFName + randomEmpLName);
  }

  getRandomEmployeeName();

}

getRandomEmployee ();



/*T
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
