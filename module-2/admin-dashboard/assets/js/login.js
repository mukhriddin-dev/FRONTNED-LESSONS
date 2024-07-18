
const loginForm=$("#submit-form"),
      email=$("#email"),
      password=$("#password");



async function useAuth(URL, user){
    console.log(URL);
    console.log(user);
    try{
      const req=await fetch(`${URL}/auth/login`,{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(user)
      });
      const res=await req.json();

      if(req.status===200){
        localStorage.setItem('token', res.token)
      }

      if(localStorage.getItem('token')){
         location.href="../../index.html";
      }

    }catch(err){
      console.error(err.message);
    }
}


loginForm.addEventListener('submit', (e)=>{

    e.preventDefault();
    
    const user={
        username:email.value,
        password:password.value
    }

    console.log(user);

    if(user.username.trim().length===0 && user.password.length===0){
        alert("plese fill form")
    }else{
        useAuth(API, user)
    }
})

