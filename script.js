function func(){
    var email = document.getElementById("Username").value;
    var pass = document.getElementById("password").value;
    if (email == 'swati@satvik' && pass == 'Iloveyou' ) {
        localStorage.setItem('code','strect');
        alert("Welcome!");
        window.location.assign("wel.html");
    }
    else{
        alert("Invalid Input!");
    }
}
function myfun(){
    var code = document.getElementById("code").value;
    if(code == '10715'){
        alert("Welcome to Slam Book");
        window.location.assign("slam.html");
    }
    else if (code == '17102022') {
        alert("Welcome to our Story");
        window.location.assign("story.html");
    } else if (code == '07082023'){
        alert("Ready for quiz!!");
        window.location.assign("https://forms.gle/hQQe4CuBCeVqp5uw6");
    } 
    else if (code == '15072023'){
        alert("Its time to sign the contract")
        window.location.assign("contract.html");
    } 
    else{
        alert("Invalid Code");
    }
}