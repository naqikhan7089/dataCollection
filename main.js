const transfer = function(){
    let getname = document.getElementById("name").value;
    let getfathername = document.getElementById("fathername").value;
    let phoneno = document.getElementById("contactno").value;
    let getsemester = document.getElementById("semester").value;

    document.getElementById("dname").innerHTML = getname;
    document.getElementById("dfather").innerHTML = getfathername;
    document.getElementById("dnumber").innerHTML = phoneno;
    document.getElementById("dsemester").innerHTML = getsemester;
    document.getElementById("dmessage").innerHTML = "";
};

document.getElementById("btn").addEventListener("click", transfer);



const login = function () {
    const username = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const errormsg = document.getElementById("messageerror");

    if (username === "naqi" && pass === "naqi000") {
        window.location.assign("index.html");
        
    } else {
        errormsg.textContent = "Username or Password incorrect";
    }
};

document.getElementById("loginbtn").addEventListener("click", login);
