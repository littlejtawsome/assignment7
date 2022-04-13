
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

    // const $ = (id) => document.getElementById(id).value;
    let id =   document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let extension = document.getElementById('extension').value;
    let email =  document.getElementById('email').value;
    let department =  document.getElementById('department').value;
    let form=  document.getElementById('addForm').value;
               
    // id = id.value;
    // name = name.value;
    // ext = ext.value;
    // email = email.value;
    // department = department.value;
    // submitBtn = submit.value
        
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let newRow = employTable.insertRow();
    empCount.value = employTable.rows.length-1;
          
  // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
                    //새 행에 cell 추가
     let newCellid =   newRow.insertCell();
     let newCellname = newRow.insertCell();
     let newCellextension = newRow.insertCell();
     let newCellemail = newRow.insertCell();
     let newCelldepartment = newRow.insertCell();
     let newCellDelBtn = newRow.insertCell(); //Delete 버튼도 추가해서 만들자

   // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
          //cell 안에 들어갈 텍스트열 만들기 추가
     let textId =   document.createTextNode(id);
     let textName = document.createTextNode(name);
     let textExtension = document.createTextNode(extension);
     let textEmail = document.createTextNode(email);
     let textDepartment = document.createTextNode(department);
    
    // newCellid.appendChild(textID) = $('id').value
    // newCellname.innerText = $('name').value
    // newCellextension.innerText = $('extension').value
    // newCellemail.innerText = $('email').value
    // newCelldepartment.innerText = $('department').value
  
       newCellid.appendChild(textId);
       newCellname.appendChild(textName);
       newCellextension.appendChild(textExtension);
       newCellemail.appendChild(textEmail);
       newCelldepartment.appendChild(textDepartment);
     
    //  let newCellname = newRow.insertCell();
    //  let newCellextension = newRow.insertCell();
    //  let newCellemail = newRow.insertCell();
    //  let newCelldepartment = newRow.insertCell();
    //  let newCellDelBtn 


    // CREATE THE DELETE BUTTON
     let delBtn = document.createElement('button');
     let textDelete = document.createTextNode('Del');
     delBtn.appendChild(textDelete);
     delBtn.className = 'btn bg-danger text-white';
     newCellDelBtn.appendChild(delBtn);



    // RESET THE FORM
     addForm.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
     addForm.id.focus();
    
    
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

    //   function count() {
    //     for (let i = 1; i < empTable.rows.length; i++) {
    //     empTable[i-1].value;   
    //     }
    // }

    // let parentoutput = window.opener.document.getElementById('loginDetails');
    // let countText = document.createTextNode(count.innerText);
    // // empCount/appendChild(countText);
    // window.console.log(countText);
});

 
// DELETE EMPLOYEE
  employTable.addEventListener('click', (e) => {
     if(confirm('DO you want to delete this line of employee?')){
        if(e.target.classList.contains('btn')){
          const btn = e.target;
          btn.closest('tr').remove();
          empCount.value = employTable.rows.length-1;
        }
     }
  })