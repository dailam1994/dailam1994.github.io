// console.log('Footer');
// Variables
const Footer = document.getElementById('footer');

// if Statement to handle other paths
if (path != '/') {
    navigation_about = 'about.html';
    navigation_service = './service.html';
    navigation_blog = './blog.html';
    navigation_contact = './contact.html';
}

// Inserting Repeated code to multiple files
Footer.innerHTML = `
    <footer class="footer-basic" style="background: rgb(50,53,101);">
        <div class="social">
            <a href="https://www.instagram.com/"><i class="icon ion-social-instagram" style="color: rgb(255,255,255);"></i></a>
            <a href="https://www.snapchat.com/"><i class="icon ion-social-snapchat" style="color: rgb(255,255,255);"></i></a>
            <a href="https://www.twitter.com/"><i class="icon ion-social-twitter" style="color: rgb(255,255,255);"></i></a>
            <a href="https://www.facebook.com/"><i class="icon ion-social-facebook" style="color: rgb(255,255,255);"></i></a>
        </div>
        <ul class="list-inline">
            <li class="list-inline-item">
                <a href="/" style="color: rgb(255,255,255);">Home</a>
            </li>
            <li class="list-inline-item">
                <a href="${navigation_about}" style="color: rgb(255,255,255);">About</a>
            </li>
            <li class="list-inline-item">
                <a href="${navigation_service}" style="color: rgb(255,255,255);">Service</a>
            </li>
            <li class="list-inline-item">
                <a href="${navigation_blog}" style="color: rgb(255,255,255);">Blog</a>
            </li>
            <li class="list-inline-item">
                <a href="${navigation_contact}" style="color: rgb(255,255,255);">Contact</a>
            </li>
        </ul>
        <p class="copyright" style="color: rgb(255,255,255);">AmourAila © 2022</p>
    </footer>
`
