const { calculateDiscount, filterProducts, sortInventory } = require("../inventory.js")

const sampleData = [
    { id: 3, name: "Desk Lamp", price: 29.99 },
    { id: 10, name: "Ceiling Lamp", price: 29.50 },
    { id: 20, name: "Laptop", price: 999.99 },
    { id: 25, name: "Table w/ chairs", price:456.99},
    { id: 40, name: "Bottled Water", price: 8.50},
    { id: 26, name: "Nuka-Cola", price: 99.99 },
    { id: 85, name: "Hot Pockets", price: 250.99 },  
];

describe("The calculateDiscount function", () => {
    // Positive Test 
    test ("zero percent returns original price", () => {
        expect(calculateDiscount(42, 0)).toBe(42.00);
    });

    test ("hundred percent returns zero", () => {
        expect(calculateDiscount(42, 100)).toBe(0.00);
    });
    // Negative Test
    test("returns null if NaN", () => {
        expect(calculateDiscount(" ", 10)).toBeNull();
    });
    // Edge case test
    test("returns 0 when price is 0 regardless of discount", () => {
        expect(calculateDiscount(0, 50)).toBe(0);
    });
    
});

describe("The filterProducts function", () => {
    test("Should be a string.", () => {
        expect(filterProducts("Nuka-Cola", sampleData)).toBe("Nuka-Cola")
    });
    test("Should return an array.", () => {
        expect(Array.isArray(filterProducts("Lamp", sampleData))).toBe(true)
    }


)
})