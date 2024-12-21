document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter')
  const speed = 200

  const startCounting = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target
        const target = +counter.getAttribute('data-target')
        const count = +counter.innerText
        const increment = target / speed

        if (count < target) {
          counter.innerText = Math.ceil(count + increment)
          setTimeout(() => startCounting([entry], observer), 1)
        } else {
          counter.innerText = target
        }
      }
    })
  }

  const observer = new IntersectionObserver(startCounting, {
    threshold: 0.5
  })

  counters.forEach(counter => observer.observe(counter))
})
