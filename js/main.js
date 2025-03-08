
document.addEventListener('DOMContentLoaded', () => {


const representatives = {
        "53223": { repName: "Rep. Russell A. Goodwin", repEmail: "Rep.Goodwin@legis.wisconsin.gov" },
        "53002": { repName: "Rep. Jane Smith", repEmail: "janesmith@example.com" },
        // Add more ZIP Codes and representatives here
    };

function updateRepresentativeInfo() {
    const userFirstName = document.getElementById('userFirstName').value;
    const userLastName = document.getElementById('userLastName').value;
    const userZipCode = document.getElementById('userZipCode').value;
    const representativeInfo = representatives[userZipCode];

    document.getElementById('repName').textContent = representativeInfo ? representativeInfo.repName : 'Unknown';
    document.getElementById('repEmail').textContent = representativeInfo ? representativeInfo.repEmail : 'Unknown';

    document.getElementById('userFirstNameDisplay').textContent = userFirstName;
    document.getElementById('userLastNameDisplay').textContent = userLastName;
    document.getElementById('userZipCodeDisplay').textContent = userZipCode;
}


    // Attach the updateRepresentativeInfo function to the input event of the ZIP Code field
    document.getElementById('userZipCode').addEventListener('input', updateRepresentativeInfo);
    
    // Validate reCAPTCHA before form submission
    window.validateRecaptcha = function() {
        const recaptchaResponse = grecaptcha.getResponse();
        if (recaptchaResponse.length === 0) {
            alert("Please complete the reCAPTCHA.");
            return false;
        }
        return true;
    };  

});  