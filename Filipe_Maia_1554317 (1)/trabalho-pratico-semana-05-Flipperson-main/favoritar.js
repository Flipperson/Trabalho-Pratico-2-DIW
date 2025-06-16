document.addEventListener("click", (event) => {
    if (event.target.classList.contains("favorite-btn")) {
      const receitaId = event.target.getAttribute("data-id");
      let favoritas = JSON.parse(localStorage.getItem("favoritas")) || [];
      if (!favoritas.includes(receitaId)) {
        favoritas.push(receitaId);
        localStorage.setItem("favoritas", JSON.stringify(favoritas));
        alert("Receita salva como favorita!");
      } else {
        alert("Essa receita já está nos favoritos!");
      }
    }
  });