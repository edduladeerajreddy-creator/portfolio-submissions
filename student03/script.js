function showMessage() {
  document.getElementById("msg").innerText = "Message sent successfully!";
  return false;
}

function toggleMenu() {
  let menu = document.querySelector(".nav-links");

  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}
