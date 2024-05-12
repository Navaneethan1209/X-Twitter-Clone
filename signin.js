function verify(){
    var username=document.getElementById("user_name").value;
    var password=document.getElementById("pass").value;
    if(username==password){
        window.location.href="home.html";
    }
    else{
        document.getElementById("status").innerHTML="Does not Match";
    }

}