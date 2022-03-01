// console.log('Client Footer');
// Variables
const clientFooter = document.getElementById('footer');

// Inserting Repeated code to multiple files
clientFooter.innerHTML = `
    <footer class="footer-basic" style="background: linear-gradient(to left, rgb(74, 80, 181), rgb(50,53,101) 40%);">
    <div class="social">
        <a href="https://www.instagram.com/"><i class="icon ion-social-instagram"
                style="color: rgb(255,255,255);"></i></a>
        <a href="https://www.snapchat.com/"><i class="icon ion-social-snapchat"
                style="color: rgb(255,255,255);"></i></a>
        <a href="https://www.twitter.com/"><i class="icon ion-social-twitter" style="color: rgb(255,255,255);"></i></a>
        <a href="https://www.facebook.com/"><i class="icon ion-social-facebook"
                style="color: rgb(255,255,255);"></i></a>
    </div>
    <ul class="list-inline">
        <li class="list-inline-item">
            <a href="${nav_c_home}" style="color: rgb(255,255,255);">Home</a>
        </li>
        <li class="list-inline-item">
            <a href="${nav_c_availability}" style="color: rgb(255,255,255);">Availability</a>
        </li>
        <li class="list-inline-item">
            <a href="${nav_c_booking}" style="color: rgb(255,255,255);">Booking</a>
        </li>
        <li class="list-inline-item">
            <a href="${nav_c_appointment}" style="color: rgb(255,255,255);">Appointment</a>
        </li>
    </ul>
    <p class="copyright" style="color: rgb(255,255,255);">AmourAila © 2022</p>
    </footer>
`
