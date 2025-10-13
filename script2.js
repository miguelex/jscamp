const jobsDetails = document.querySelector('.job-details')
jobsDetails.addEventListener('click', function(event) {
  const element = event.target
  if (element.classList.contains('button-apply-job')) {

    const allApplyButtons = document.querySelectorAll('.button-apply-job')

    allApplyButtons.forEach(button => {
      button.textContent = '¡Aplicado!'
      button.classList.add('is-applied')
      button.disabled = true
    })
  }
})
