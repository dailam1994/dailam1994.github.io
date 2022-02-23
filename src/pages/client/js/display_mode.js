// console.log('Display Mode');

// Function for handling Dark Mode
function darkMode() {
    // If Statement to handle sessionStorage Colour
    if (sessionStorage.getItem('colour')) {
        sessionStorage.setItem('colour', "rgb(0,0,0)");
        document.body.style.backgroundColor = sessionStorage.getItem('colour');
        document.body.style.color = 'rgb(255,255,255)';

        // For Loops for handling unique class tags
        for (let i of document.querySelectorAll('.accordion-body > .row')) {
            i.style.color = 'rgb(0,0,0)';
        }
        for (let i of document.querySelectorAll('.table')) {
            i.style.color = 'rgb(0,0,0)';
        }
        for (let i of document.querySelectorAll('.modal-dialog')) {
            i.style.color = 'rgb(0,0,0)';
        }
        
    } else {
        document.body.style.backgroundColor =  "rgb(0,0,0)";
        sessionStorage.setItem('colour', "rgb(0,0,0)");
    }
}

// Function for handling Light Mode
function lightMode() {
    if (sessionStorage.getItem('colour')) {
        sessionStorage.setItem('colour', "rgb(255,255,255)");
        document.body.style.backgroundColor = sessionStorage.getItem('colour');
        document.body.style.color = 'rgb(0,0,0)';
    } else {
        document.body.style.backgroundColor =  "rgb(255,255,255)";
        sessionStorage.setItem('colour', "rgb(255,255,255)");
    }
}

// If Statement to handle storage colour
if (sessionStorage.getItem('colour') == 'rgb(0,0,0)') {
    darkMode()
} else {
    lightMode()
}