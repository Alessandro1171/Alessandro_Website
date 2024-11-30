function toggleAboutText(event) {
    event.preventDefault();
    const extraText = document.querySelector('.read-more-text');
    const button = document.querySelector('.btn');
  
    // Toggle the visibility of extra content
    if (extraText.style.display === "none" || extraText.style.display === "flex" || extraText.style.display === "") {
      extraText.style.display = "block"; // Show extra content
      button.textContent = "Read Less"; // Change button text
    } else {
      extraText.style.display = "none"; // Hide extra content
      button.textContent = "Read More"; // Change button text back
    }
  }
/**
let mixerPortfolio = mixitup('.project_container', {
    selectors:{
        target: '.project_card'
    },
    animation:{
        duration: 300
    }
});
const linkWork  = document.querySelectorAll('.project_item')

function activeWork(){
    linkWork.forEach(L=> I.classList.remove('active-project'))
    this.classList.add('active-project')
}

linkWork.forEach(L=>I.addEventListener("click", activeWork))
**/
/**Project popups code**/
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("project_button")){
        toggleProjectPopup();
        projectItemDetails(e.target.parentElement);
    }
})
function toggleProjectPopup(){
    document.querySelector(".project_popup").classList.toggle("open");
}
document.querySelector(".project_popup-close").addEventListener("click", toggleProjectPopup);

function projectItemDetails(projectItem){
    console.log(projectItem);
    document.querySelector(".pp_thumbnail img").src = projectItem.querySelector(".project_img").src;
    document.querySelector(".project_popup-subtitle span").innerHTML = projectItem.querySelector(".project_title").innerHTML;
    document.querySelector(".project_popup-body").innerHTML = projectItem.querySelector(".project_item-details").innerHTML;
}


/*Input function*/
 
const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent  =this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) =>{
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})
/*
const emailOption = document.getElementById("email_id_button");
const phoneOption = document.getElementById("phone_id_button");
emailActivate = true;
phoneActivate= false;

emailOption.addEventListener("click", function () {
        console.log("email Option,  emailActivate:"+emailActivate+"   phoneActivate:"+phoneActivate)
        if (emailOption.checked) {
            console.log("Email Clicked")
            emailActivate = true;
            phoneActivate = false;
        }
    });

phoneOption.addEventListener("click", function () {
        console.log("phone Option,  emailActivate:"+emailActivate+"   phoneActivate:"+phoneActivate)
        if (phoneOption.checked) {
            console.log("Phone Clicked")
            emailActivate = false;
            phoneActivate = true;
        }
    });*/

/*Contact function*/
document.addEventListener("DOMContentLoaded", function () {
    const formCollection = document.getElementsByClassName("contact_form");
    document.getElementById("submisson_form");
    const emailOption = document.getElementById("email_id_button");
    const phoneOption = document.getElementById("phone_id_button");
  
    emailActivate = true;
    phoneActivate= false;
    console.log("form Collection:"+formCollection);
    const form = formCollection.item(0);
    console.log("form:"+form);
    // Switch to Email
    emailOption.addEventListener("click", function () {
        if (phoneActivate) {
            console.log("Email Clicked")
            emailActivate = true;
            phoneActivate = false;
        }
    });

    // Switch to Phone
    phoneOption.addEventListener("click", function () {
        if (emailActivate) {
            console.log("Phone Clicked")
            emailActivate = false;
            phoneActivate = true;
        }
    });
    
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (emailActivate){
            console.log("Email event activated")
            emailjs.init('mWxYZSTQaTDv8xFfL');
            const pureData = new FormData(form);
            const sortedData = Object.fromEntries(pureData.entries());

            emailjs.send('service_4kt14sf', 'template_oz6qd3c', sortedData)
                .then((response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    alert("Your message has been sent successfully!");
                    form.reset(); // Reset the form
            })
            .catch((error) => {
                console.error("FAILED...", error);
                alert("Failed to send your message. Please try again.");
            });
        }
        else if (phoneActivate){
            console.log("Phone event activated")
            const nodemailer = require("nodemailer");
            // Email transporter
            const transporter = nodemailer.createTransport({
               service: "gmail",
                auth: {
                    user: "alessdare@gmail.com", // Your Gmail
                    pass: "Alex0716%", // Your Gmail App Password
                },
            });
            const pureData = new FormData(form);
            let formString = "";
            for (const [key, value] of formData.entries()) {
                formString += `${key}: ${value}\n`;
            }

            // Send SMS as an email
            const mailOptions = {
             from: "alessdare@gmail.com",
             to: "4382746913@vmobl.com", // Replace with recipient's carrier email-to-SMS gateway
             subject: "", // Leave empty for SMS
             text: formString, // SMS content
            };

            transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error:", error);
            } else {
                console.log("SMS sent:", info.response);
            }
            });
        }
    });

});
/*Srcoll Section Functionality*/
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter(){
    let scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop -50,
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".navigation a[href*="+sectionId+"]").classList.add("active-link")
        }
        else{
            document.querySelector(".navigation a[href*="+sectionId+"]").classList.remove("active-link")
        }
    })
}