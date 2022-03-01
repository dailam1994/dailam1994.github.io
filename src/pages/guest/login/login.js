// console.log('Login');

// Function to handle user logged in
const loggedIn = () => {
    alert('Login Successfully');
}

// Function to handle admin logging in
const adminLogin = () => {
    alert('Admin Login Successfully');
    window.location.href = '/src/pages/admin/index.html';
}

// Function to handle client logging in
const clientLogin = () => {
    alert('Client Login Successfully');
    window.location.href = '/src/pages/client/index.html';
} 