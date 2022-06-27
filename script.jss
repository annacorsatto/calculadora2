setTimeout(() => {
  toast.innerHTML = "Calculator";
}, 1500);
if (theme.getAttribute("href") === lightTheme) {
  themeIcon.setAttribute("src", sunIcon);
  toast.innerHTML = "Dark Mode 🌙";
} else {
  theme.setAttribute("href", lightTheme);
  themeIcon.setAttribute("src", moonIcon);
