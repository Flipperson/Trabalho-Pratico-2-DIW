const receitasContainer = document.getElementById("receitas");

async function carregarReceitas() {
  try {
    const response = await fetch("https://api-receitas-pi.vercel.app/receitas/todas");
    if (!response.ok) {
      throw new Error("Erro ao buscar receitas.");
    }
    const receitas = await response.json();

    receitas.forEach(receita => {
      const receitaHTML = `
        <div class="col-md-4">
          <div class="card">
            <img src="${receita.link_imagem}" class="card-img-top" alt="${receita.receita}">
            <div class="card-body">
              <h5 class="card-title">${receita.receita}</h5>
              <p><strong>Ingredientes:</strong> ${receita.ingredientes}</p>
              <p><strong>Tipo:</strong> ${receita.tipo}</p>
              <button class="btn favorite-btn" data-id="${receita.id}">Salvar como Favorita</button>
            </div>
          </div>
        </div>
      `;
      receitasContainer.innerHTML += receitaHTML;
    });
  } catch (error) {
    console.error("Erro ao carregar receitas:", error);
    receitasContainer.innerHTML = "<p>Erro ao carregar receitas.</p>";
  }
}

carregarReceitas();