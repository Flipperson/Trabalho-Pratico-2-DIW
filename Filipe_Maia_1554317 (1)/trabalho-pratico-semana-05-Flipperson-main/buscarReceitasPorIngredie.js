async function buscarReceitasPorTipo(tipo) {
    try {
      const response = await fetch(`https://api-receitas-pi.vercel.app/receitas/tipo/${tipo}`);
      const receitas = await response.json();
      console.log(receitas); // Renderize as receitas no HTML, como no exemplo anterior
    } catch (error) {
      console.error("Erro ao buscar receitas por tipo:", error);
    }
  }
  
  // Exemplo de uso:
  buscarReceitasPorTipo("doce");