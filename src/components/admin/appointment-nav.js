// console.log('Appointment Navigation');
// Variables
const appointment = document.getElementById('appointment');

// Inserting Repeated code to multiple files
appointment.innerHTML = `
    <div class="row" style="margin: 0px 5px;;">
        <div class="col d-flex justify-content-center" style="padding: 0px;">
            <button class="btn btn-primary" 
                    type="button" 
                    style="width: 100px;background: #790604;border-style: solid;border-color: rgb(0,0,0);">
                <a href="appointment.html" style="color: #FFFFFF; text-decoration: none;">Today</a>
            </button>
        </div>
        <div class="col d-flex justify-content-center" style="padding: 0px;">
            <button class="btn btn-primary" 
                    type="button" 
                    style="width: 100px;background: #790604;border-style: solid;border-color: rgb(0,0,0);">
                <a href="appointment-upcoming.html" style="color: #FFFFFF; text-decoration: none;">Upcoming</a>
            </button>
        </div>
        <div class="col d-flex justify-content-center" style="padding: 0px;">
            <button class="btn btn-primary" 
                    type="button" 
                    style="width: 100px;background: #790604;border-style: solid;border-color: rgb(0,0,0);">
                <a href="appointment-history.html" style="color: #FFFFFF; text-decoration: none;">History</a>
            </button>
        </div>
    </div>
`;
