const panelBtn = document.getElementById('panelBtn')

panelBtn.addEventListener('click', () => {
    panelBtn.classList.toggle('stats__main-panel-btn--active');
    let panelBtnText = panelBtn.querySelector('.stats__main-panel-span')

    let panel = panelBtn.previousElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panelBtnText.innerHTML = 'READ MORE';
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panelBtnText.innerHTML = 'SHOW LESS';
      }
})