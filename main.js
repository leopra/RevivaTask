//code to see the printed output

const {computeTaxesAndTotal, receiptToString} = require('./TaxCalculator')

const fs = require('fs')

let rawdata = fs.readFileSync('input.json')

let data = JSON.parse(rawdata)

data.forEach((order) => receiptToString(computeTaxesAndTotal(order)))
