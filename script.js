document.getElementById('submit').addEventListener('click', (event)=>{

  
    let fname=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let confirmpass=document.getElementById('confirmpass').value;

    if(fname=="" || email=="" || password=="" || confirmpass=="")
    {
        document.getElementById('errmsg').style.display="block";
        document.getElementById('successmsg').style.display="none";

    }

    else
    {
        if(password===confirmpass)
        {
        document.getElementById('successmsg').style.display="block";
        document.getElementById('errmsg').style.display="none";
        let accesskey=getKey();

    // console.log(accesskey);
    const user={
        name:fname,
        email:email,
        password:password,
        accesskey:accesskey
    }

    localStorage.setItem('user',JSON.stringify(user));
    setTimeout( window.location.href='profile.html', 4000);
        }

        else{
            document.getElementById('errmsg').innerText="Password Didn't Matched";
            document.getElementById('errmsg').style.display="block";
        }
    }

    

   

});


function getKey(){
    let key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < 16; i++) {
      token += key.charAt(Math.floor(Math.random() * key.length));
    }
    return key;
}


// function checkuser(){
//     if (!localStorage.getItem('user') || !localStorage.getItem('user').accessToken) {
//         window.location.href = 'index.html';
//       } else {
//         showProfile();
//       }
// }