module.exports = srv => {
    srv.after('READ', 'Products', items => {
        return items.map(item => {
            if (item.UnitsInStock > 100) {
                item.ProductName += ' SALE NOW ON!'
            }
            return item
        })
    })
}
