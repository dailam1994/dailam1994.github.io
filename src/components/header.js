// console.log('Header');
// Variables
const Header = document.getElementById('header');
let path = window.location.pathname;
let image_path = 'assets/img/Logo.tiff';
let navigation_about = './src/pages/guest/about.html';
let navigation_service = './src/pages/guest/service.html';
let navigation_blog = './src/pages/guest/blog.html';
let navigation_contact = './src/pages/guest/contact.html';

// if Statement to handle other paths
if (path != '/') {
    image_path = '../../../assets/img/Logo.tiff';
    navigation_about = 'about.html';
    navigation_service = 'service.html';
    navigation_blog = 'blog.html';
    navigation_contact = 'contact.html';
}

// Function to redirect user to Login Page
const loginPage = () => {
    window.location.href = '/src/pages/guest/login.html';
}

// Inserting Repeated code to multiple files
Header.innerHTML = `
    <nav    class="navbar navbar-light navbar-expand-md" 
            style="background: rgb(50,53,101);color: rgb(255,255,255);">
        <div class="container-fluid">
            <img src="${image_path}" style="width: 50px;height: 50px;" />
                <a class="navbar-brand" href="/src/pages/guest/contact.html" style="margin: 0px 0px 0px -130px;color: rgb(255,255,255);">AmourAila</a>
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
                        <a class="nav-link active" href="/" style="color: rgb(255,255,255);">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="${navigation_about}" style="color: rgb(255,255,255);">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="${navigation_service}" style="color: rgb(255,255,255);">Service</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="${navigation_blog}" style="color: rgb(255,255,255);">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="${navigation_contact}" style="color: rgb(255,255,255);">Contact</a>
                    </li>
                    <div class='d-flex flex-row justify-content-evenly'>
                        <button class="btn btn-primary m-1" 
                                type="button" 
                                style="width: 150px;"
                                onclick='loginPage()'>
                            <a style="color: #FFFFFF; text-decoration: none;">Login</a>
                        </button>                  
                    </div>
                </ul>
            </div>
        </div>
    </nav>
`;
