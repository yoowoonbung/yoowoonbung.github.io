init()
function init(){
    var users=document.getElementById("users")
    var pass=document.getElementById("pass")
    users.addEventListener("blur",usersFocusHandler)
    pass.addEventListener("blur",passFocusHandler)
    users.addEventListener("focus",focusHandler)
    pass.addEventListener("focus",focusHandler)
}
function focusHandler(){
    this.placeholder="";
}

function usersFocusHandler(){
    this.placeholder="网易邮箱账号";
}
function passFocusHandler(){
    this.placeholder="密码";
}