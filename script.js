// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");
// Collect employee data
// empData is an Object, which contains three
const employeesArray = [];
let done = false;
let i = 0;
// employeesArray[0] = empData;

const collectEmployees = function () {
  // let done = false;

  let empData = {};
  // TODO: Get user input to create and return an array of employee objects
  let fName = prompt("First Name: ");
  if (fName !== null) {
    empData.firstName = fName;
  } else {
    done = true;
  }
  if (!done) {
    let lName = prompt("Last Name: ");
    if (lName !== null && !done) {
      empData.lastName = lName;
    } else {
      done = true;
    }
  }
  if (!done) {
    let sal = prompt("Salary: ");
    // Verify if entered Salary is a number, if not, repeat asking for a number.
    // Regular Exressions: =>  "Regex" -> /^\d*$/.test(value) => true / false.
    let salIsNumber = /^\d*$/.test(sal);
    while (!salIsNumber) {
      alert("Please, enter a valid number: ");
      sal = prompt("Salary: ");
      salIsNumber = /^\d*$/.test(sal);
    }
    if (sal !== null && !done) {
      empData.salary = sal;
    } else {
      done = true;
    }
  }
  if (!done) {
    // insert empData only when all 3 items are entered.
    // employeesArray[i] = empData;
    employeesArray.push(empData);
    console.log(employeesArray);
    // alert(" employeesArray ["+i+"] =>   " +employeesArray[i].firstName + "  " +employeesArray[i].lastName + "  " + employeesArray[i].salary);
    i = i + 1;
  }

  while (!done) {
    collectEmployees();
  }

  return employeesArray
};

// Collect employee data until done.

i = 0;
while (i < employeesArray.length) {
  alert(
    " employeesArray [" +
      i +
      "] =>   " +
      employeesArray[i].firstName +
      "  " +
      employeesArray[i].lastName +
      "  " +
      employeesArray[i].salary
  );
  i = i + 1;
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0;
  for (i = 0; i < employeesArray.length; i++) {
    sum = sum + Number(employeesArray[i].salary);
  }
  let averageSalary = sum/i;
  // How to show the value in a format -> $00,000.00
  alert("Average salary of employees =  $" + averageSalary);

  const averageSalaryCell = document.createElement("averageSalary");
  // Format the salary as currency
  averageSalaryCell.textContent = averageSalary.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  }
  )
};

// Select a random employee
const getRandomEmployee = function () {
  // TODO: Select and display a random employee

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    // The maximum is exclusive and the minimum is inclusive
  }

  function getRandomEmployeeName() {
    let randomNum = getRandomInt(0, employeesArray.length - 1);
    let randomEmpFName = employeesArray[randomNum].firstName;
    let randomEmpLName = employeesArray[randomNum].lastName;
    alert("Lucky Winner is:   " + randomEmpFName + ' ' + randomEmpLName);
  }
  getRandomEmployeeName();
};

/*T
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {

  let done=false;

  // Function call for collectEmployees()
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};


// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
