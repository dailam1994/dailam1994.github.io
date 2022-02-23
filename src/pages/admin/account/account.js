// console.log('Appointment');

// MODAL
// Function to close the modal
const closeModal = () => {
    document.getElementById('modal-1').style.display='none';
}

// Function to open the modal
const openModal = () => {
    document.getElementById('modal-1').style.display='block';
}

// Function to save then close the modal
const saveModalChanges = () => {
    alert('Deleted Account Successfully');
    closeModal();
}

// PAGE REDIRECT
// Function redirect to Create Page
const accountCreatePage = () => {
    window.location.href = '/src/pages/admin/account/account-create.html';
}

// Function redirect to Edit Page
const accountEditPage = () => {
    window.location.href = '/src/pages/admin/account/account-edit.html';
}

// CREATE and EDITING
// Function to edit an account
const createAccount = () => {
    alert('New User Created Successfully!')
    window.location.href = '/src/pages/admin/account/account.html';
}

// Function to edit an account
const editAccount = () => {
    alert('Edit User Successfully');
    window.location.href = '/src/pages/admin/account/account.html';
}
