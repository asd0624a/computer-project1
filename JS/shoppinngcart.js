let shop = document.getElementById("shop");
console.log(shop);

let generateShop = () => {
    return (shop.innerHTML = `
    <div class="product-item card">
    <img src="./img/cpuimg.jpg" class="" alt="">
    <h5>產品名稱</h5>
    <p>產品說明</p>
    <div class="price-quantity">
        <h2>$100</h2>
        <div class="buttons">
            <i class="bi bi-dash-lg"></i>
            <div class="quantity">0</div>
            <i class="bi bi-plus-lg"></i>
        </div>
        
    </div>
</div>
  `)
}
