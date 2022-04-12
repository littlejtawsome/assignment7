
// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
   let form = document.querySelector('#addForm');
   let employTable = document.getElementById('employees');
     //  window.console.log(form);
     //  window.console.log(employTable);

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER

    let empCount = document.getElementById('empCount');
     //  let CountNumber = document.createTextNode(employTable[i].value);
    // for (let i = 1; i <= submit.length; i++){
    //   let empCount = submit.value;
    // }
    // window.display(empCount);
   
    
    
    
    
// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    "use strict";
    // PREVENT FORM SUBMISSION
  event.preventDefault();
       
    // GET THE VALUES FROM THE TEXT BOXES


    //add 'list-group-item'class to emement

    const $ = (id) => document.getElementById(id)
    let id = $('id')
    let name = $('name')
    let ext = $('extension')
    let email = $('email')
    let department = $('department') 
    let submitBtn = $('submit')
               
    id = id.value;
    name = name.value;
    ext = ext.value;
    email = email.value;
    department = department.value;
    submitBtn = submit.value
        
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    const table = document.getElementById('employees');
    let newRow = table.insertRow();
          
  // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
                    //새 행에 cell 추가
    const newCellid = newRow.insertCell(0);
    const newCellname = newRow.insertCell(1);
    const newCellextension = newRow.insertCell(2);
    const newCellemail = newRow.insertCell(3);
    const newCelldepartment = newRow.insertCell(4);
    // const newCellDel = newRow.insertCell(5);

   // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
          //cell 에 텍스트 추가
    newCellid.innerText = $('id').value
    newCellname.innerText = $('name').value
    newCellextension.innerText = $('extension').value
    newCellemail.innerText = $('email').value
    newCelldepartment.innerText = $('department').value
  
    // CREATE THE DELETE BUTTON
     let delBtn = document.createElement('button')
    // RESET THE FORM

    // SET FOCUS BACK TO THE ID TEXT BOX

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

});

// DELETE EMPLOYEE