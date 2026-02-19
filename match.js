const numbers = [43, 6, 34, 77, 45];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    // console.log(number);
}


for (let num of numbers) {
    // console.log(num)
}


const products = [
    { id: 1, name: "Xaimi Phone one night", price: 12222 },
    { id: 2, name: "Iphone ", price:12442 },
    { id: 3, name: "mac book air", price: 65433},
    { id: 4, name: "lenovo laptop", price:65321 },
    { id: 5, name: "Dell laptop", price: 67788},
    { id: 6, name: "Samsung phone", price:73454 },
    { id: 7, name: "Nokia old age Phone gone", price: 56432},
    { id: 8, name: "Phone one", price: 78435}

]

// for (const product of products ) {
//     console.log(product)
// }




function matchProduct (products, search) {
 
    let matched = [];
    for(const product of products) {

        if(product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product)
        }
    }
    return matched;
}

const result = matchProduct(products, "laptop")

console.log(result)