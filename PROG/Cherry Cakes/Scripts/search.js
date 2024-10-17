// Função de pesquisa de produtos
function searchProducts(query) {
    query = query.toLowerCase(); // Converte o texto para minúsculas para uma comparação case-insensitive
    const products = document.querySelectorAll('.box'); // Seleciona todos os produtos
    
    products.forEach(product => {
        const productName = product.querySelector('.desc').innerText.toLowerCase(); // Nome/descrição do produto
        const productId = product.getAttribute('data-id'); // ID do produto
        
        // Verifica se o nome ou o ID contém o termo de busca
        if (productName.includes(query) || productId.includes(query)) {
            product.style.display = "flex"; // Exibe o produto se corresponder
        } else {
            product.style.display = "none"; // Oculta o produto se não corresponder
        }
    });
}

// Captura o clique no botão de busca ou pressionamento da tecla Enter
document.querySelector('.searchbtn').addEventListener('click', () => {
    const query = document.querySelector('.searchbar').value; // Valor da barra de pesquisa
    searchProducts(query); // Chama a função de pesquisa
});

document.querySelector('.searchbar').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = document.querySelector('.searchbar').value;
        searchProducts(query);
    }
});
