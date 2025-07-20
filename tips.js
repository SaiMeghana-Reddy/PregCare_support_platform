document.addEventListener("DOMContentLoaded", () => {
  // Tip of the Day logic
  const tips = [
    "Stay hydrated by drinking plenty of water every day.",
    "Eat a balanced diet rich in iron, calcium, and folic acid.",
    "Take prenatal vitamins as prescribed.",
    "Get plenty of rest and sleep.",
    "Avoid alcohol, tobacco, and caffeine.",
    "Do gentle exercises like walking or prenatal yoga.",
    "Attend all prenatal checkups.",
    "Talk to someone if you feel anxious or low.",
    "Keep track of baby kicks after 28 weeks.",
    "Wear comfy, breathable clothes and footwear."
  ];

  let currentTip = 0;
  const tipText = document.getElementById("tipText");

  function showTip(index) {
    tipText.textContent = tips[index];
  }

  showTip(currentTip);
  setInterval(() => {
    currentTip = (currentTip + 1) % tips.length;
    showTip(currentTip);
  }, 5000);

  // Modal logic
  const aboutLink = document.getElementById("aboutLink");
  const modal = document.getElementById("aboutModal");
  const closeBtn = document.querySelector(".close-btn");

  aboutLink.onclick = (e) => {
    e.preventDefault();
    modal.style.display = "block";
  };

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});
