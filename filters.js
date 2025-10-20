const filterLocation = document.querySelector('#filter-location')


filterLocation.addEventListener('change', function (event) {
  const jobs = document.querySelectorAll('.job-listing-card')
  const selectedValue = event.target.value
  
  jobs.forEach(job => {
    const modalidad = job.dataset.modalidad
    const isShown = selectedValue === '' || selectedValue === modalidad
    job.classList.toggle('is-hidden', isShown === false)
  })
})