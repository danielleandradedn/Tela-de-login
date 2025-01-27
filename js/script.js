document.addEventListener("DOMContentLoaded", function () {
  const toggleSenha = document.getElementById("toggleSenha");
  const senhaInput = document.getElementById("senha");

  toggleSenha.addEventListener("click", function () {
    const isSenhaVisible = senhaInput.type === "password";
    senhaInput.type = isSenhaVisible ? "text" : "password";
    toggleSenha.classList.toggle("fa-eye-slash", isSenhaVisible);
    toggleSenha.classList.toggle("fa-eye", !isSenhaVisible);
  });
});




/*tela de cadastro*/

// script.js
document.getElementById("jewelryForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = {};
  formData.forEach((value, key) => {
      data[key] = value;
  });
  console.log("Form Data:", data);
  // Add your save logic here
});