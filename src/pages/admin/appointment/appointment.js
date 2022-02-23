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
    alert('Deleted Appointment Successfully');
    closeModal();
}

// PAGE REDIRECT
// Function redirect to Edit Page
const appointmentEditPage = () => {
    window.location.href = '/src/pages/admin/appointment/appointment-edit.html';
}

// Function redirect to Edit Page
const appointmentHistoryPage = () => {
    window.location.href = '/src/pages/admin/appointment/appointment-history.html';
}

// Function redirect to Edit Page
const appointmentHistoryUserPage = () => {
    window.location.href = '/src/pages/admin/appointment/appointment-history-user.html';
}

// EDITING
// Function to edit an appointment
const editAppointment = () => {
    alert('Edit Appointment Successfully');
    window.location.href = '/src/pages/admin/appointment/appointment.html';
}