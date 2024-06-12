

// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// students Array of Objects

// After asking user details for the first time
// [{
//    firstName: "Adam",
//    lastName :"Jones",
//    age: 22
// }]

// After second user details are added
// [{
//   firstName: "Adam",
//   lastName :"Jones",
//   age: 22
// },{
//   firstName: "Laura",
//   lastName :"Shu",
//   age: 25
// }]


// After adding the 3rd data
// [{
//   firstName: "Adam",
//   lastName :"Jones",
//   age: 22
// },{
//   firstName: "Laura",
//   lastName :"Shu",
//   age: 25
// },{
//   firstName: "James",
//   lastName :"Jackson",
//   age: 28
// }]
// Collect employee data
  let i = 0;
  // const empData = [['','','']];
  let employeeData = []
  // const dummyData = ['','',''];
  let done=false;

  // while (!done) {
    // alert("Input Continues...!");
    const collectEmployees = function() {
      alert("Started collectEmployees fuction...!")
      let empObj = {}
    // TODO: Get user input to create and return an array of employee objects
      let firstName = prompt ('First Name:');
    
      if (firstName !== null) {
        empObj['firstName'] = firstName;
          // alert("Employee's First Name: ***  " + empObj['firstName'] + "  ***  entered...!");
        } else {
            alert("You canceled the input.");
            done=true;
          }

      let lastName = prompt ('Last Name:');
      if (lastName !== null) {
        empObj['lastName'] = lastName;
        // alert("Employee's Last Name: ***  " + empObj['lastName'] + "  ***  entered...!");
        } else {
          alert("You canceled the input.");
          done=true;
        }
          
      let salary = prompt ('Salary:');
          empObj['salary'] = salary;
          if (salary !== null) {
            // alert("Employee's Salary: ***  " + empObj['salary'] + "  ***  entered...!");
          } else {
          alert("You canceled the input.");
          done=true;
        }

        alert("Created empObj = " + empObj['firstName'] + ' ' + empObj['lastName'] + ' ' + empObj['salary']);
        // Array push method
        employeeData.push(empObj);
        alert("Lengthof emplyeeData is =   " + employeeData.length)
        alert("empObj   " + i + "   pushed to employeeData = " + employeeData.pop);
        i = i + 1;
  // }
}
collectEmployees();
alert("Input Done...!");






// Display the average salary
const displayAverageSalary = function(asdfemployeesArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employeeTK
}
 
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
