  
    window.onload = function() {
        if (!localStorage.getItem('user')) {
          window.location.href = 'index.html';
        } else {
          showProfile();
        }
      };

    

function showProfile() {
    const user = JSON.parse(localStorage.getItem('user'));
    document.getElementById('name').textContent = 'Name: ' + user.name;
    document.getElementById('email').textContent = 'Email: ' + user.email;
    document.getElementById('password').textContent = 'Email: ' + user.password;

}


document.getElementById('submit').addEventListener('click', ()=>{
    localStorage.removeItem('user');
    window.location.href = 'index.html';
});