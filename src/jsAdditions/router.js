const homePage = document.querySelector(".home"),
  aboutPage = document.querySelector(".about"),
  contactPage = document.querySelector(".contact")

const homeBtn = document.getElementById("home-link"),
  aboutBtn = document.getElementById("about-link"),
  contactBtn = document.getElementById("contact-link")

homeBtn.addEventListener("click", () => {
  homePage.classList.add("active")
  aboutPage.classList.remove("active")
  contactPage.classList.remove("active")
})
aboutBtn.addEventListener("click", () => {
  homePage.classList.remove("active")
  aboutPage.classList.add("active")
  contactPage.classList.remove("active")
})
contactBtn.addEventListener("click", () => {
  homePage.classList.remove("active")
  aboutPage.classList.remove("active")
  contactPage.classList.add("active")
})
