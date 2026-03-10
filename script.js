/* filepath: /home/baris/projects/fener/script.js */
document.addEventListener("DOMContentLoaded", function () {
  // Scroll animation
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe all verses and sections
  document
    .querySelectorAll(".verse, .rule, .reason, .mission")
    .forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(20px)"
      el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
      observer.observe(el)
    })

  // Yellow and blue colors animation on final statement
  const finalStatement = document.querySelector(".final-statement")
  if (finalStatement) {
    finalStatement.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.02)"
      this.style.transition = "transform 0.3s ease-out"
    })

    finalStatement.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)"
    })
  }

  // Add click animation to final statement
  if (finalStatement) {
    finalStatement.style.cursor = "pointer"
    finalStatement.addEventListener("click", function () {
      this.style.animation = "pulse 0.6s ease-out"
      setTimeout(() => {
        this.style.animation = "none"
      }, 600)
    })
  }
})

// Add pulse animation
const style = document.createElement("style")
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
`
document.head.appendChild(style)
