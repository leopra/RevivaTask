const {computeTaxesAndTotal} = require('../TaxCalculator')

const fs = require('fs')

let rawdata = fs.readFileSync('input.json')

let data = JSON.parse(rawdata)

test('Test Receipt calculator', () => {
    let result = computeTaxesAndTotal(data[0])
    expect(result.taxTotal).toEqual(1.5)
    expect(result.total).toEqual(42.32)

    result = computeTaxesAndTotal(data[1])
    expect(result.taxTotal).toEqual(7.65)
    expect(result.total).toEqual(65.15)

    result = computeTaxesAndTotal(data[2])
    expect(result.taxTotal).toEqual(7.9)
    expect(result.total).toEqual(98.38)

})


