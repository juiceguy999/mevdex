const smartContract = document.getElementById('smartContract').innerHTML
const smartContractBtn = document.getElementById('smartContractBtn')
const smartContractTooltip = document.getElementById('smartContractTooltip')


smartContractBtn.addEventListener('click', copyContract)

async function copyContract() {
    await navigator.clipboard.writeText(smartContract);
    smartContractTooltip.classList.add('contract__main-btn-tooltip--active')
    smartContractTooltip.innerHTML = "Copied";
}