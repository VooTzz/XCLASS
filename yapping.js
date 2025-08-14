document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".progress-bar span");

  bars.forEach(bar => {
    let percent = bar.getAttribute("data-percent");
    let count = 0;
    bar.style.width = "0%";

    // Animasi progress bar
    setTimeout(() => {
      bar.style.width = percent + "%";
    }, 200);

    // Animasi angka persentase
    let interval = setInterval(() => {
      if (count < percent) {
        count++;
        bar.parentElement.setAttribute("data-percent", count + "%");
      } else {
        clearInterval(interval);
      }
    }, 15);
  });
});
