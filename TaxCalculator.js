// exceptions in taxes
let exceptions = ["book", "food", "chocolate", "headache pills"]


//custom operators to handle decimal operations
const sum = (a, b) => {
    return (a * 100 + b * 100) / 100
}

const multiply = (a, b) => {
    return ((a * 100) * (b * 100)) / 10000
}

const computeTaxesAndTotal = (order) => {

    let res = order.basket.map((item) => {
        let tax

        //calculate basic tax
        if (exceptions.some((a) => item.name.includes(a))) {
            tax = 0
        }

        else {
            tax = multiply(0.10, item.price)
        }

        //calculate import duty
        if (item.name.includes("import")) {
            tax = sum(tax, multiply(0.05, item.price))
        }

        // round to nearest 0.05 
        tax = Math.ceil(tax * 20) / 20

        return { ...item, tax: tax }
    })

    let taxTotal = res.map(c => multiply(c.tax, c.n)).reduce(sum, 0)

    let total = sum(res.map(c => multiply(c.price, c.n)).reduce(sum, 0), taxTotal)

    return { ...order, basket: res, taxTotal: taxTotal, total: total }
}

const receiptToString = (order) => {
    console.log(`Output ${order.order}:`)
    order.basket.forEach(it => console.log(`${it.n} ${it.name}: ${it.price}`))
    console.log(`Sales Taxes: ${order.taxTotal}`)
    console.log(`Total: ${order.total}`)
}

module.exports = {computeTaxesAndTotal, receiptToString}
