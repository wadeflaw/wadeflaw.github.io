// --- main.js: Simple UI Actions ---

window.addEventListener("DOMContentLoaded", () => {
  const btnPrint = document.getElementById("btn-print");
  
  if (btnPrint) {
    btnPrint.addEventListener("click", () => {
      window.print();
    });
  }
});
