//reduce

const mynums = [1, 2, 3]

// const mytot = mynums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)

const mytot = mynums.reduce((acc, curr) => acc + curr, 0)

console.log(mytot);

const shoppingcart = [
    {
        item: "js course",
        price: 999
    },
    {
        item: "java course",
        price: 1999
    },
    {
        item: "python course",
        price: 2999
    },
]

const pricetopay = shoppingcart.reduce((acc, item) => acc + item.price, 0)
console.log(pricetopay);

