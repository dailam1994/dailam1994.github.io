// console.log('Admin Footer');
// Variables
const adminFooter = document.getElementById('footer');

// Inserting Repeated code to multiple files
adminFooter.innerHTML = `
    <footer class="footer-basic" style="background: linear-gradient(to left, rgb(74, 80, 181), rgb(50,53,101) 40%);">
        <div class="social">
            <a href="https://www.instagram.com/"><i class="icon ion-social-instagram" style="color: rgb(255,255,255);"></i></a>
            <a href="https://www.snapchat.com/"><i class="icon ion-social-snapchat" style="color: rgb(255,255,255);"></i></a>
            <a href="https://www.twitter.com/"><i class="icon ion-social-twitter" style="color: rgb(255,255,255);"></i></a>
            <a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="color: rgb(255,255,255);"></i></a>
        </div>
        <ul class="list-inline">
            <li class="list-inline-item">
                <a href=${nav_a_home} style="color: rgb(255,255,255);">Home</a>
            </li>
            <li class="list-inline-item">
                <a href=${nav_a_work_schedule} style="color: rgb(255,255,255);">Work Schedule</a>
            </li>
            <li class="list-inline-item">
                <a href=${nav_a_appointment} style="color: rgb(255,255,255);">Appointment</a>
            </li>
        </ul>
        <p class="copyright" style="color: rgb(255,255,255);">AmourAila © 2022</p>
    </footer>
`
