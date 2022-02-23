// console.log('Work Schedule');

// SET TIME
// Function to handle click of 'Set Available Time' Button
const setTime = () => {
    console.log('Time Set');
    window.location.href = '/src/pages/admin/work-schedule/work-schedule-set.html';
}

// Function to handle click of 'Confirmed Set Available Time' Button
const confirmSetTime = () => {
    alert('Schedule Set Successfully');
    window.location.href = '/src/pages/admin/work-schedule/work-schedule.html';
}
