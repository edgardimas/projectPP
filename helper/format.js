function formatted(value) {
    let data = value.toLocaleString("id-ID")
    return `Rp. ${data},00`
}

module.exports = formatted