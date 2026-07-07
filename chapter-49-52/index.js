/// 1.  signup form and display form data in your web page on submission

///////////////     Answer       /////////////////////

// function signup(x) {
//      x.preventDefault();
//     let name = document.getElementById('name')
//     let email = document.getElementById('email')
//     let pswd = document.getElementById('password')
//     if (name.value && email.value && pswd.value) {
//         console.log(name.value);
//         console.log(email.value);
//         console.log(pswd.value);
        
        
//     } else {
//         alert("please fill the information")
          
//     }
//     name.value =''
//     email.value =''
//     pswd.value =''
// }
// document.getElementById('form').addEventListener("submit",signup)


/// 2.Read More and Read Less

///////////////     Answer       /////////////////////

// function expand() {
//     var long = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos hic nostrum qui perferendis est, perspiciatis omnis natus, harum, excepturi tenetur corporis ipsam. Rem architecto atque labore ut quas quasi exercitationem vitae impedit voluptatem? Veniam sed amet vitae ullam placeat quis velit, fugiat itaque mollitia. Minima, tempora quos. Sed officia delectus commodi minima id corrupti! Eaque aperiam minima distinctio deserunt, omnis ipsa voluptas labore nihil ea, quaerat earum ex! Aut, perspiciatis!
//    <a href="javaScript:voide(0)" onclick="short()">Read Less</a>
//     `
//     document.getElementById('para').innerHTML= long;
// }
// function short() {
//     var short = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos enim, ab cumque at mollitia quas et excepturi quos animi voluptates, magni inventore facere recusandae dicta aperiam nulla dolorem saepe rerum aut? Adipisci, eos. Vero doloremque sapiente eaque, est fugiat quasi, voluptatum ut officiis fuga dolores pariatur. Commodi delectus expedita libero!
//     <a href="javaScript:voide(0)" onclick="expand()">Read More</a>
//     `
//     document.getElementById('para').innerHTML= short;
// }

/// 3.  area of triangle

///////////////     Answer       /////////////////////




function submitform(event){
 event.preventDefault();

let name = document.getElementById('name')
let rollNumber = document.getElementById('roll')
let subject = document.getElementById('sub')
let table = document.getElementById('stBody');



if(name.value && rollnumber.value && subject.value){


let tr =  document.createElement('tr');
   
tr.innerHTML = `
<td>${name.value}</td>
<td>${rollNumber.value}</td>
<td>${subject.value}</td>
<td>
<button onclick="delerow(this)">Delete</button>
<button onclick="editrow(this)">Edit</button>
</td>;
`

table.appendChild(tr)

 event.target.reset();


}else{
    alert("Please fill this input")
}
}


function delerow(btn){
btn.parentNode.parentNode.remove();
document.getElementById('editform').style.display = 'none';
}

let targetrow ;

function editrow(btnn){

document.getElementById('editform').style.display = "block";

targetrow = btnn.parentNode.parentNode;

document.getElementById('ename').value =  targetrow.cells[0].innerText;
document.getElementById('eroll').value =  targetrow.cells[1].innerText;
document.getElementById('esub').value =  targetrow.cells[2].innerText;

}


function save(btnn){

 targetrow.cells[0].innerText = document.getElementById('ename').value;
 targetrow.cells[1].innerText = document.getElementById('eroll').value;
 targetrow.cells[2].innerText = document.getElementById('esub').value;

 document.getElementById('editform').style.display = 'none';
}


