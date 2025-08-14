document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".progress-bar");

  bars.forEach(bar => {
    const span = bar.querySelector("span");
    const percentText = bar.querySelector(".percent-text");
    const target = parseInt(bar.getAttribute("data-percent"), 10);

    span.style.width = "0%";
    percentText.textContent = "0%";

    let width = 0;
    const speed = 20; // kecepatan animasi (ms)
    const step = target / (1500 / speed); // bagi animasi agar selesai 1,5 detik

    setTimeout(() => {
      const fill = setInterval(() => {
        if (width >= target) {
          clearInterval(fill);
        } else {
          width += step;
          span.style.width = `${width}%`;
          percentText.textContent = `${Math.round(width)}%`;
        }
      }, speed);
    }, 200);
  });
});
