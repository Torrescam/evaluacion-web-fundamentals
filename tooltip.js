document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button");
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.textContent = button.getAttribute("data-tooltip");
  button.appendChild(tooltip);

  let tooltipTimeout;

  button.addEventListener("mouseover", () => {
    clearTimeout(tooltipTimeout);

    tooltipTimeout = setTimeout(() => {
      tooltip.classList.add("visible");
    }, 1000); 
  });

  button.addEventListener("mouseout", () => {
    clearTimeout(tooltipTimeout);
    tooltip.classList.remove("visible"); // Ocultar inmediatamente
  });
});
