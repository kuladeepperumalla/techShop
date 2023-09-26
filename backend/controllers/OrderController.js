import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";


/**
@description: Create new order.
@param: /api/orders
@method POST 
@access private
 */
const addOrderItems = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})