
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
