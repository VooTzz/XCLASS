document.addEventListener("DOMContentLoaded", function () {
  const greeting = document.createElement("p");
  greeting.textContent = "Terima kasih sudah mengunjungi portofolio saya!";
  greeting.style.color = "blue";
  greeting.style.fontWeight = "bold";

  document.body.appendChild(greeting);
});
