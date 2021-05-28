const mongoose = require('mongoose');

const { schema } = mongoose;

const orderSchema = new schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    products: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;