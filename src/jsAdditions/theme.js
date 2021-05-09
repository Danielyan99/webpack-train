const switchBtn = document.getElementById("switch")
const root = document.documentElement

// defaults
const colorPrimary = "#ff9a9e"
const colorPrimaryBold = "#ff7177"
const colorSecondary = "#fff"
const homeBg = "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)"
const aboutBg = "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)"
const contactBg =
  "linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)"

// darker colors
const headerBgDark = "linear-gradient(to top, #09203f 0%, #537895 100%)"
const homeBgDark = "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)"
const aboutBgDark = "linear-gradient(60deg, #29323c 0%, #485563 100%)"
const contactBgDark = "linear-gradient(to right, #243949 0%, #517fa4 100%)"

switchBtn.addEventListener("change", (e) => {
  if (e.target.checked) {
    root.style.setProperty("--clPrimary", "#00f3ff")
    root.style.setProperty("--headerBg", headerBgDark)
    root.style.setProperty("--clPrimaryBold", "#06989e")
    root.style.setProperty("--homeBg", homeBgDark)
    root.style.setProperty("--clSecondary", "#10adb5")
    root.style.setProperty("--aboutBg", aboutBgDark)
    root.style.setProperty("--contactBg", contactBgDark)
  } else {
    root.style.setProperty("--clPrimary", colorPrimary)
    root.style.setProperty("--clPrimaryBold", colorPrimaryBold)
    root.style.setProperty("--clSecondary", colorSecondary)
    root.style.setProperty("--headerBg", colorSecondary)
    root.style.setProperty("--homeBg", homeBg)
    root.style.setProperty("--aboutBg", aboutBg)
    root.style.setProperty("--contactBg", contactBg)
  }
})
