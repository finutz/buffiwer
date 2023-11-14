function redirectTo(page) {
   window.location.href = page;
}

document.getElementById('login-form').addEventListener('submit', function (event) {
   event.preventDefault();

   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;

   // Simulate authentication (replace this with a secure authentication mechanism)
   const isAuthenticated = username === 'demo' && password === 'demo';

   if (isAuthenticated) {
      alert('Login successful!');
      redirectTo('download.html'); // Redirect to the download page after login
   } else {
      alert('Invalid username or password');
   }
});

document.getElementById('signup-form').addEventListener('submit', function (event) {
   event.preventDefault();

   const newUsername = document.getElementById('new-username').value;
   const newPassword = document.getElementById('new-password').value;

   // Simulate user registration (replace this with a secure registration mechanism)
   alert('Sign Up successful! You can now login.');
   redirectTo('login.html'); // Redirect to the login page after signup
});
