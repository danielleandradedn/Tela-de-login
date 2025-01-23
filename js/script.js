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
  