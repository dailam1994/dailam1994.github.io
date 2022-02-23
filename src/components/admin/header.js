// console.log('Admin Header');
// Variables
const adminHeader = document.getElementById('header');
let path = window.location.pathname;
let a_work_schedule = '/src/pages/admin/work-schedule';
let a_appointment = '/src/pages/admin/appointment';
let a_account = '/src/pages/admin/account';
let img_path = '../../../assets/img/Logo.tiff';
let nav_a_home = 'home.html';
let nav_a_display = 'display_mode.html';
let nav_a_work_schedule = `${a_work_schedule}/work-schedule.html`;
let nav_a_appointment = `${a_appointment}/appointment.html`;
let nav_a_account = `${a_account}/account.html`;

// if Statement to handle other paths
if (    path == `${a_work_schedule}/work-schedule.html` ||
        path == `${a_work_schedule}/work-schedule-set.html`) {
    img_path = `../${img_path}`;
    nav_a_home = '../home.html';
    nav_a_display = '../display_mode.html';
    nav_a_work_schedule = './work-schedule.html';
    nav_a_appointment = '../appointment/appointment.html';
    nav_a_account = '../account/account.html';
} else if (
        path == `${a_appointment}/appointment.html` || 
        path == `${a_appointment}/appointment-upcoming.html` || 
        path == `${a_appointment}/appointment-history.html` ||
        path == `${a_appointment}/appointment-history-user.html` ||
        path == `${a_appointment}/appointment-edit.html`) {
    img_path = `../${img_path}`;
    nav_a_home = '../home.html';
    nav_a_display = '../display_mode.html';
    nav_a_work_schedule = '../work-schedule/work-schedule.html';
    nav_a_appointment = './appointment.html';
    nav_a_account = '../account/account.html';
} else if (
        path == `${a_account}/account.html` || 
        path == `${a_account}/account-edit.html` || 
        path == `${a_account}/account-create.html`) {
    img_path = `../${img_path}`;
    nav_a_home = '../home.html';
    nav_a_display = '../display_mode.html';
    nav_a_work_schedule = '../work-schedule/work-schedule.html';
    nav_a_appointment = '../appointment/appointment.html';
    nav_a_account = './account.html';
}

// Funtion to handle Admin Logging out 
const adminLogout = () => {
    alert('Admin Logged Out Successfully!');
    window.location.href = '/';
}

// Inserting Repeated code to multiple files
adminHeader.innerHTML = `
    <nav    class="navbar navbar-light navbar-expand-md" 
            style="background: rgb(50,53,101);color: rgb(255,255,255);">
        <div class="container-fluid">
            <img src="${img_path}" style="width: 50px;height: 50px;" />
                <a class="navbar-brand" href="home.html" style="margin: 0px 0px 0px -130px;color: rgb(255,255,255);">AmourAila</a>
                <button data-bs-toggle="collapse" 
                        class="navbar-toggler" 
                        data-bs-target="#navcol-1" 
                        style="color: rgb(255,255,255);border-color: rgb(255,255,255);">
                    <span class="visually-hidden">Toggle navigation</span>
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="${nav_a_home}" style="color: rgb(255,255,255);">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="${nav_a_work_schedule}" style="color: rgb(255,255,255);">Work Schedule</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="${nav_a_appointment}" style="color: rgb(255,255,255);">Appointment</a>
                    </li>
                    <li class="nav-item dropdown"><a aria-expanded="false" data-bs-toggle="dropdown" class="dropdown-toggle nav-link text-light" href="#">Settings</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="${nav_a_account}">Account Management</a>
                            <a class="dropdown-item" href="${nav_a_display}">Display Mode</a>
                        </div>
                    </li>
                    <div class='d-flex flex-row justify-content-evenly'>
                        <button class="btn btn-warning m-1 mt-2" 
                                type="button" 
                                style="width: 150px;"
                                onclick='adminLogout()'>
                            <a style="color: #FFFFFF; text-decoration: none;" class='text-dark'>Logout</a>
                        </button>                
                    </div>
                </ul>
            </div>
        </div>
    </nav>
`;
