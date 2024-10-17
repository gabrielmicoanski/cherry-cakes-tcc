// Array para armazenar os produtos no carrinho
let cart = [];

// Função para adicionar produtos ao carrinho
function addToCart(productId, productName, productPrice, productImage) {
    const product = cart.find(item => item.id === productId);

    if (product) {
        product.quantity++;
    } else {
        cart.push({
            id: productId,  // Adiciona o ID único do produto
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        });
    }
    
    updateCartIndicator();
    alert(`${productName} foi adicionado ao carrinho!`);
}

// Função para mostrar o modal do carrinho
function showCart() {
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
    } else {
        cart.forEach((item, index) => {
            cartItemsContainer.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <p>${item.name} - R$ ${item.price.toFixed(2)} x ${item.quantity}</p>
                    <div class="cart-item-buttons">
                        <button onclick="increaseQuantity(${index})">+</button>
                        <button onclick="decreaseQuantity(${index})">-</button>
                        <button onclick="removeFromCart(${index})">Remover</button>
                    </div>
                </div>
            `;
        });
    }

    document.getElementById('cartModal').style.display = 'flex';
}

// Função para fechar o modal do carrinho
function hideCart() {
    document.getElementById('cartModal').style.display = 'none';
}

// Função para aumentar a quantidade de um produto
function increaseQuantity(index) {
    cart[index].quantity++;
    showCart(); // Atualiza o carrinho
}

// Função para diminuir a quantidade de um produto
function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        removeFromCart(index);
    }
    showCart();
}

// Função para remover um produto do carrinho
function removeFromCart(index) {
    cart.splice(index, 1);
    showCart();
    updateCartIndicator();
}

// Função para atualizar o indicador de quantidade de produtos no carrinho
function updateCartIndicator() {
    const cartCountIndicator = document.getElementById('cartCountIndicator');
    if (cart.length > 0) {
        cartCountIndicator.style.display = 'inline';
    } else {
        cartCountIndicator.style.display = 'none';
    }
}

// Lógica para adicionar produtos a partir do botão 'btnBuy'
document.querySelectorAll('.btnBuy').forEach((button) => {
    button.addEventListener('click', () => {
        const productBox = button.closest('.box');
        const productId = productBox.getAttribute('data-id');  // Obtém o ID do produto
        const productName = productBox.querySelector('.desc').innerText;
        const productImage = productBox.querySelector('img').src;
        const productPrice = 20.00; // Defina o preço do produto

        addToCart(productId, productName, productPrice, productImage);
    });
});
