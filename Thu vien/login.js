var checkEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var checkPassword = /^[A-Za-z0-9]{6,18}$/;
    

function checknull(txt){
    return txt.value.length == 0;
}

function StringMatch(txt,reg) {       
    return reg.test(txt.value);
}


function validateForm(f) {

    var valid = 0;
    var x = document.getElementsByClassName("help-text");

    if(checknull(f.password))
    {
        x[1].innerHTML = "Mời nhập mật khẩu !!";
        f.password.focus();
    }  
    else
    {   
        if(!StringMatch(f.password, checkPassword))
        {
            x[1].innerHTML = "Mật khẩu chưa đúng định dạng !!";
            f.password.value = "";
            f.password.focus();
        }
        else
        {
            ++valid;
            x[1].innerHTML = "";                    
        }        
    }

    if(checknull(f.email))
    {
        x[0].innerHTML = "Mời nhập email !!";
        f.email.focus();
    }  

    else
    {
        if(!StringMatch(f.email, checkEmail))
        {
            x[0].innerHTML = "Email chưa đúng định dạng !!";
            f.email.value = "";
            f.email.focus();
        }
        else
        {
            ++valid;
            x[0].innerHTML="";
        }        
    }  

    if(valid == 2)
    {
        alert("Đăng nhập thành công !!");
        location.assign("trangchutv.html");
    }
}