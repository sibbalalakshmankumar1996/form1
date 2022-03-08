let imageEle = document.getElementById("image");
let imagesArr = [ 
    "images/flowers.jpg", "images/red_rose.jpg", "images/small plant.jpg", "images/yellow flower.jpg", "images/green plant.jpg"
]
let index = 0;
let uniqueId = setInterval(function(){
    if(index>=imagesArr.length){
        index = 0;
    }
    imageEle.setAttribute("Src", imagesArr[index]);
    index++;
},3000);

//form validation code 
let fnameNode=document.getElementById("fname");
let lnameNode=document.getElementById("lname");
let unameNode=document.getElementById("uname");
let passNode=document.getElementById("pass");
let cpassNode=document.getElementById("cpass");

let fnameNode1 = document.getElementById("fnameErrMsg");
let lnameNode2 = document.getElementById("lnameErrMsg");
let unameNode3 = document.getElementById("unameErrMsg");
let passNode4 = document.getElementById("passErrMsg");
let cpassNode5 = document.getElementById("cpassErrMsg");

let border1 = "2px solid red";
let border2 = "2px solid green";

function validate1(){
    fnameNode1.textContent="";
    let fname = fnameNode.value;
    let regExp = new RegExp("^[A-Za-z]*$");
    console.log(regExp.test(fname));
    if (fname==''){
        fnameNode1.textContent = "Required*";
        fnameNode.style.border=border1;
        return false;
    }
    else if(regExp.test(fname)==false){
        fnameNode1.textContent = "first name should have only Alphabets";
        fnameNode.style.border=border1;
        return false;
    }
    else{
        fnameNode.style.border=border2;
        return true;
    }
}

function validate2(){
    lnameNode2.textContent="";
    let lname = lnameNode.value;
    let regExp = new RegExp("^[A-Za-z]*$");
    console.log(regExp.test(lname));
    if (lname==''){
        lnameNode2.textContent = "Required*";
        lnameNode.style.border=border1;
        return false;
    }
    else if(regExp.test(lname)==false){
        lnameNode2.textContent = "Last name should have only Alphabets";
        lnameNode.style.border=border1;
        return false;
    }
    else{
        lnameNode.style.border=border2;
        return true;
    }
}

function validate3(){
    unameNode3.textContent="";
    let username=unameNode.value;
    let regExp=new RegExp("[A-Za-z]{3,10}");
    console.log(regExp.test(username));
    if(username==''){
        unameNode3.textContent="Required*";
        unameNode.style.border=border1;
        return false;
    }
    else if(regExp.test(username)==false){
        unameNode3.textContent="Username should have Alphabets only";
        unameNode.style.border=border1;
        return false;
    }
    else if(username.length<3 && username.length>10){
        unameNode3.textContent="Username range between 3 to 10 characters only";
        unameNode.style.border=border1;
        return false;
    }
    else{
        unameNode.style.border=border2;
        return true;
    }
}

function validate4(){
    passNode4.textContent="";
    let password = passNode.value;
    let regExp =new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    if(password==''){
        passNode4.textContent = "Required*";
        passNode.style.border=border1;
        return false;
    }
    else if(regExp.test(password)==false){
        let spanNode = document.createElement("span");
        spanNode.textContent="Password should contain atleast one";
        let ulNode = document.createElement("ul");
        let liNode1 = document.createElement("li");
        liNode1.textContent="Capital Letter";
        let liNode2 = document.createElement("li");
        liNode2.textContent="Small Letter";
        let liNode3 = document.createElement("li");
        liNode3.textContent="Number";
        let liNode4 = document.createElement("li");
        liNode4.textContent="Special Letter";
        ulNode.append(liNode1, liNode2, liNode3, liNode4);
        passNode4.append(spanNode, ulNode);

        passNode.style.border=border1;
        return false;
    }
    else if(password.length<8){
        passNode4.textContent="Password should contain atleast 8 characters"
        passNode.style.border=border1;
        return false;
    }
    else{
        passNode.style.border=border2;
        return true;
    }

}

function validate5(){
    cpassNode5.textContent="";
    let confirmPass=cpassNode.value;
    let password = passNode.value;
    if( confirmPass==''){
        cpassNode5.textContent="Required*";
        cpassNode.style.border=border1;
        return false;
    }
    else if(confirmPass!==password){
        cpassNode5.textContent="Passowrd is not matching";
        cpassNode.style.border=border1;
        return false;
    }
    else{
        cpassNode.style.border=border2;
        return true;
    }
}

function validateForm(){
    let if1=validate1(); 
    let if2=validate2();
    let if3=validate3();
    let if4=validate4();
    let if5=validate5();
    return if1 && if2 && if3 && if4 && if5;
}