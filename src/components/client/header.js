// console.log('Client Header');

// Variables
const clientHeader = document.getElementById('header');
let path = window.location.pathname;
let c_appointment = '/src/pages/client/appointment';
let img_path = '../../../assets/img/Logo.tiff';
let nav_c_home = 'home.html';
let nav_c_booking = 'booking.html';
let nav_c_availability = 'availability.html';
let nav_c_account_edit = 'account-edit.html';
let nav_c_appointment = `${c_appointment}/appointment-upcoming.html`;
let nav_c_display = 'display_mode.html';

// if Statement to handle other paths
if (    path == `${c_appointment}/appointment-upcoming.html` ||
        path == `${c_appointment}/appointment-history.html`) {
    img_path = `../${img_path}`;
    nav_c_home = '../home.html';
    nav_c_booking = '../booking.html';
    nav_c_availability = '../availability.html';
    nav_c_account_edit = '../account-edit.html';
    nav_c_appointment = '../appointment/appointment-upcoming.html';
    nav_c_display = '../display_mode.html';
}

// Funtion to handle Client Logging out 
const clientLogout = () => {
    alert('Client Logged Out Successfully!');
    window.location.href = '/';
}

// Inserting Repeated code to multiple files
clientHeader.innerHTML = `
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
                        <a class="nav-link active" href="${nav_c_home}" style="color: rgb(255,255,255);">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="${nav_c_availability}" style="color: rgb(255,255,255);">Availability</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="${nav_c_booking}" style="color: rgb(255,255,255);">Booking</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="${nav_c_appointment}" style="color: rgb(255,255,255);">Appointment</a>
                    </li>
                    <li class="nav-item dropdown"><a aria-expanded="false" data-bs-toggle="dropdown" class="dropdown-toggle nav-link text-light" href="#">Settings</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="${nav_c_account_edit}">Edit My Account</a>
                            <a class="dropdown-item" href="${nav_c_display}">Display Mode</a>
                        </div>
                    </li>
                    <div class='d-flex flex-row justify-content-evenly'>
                        <button class="btn btn-warning m-1" 
                                type="button" 
                                style="width: 150px;"
                                onclick='clientLogout()'>
                            <a style="color: #FFFFFF; text-decoration: none;" class='text-dark'>Logout</a>
                        </button>                
                    </div>
                </ul>
            </div>
        </div>
    </nav>
`;
