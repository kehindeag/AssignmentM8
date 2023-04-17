// GLOBAL VARIABLES
let storage;
let list;
//let employee = [];
// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let empForm = document.querySelector("#addForm");
let empTable = document.querySelector("#empTable");
let empCount = document.querySelector("#empCount");
const tbody = empTable.getElementsByTagName("tbody")[0];

// CREATE AN ARRAY OF EMPLOYEES
let employee = [
  {
    empId: "24544389",
    empName: "Kehinde Agboola",
    empExt: "6789",
    empEmail: "kenagboola@gmail.com",
    empDept: "Sales",
  },
  {
    empId: "98709234",
    empName: "Oladele Adigun",
    empExt: "1287",
    empEmail: "ken@gmail.com",
    empDept: "Marketing",
  },
  {
    empId: "42351089",
    empName: "Ade Baba",
    empExt: "9097",
    empEmail: "info@gmail.com",
    empDept: "Sales",
  },
  {
    empId: "28121089",
    empName: "Peter Longs",
    empExt: "1130",
    empEmail: "info@yahoo.com",
    empDept: "Sales",
  },
  {
    empId: "34091212",
    empName: "Andrew Smith",
    empExt: "2323",
    empEmail: "infoken@yahoo.com",
    empDept: "Sales",
  },
];

console.log(employee);
// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
function setStorage(employees) {
  localStorage.setItem("empId", JSON.stringify(employees));
}
setStorage(employee);

// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY

// GET DOM ELEMENTS
const $ = (id) => {
  return document.getElementById(id);
};

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS

// ADD EMPLOYEE
empForm.addEventListener("submit", (e) => {
  // PREVENT FORM SUBMISSION
  e.preventDefault();
  // GET THE VALUES FROM THE TEXT BOXES
  let empId = document.querySelector("#id").value;
  let empName = document.querySelector("#name").value;
  let empExt = document.querySelector("#extension").value;
  let empEmail = document.querySelector("#email").value;
  let empDept = document.querySelector("#department").value;
  // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
  let empRow = empTable.insertRow();

  // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
  let cellID = empRow.insertCell();
  let cellName = empRow.insertCell();
  let cellExt = empRow.insertCell();
  let cellEmail = empRow.insertCell();
  let cellDept = empRow.insertCell();
  let cellDelete = empRow.insertCell();
  // Create new employee object
  //   const newEmployeeForm = {
  //     empID: empID,
  //     fullName: empName,
  //     ext: empExt,
  //     email: empEmail,
  //     dept: empDept,
  //   };

  employee.push({ empId, empName, empExt, empEmail, empDept });

  console.log(employee);
  // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
  //arrayEmployee.push(newEmployeeForm);
  // Store updated array of employees in localStorage
  setStorage(employee);

  // BUILD THE GRID
  buildGrid(employee);
  // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE

  //   const getEmployees = localStorage.getItem("empId");
  //   const employeesJson = JSON.parse(getEmployees);

  //   const row = document.createElement("tr");

  //   const idCell = document.createElement("td");
  //   const idText = document.createTextNode(empId);
  //   idCell.appendChild(idText);
  //   row.appendChild(idCell);

  //   const fnameCell = document.createElement("td");
  //   const fnameText = document.createTextNode(empName);
  //   fnameCell.appendChild(fnameText);
  //   row.appendChild(fnameCell);

  //   const extCell = document.createElement("td");
  //   const extText = document.createTextNode(empExt);
  //   extCell.appendChild(extText);
  //   row.appendChild(extCell);

  //   const emailCell = document.createElement("td");
  //   const emailText = document.createTextNode(empEmail);
  //   emailCell.appendChild(emailText);
  //   row.appendChild(emailCell);

  //   const deptCell = document.createElement("td");
  //   const deptText = document.createTextNode(empDept);
  //   deptCell.appendChild(deptText);
  //   row.appendChild(deptCell);

  // RESET THE FORM
  //   tbody.appendChild(row);

  // RESET THE FORM
  document.querySelector("#addForm").reset();
  // SET FOCUS BACK TO THE ID TEXT BOX
  document.querySelector("#id").focus();
});

// DELETE EMPLOYEE
empTable.addEventListener("click", (e) => {
  // CONFIRM THE DELETE
  // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
  // CONFIRM DELETE
  // CONFIRM DELETE
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure you want to delete this employee?")) {
      // CALL THE DELETEROW() METHOD TO DELETE SPECIFIC ROW IN TABLE
      // PASS THE ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
      empTable.deleteRow(e.target.parentElement.parentElement.rowIndex);
      // DECREMENT THE COUNTER
      // 7. Remove employee object from array
      employee.splice(empTable, 1);

      // 8. Update localStorage
      localStorage.setItem("employeeData", JSON.stringify(employee));
      //count--;
      //empCount.value = `(${count})`;
    }
  }
});
// BUILD THE EMPLOYEES GRID
function buildGrid(employee) {
  const getEmployees = localStorage.getItem("empId");
  const employeesJson = JSON.parse(getEmployees);

  const tbody = empTable.getElementsByTagName("tbody")[0];

  // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
  tbody.innerHTML = "";

  // REBUILD THE TBODY FROM SCRATCH
  const newTbody = document.createElement("tbody");

  // LOOP THROUGH THE ARRAY OF EMPLOYEES
  // REBUILDING THE ROW STRUCTURE
  employeesJson.forEach((emp) => {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    const idText = document.createTextNode(emp.empId);
    idCell.appendChild(idText);
    row.appendChild(idCell);

    const fnameCell = document.createElement("td");
    const fnameText = document.createTextNode(emp.empName);
    fnameCell.appendChild(fnameText);
    row.appendChild(fnameCell);

    const extCell = document.createElement("td");
    const extText = document.createTextNode(emp.empExt);
    extCell.appendChild(extText);
    row.appendChild(extCell);

    const emailCell = document.createElement("td");
    const emailText = document.createTextNode(emp.empEmail);
    emailCell.appendChild(emailText);
    row.appendChild(emailCell);

    const deptCell = document.createElement("td");
    const deptText = document.createTextNode(emp.empDept);
    deptCell.appendChild(deptText);
    row.appendChild(deptCell);

    let deleteBtn = document.createElement("button");
    // ADD APPROPRIATE BOOTSTRAP CLASSES
    deleteBtn.className = "btn btn-sm btn-danger delete";
    // ADD THE 'X' TEXT TO BUTTON
    deleteBtn.appendChild(document.createTextNode("X"));
    // APPEND BUTTON TO THE CELL
    row.appendChild(deleteBtn);

    newTbody.appendChild(row);
  });
  // BIND THE TBODY TO THE EMPLOYEE TABLE
  empTable.replaceChild(newTbody, tbody);
  // UPDATE EMPLOYEE COUNT
  // STORE THE ARRAY IN STORAGE
  localStorage.setItem("empId", JSON.stringify(employee));
}
