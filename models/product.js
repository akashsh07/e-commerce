import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
{
    productId:
    {
        type: String,
        required: true,
        unique: true 
    },
    name: 
    {
        type: String,
        required: true
    },
    quantity: 
    {
        type: String,
        required: true,
    },
},
{
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;
