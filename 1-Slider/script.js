const panels = document.querySelectorAll('.panel')
function remove(){
    panels.forEach((removeActivePanel) => {
        removeActivePanel.classList.remove("active")
    })
}
panels.forEach(panel => {
    panel.addEventListener("click",() => {
        remove();
        panel.classList.add('active');
    })
})