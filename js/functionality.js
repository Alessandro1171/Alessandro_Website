
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
    linkWork.forEach(L=> l.classList.remove('active-project'))
    this.classList.add('active-project')
}

linkWork.forEach(L=>l.addEventListener("click", activeWork))

document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("project_button")){
        toggleProjectPopup();
        projectItemDetails(e.target.parentElement);
    }
})
function toggleProjectPopup(){
    document.querySelector(".project_popup").classList.toggle("open");
}
document.querySelector(".project_popup-close").addEventListener("click", toggleProjectPopup)

function projectItemDetails(projectItem){
    console.log(projectItem);
    document.querySelector(".pp_thumbmail img").src = projectItem.querySelector(".project_img").src;
    document.querySelector(".project_popup-body").innerHTML = projectItem.querySelector("project_item-details").innerHTML;
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

/*Srcoll Section Functionality*/
const sections = documment.querySelectorAll("section[id]");
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