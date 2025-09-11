function calculateDiscount(price, discountPercent) {
    let discountRate = discountPercent / 100;
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    
    const discountAmount = price * discountRate;
    const finalPrice = price - discountAmount;
    
    return finalPrice;
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
  
    return products.filter(callback);
}

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    // TODO: Implement sorting logic
    return [];
}

module.exports = { calculateDiscount, filterProducts, sortInventory };