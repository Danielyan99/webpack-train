const navlinks = document.querySelectorAll(".link")

navlinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    navlinks.forEach((link) => {
      link.classList.remove("active")
    })
    link.classList.add("active")
  })
})
