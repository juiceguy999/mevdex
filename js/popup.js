const popup = document.getElementById('popup');
const popupClose = document.getElementById('popupClose')
const popupBtns = document.querySelectorAll('#popupBtn')

popupBtns.forEach((popupBtn) => {
    
    popupBtn.addEventListener('click', () => {
        popup.style.display = 'flex';
    })

})

popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
})