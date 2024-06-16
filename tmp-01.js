// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
// const empData = {firstName:"", lastName:"", salary:""};

// empData is an Object, which contains three
const empData = {firstName:"", lastName:"", salary:0};
const employeesArray =[];
let done=false;
let i = 0;
j=0;
employeesArray[i] = empData;


const collectEmployees = function(employeesArray) {
  // TOD: Get user input to create and return an array of employee objects
                      // let verifySalaryInput = function() {
                      // }

// alert('empData =    ' + empData);
// alert("after empData = " + empData.firstName + empData.lastName + empData.salary);
// alert("before data entered / employeesArray["+i+"] = " +employeesArray[i].firstName+employeesArray[i].lastName+employeesArray[i].salary);
alert("before collectEmployee Data : i =  " + i);
      let fName = prompt ('First Name: ');
  if (fName !== null) {
      empData.firstName = fName;
    } else {
        done=true;
  }
  if (!done) {
    let lName = prompt ('Last Name: ');
    if ((lName !== null) && !done) {
      empData.lastName = lName;
      } else {
      done=true;
    }
  }
  if (!done) {
    let sal = prompt ('Salary: ');
    if ((sal !== null) && !done) {
      empData.salary = sal;
      } else {
        done=true;
      }
  }

  if (!done) {
    alert("before inserting empData   i == " + i);
    employeesArray[i] = empData;
    alert("after emp data added to employeesArray["+i+"] = " +employeesArray[i].firstName+employeesArray[i].lastName+employeesArray[i].salary);
    i = i + 1;  // increase i by 1 only when empData object has been added to employeeArray correctly.
    // alert("after insering to : employeesArray = " +employeesArray[i].firstName+employeesArray[i].lastName+employeesArray[i].salary);
  }
}


  
  // alert("after emp data added to employeesArray["+i+"] = " +employeesArray[i].firstName+employeesArray[i].lastName+employeesArray[i].salary);


  // if (!done) {
  //   let salary = prompt ('Salary: ');
  //   if ((salary !== null) && !done) {
  //       let isSalaryNumber = isNaN(salary);
  //       alert("salary a number?  =  " + isSalaryNumber);
  //       while (!(isNaN(salary))){americ value...!")
  //         salary = prompt ('Salary: ');
  //         // isSalaryNumber = isNaN(salary); 
  //       }
  //       empData[i][j] = salary;
  //     } else {
  //       done=true;
  //   }
  // }

  // Regular Exressions: =>  "Regex" -> /^\d*$/.test(value)
  //         isSalaryNumber = /^\d*$/.test(salary)
  //         parseInt("75") -> 75 as a number
// }

// Collect employee data until done. 
// employeesArray = employeesArray.push(empData);
while (!done) {
  // alert("before collect: done = " + done);
  collectEmployees(employeesArray);
  alert("after collect: done = " + done);
  // alert("after exiting collect: employeesArray["+i+"] = " + employeesArray[i].firstName + employeesArray[i].lastName + employeesArray[i].salary);
  alert("after input   i == " + i)
  // removeEventListener

  // alert("User Input Done.");
  // employeesArray.push(empData);
      // alert("after data entered / empData = " + empData.firstName + empData.lastName + empData.salary);
      // alert("empData = " +   empData.values());
      // let tmpData = {empData:firstName, empData.lastName, empData.salary};
      // employeesArray.push(tmpData);
      // alert("after employeesArray = " +employeesArray[i].firstName+employeesArray[i].lastName+employeesArray[i].salary);
  // alert("done =   "+done)
}


// i=0;
// while (i<employeesArray.length-1) {
//   alert("employeesArray["+i+"] = " +employeesArray[i].firstName+employeesArray[i].lastName+employeesArray[i].salary);
//   i=i+1;
// }



// code for checking salary
// ^\d*$


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0;
  for (i=0; i<(employeesArray.length-1); i++) {
    sum = sum + Number(employeesArray[i].salary);
  }
  alert("Average salary of employees =   " + sum/i);
}

displayAverageSalary(employeesArray);



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
