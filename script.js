const jobsListingSection = document.querySelector('.jobs-listings')

jobsListingSection.addEventListener('click', function(event) {
  const element = event.target

  if (element.classList.contains('button-apply-job')) {
    element.textContent = '¡Aplicado!'
    element.classList.add('is-applied')
    element.disabled = true
  }
})

const filter = document.querySelector('#filter-technology')
filter.addEventListener('change', function (event) {
  const selectedTechnology = event.target.value.toLowerCase()
  const jobCards = document.querySelectorAll('.job-listing-card')
  
  jobCards.forEach(card => {
    const jobDescription = card.querySelector('p').textContent.toLowerCase()
    
    if (selectedTechnology === '') {
      card.style.display = 'flex'
    } else {
      if (jobDescription.includes(selectedTechnology)) {
        card.style.display = 'flex'
      } else {
        card.style.display = 'none'
      }
    }
  })
})

const filterLocation = document.querySelector('#location')
filterLocation.addEventListener('change', function (event) {
  const selectedLocation = event.target.value.toLowerCase()
  const jobCards = document.querySelectorAll('.job-listing-card')
  
  jobCards.forEach(card => {
    const jobLocation = card.querySelector('small').textContent.toLowerCase()

    if (selectedLocation === '') {
      card.style.display = 'flex'
    } else {
      if (jobLocation.includes(selectedLocation)) {
        card.style.display = 'flex'
      } else {
        card.style.display = 'none'
      }
    }
  })
})

