
var formlogin=document.querySelector('.login');
var formsignup=document.querySelector('.signup');
var loginlink=document.getElementById('btn__loginlink');
var signuplink=document.getElementById('btn__signuplink');
// hàm ẩn form đăng ký
function hidesignup(){
  formsignup.style.transform='scale(0)';
  formlogin.style.transform='scale(1)';
}
// hàm ẩn form đăng nhập
function hidelogin(){
  formsignup.style.top=0;
  formsignup.style. transform='translateY(-20%)';
  formsignup.style.transition='0.7s';
  formsignup.style.transform='scale(1)';
  formlogin.style.transform='scale(0)';
}
// hàm tạo ẩn hiện password với checkbox
var pw=document.getElementById('password');
var checkbox=document.getElementById('checkbox_showPW');
checkbox.addEventListener('change',()=>{
  if(checkbox.checked){
    pw.type='text';

  }else{
    pw.type='password';
  }
})
// hàm check input đầu vào của username,password,...
checkbox.addEventListener('click',()=>{
  if(checkbox.checked){
    if(pw.isnull){
      alert('field password is null');
    }
  }
     
    }
)