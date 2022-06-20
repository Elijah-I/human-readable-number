module.exports = function toReadable(number) {
    // restrictions
    if (number > 999) number = 999

    // vars
    const assoc_nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const assoc_tens = [
        '',
        ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ]

    // extract data
    const [num, ten, hundred] = Array.from(number.toString()).reverse()

    // convert data to words
    const hundreds = hundred ? assoc_nums[hundred] + ' hundred ' : ''
    const tens = ten ? (ten > 1 ? assoc_tens[ten] : (ten == 0 ? '' : assoc_tens[1][num])) : ''
    const nums = ((ten > 1 || ten == 0 || !ten) && num > 0) ? (ten == 0 ? '' : ' ') + assoc_nums[num] : ''

    // fix zero
    let ret = (hundreds + tens + nums).trim()
    if (!ret) ret = assoc_nums[0]

    // return data
    return ret
}
