import Product from '../models/product.js';

export async function getProducts(req, res)
{
    try
    {
        let productList = await Product.find();
        
        if (productList.length > 0) 
        {
            // Construct the response JSON
            let responseData = productList.map((product) => (
            {
                "Prdoduct Id": product.productId,
                "Product Name": product.name,
                "Quantity": product.quantity,
            }));
    
            return res.status(200).json(
            {
                status: "success",
                message: "This is a list of products",
                data: responseData
            });
        } 
        else 
        {
            return res.status(200).json(
            {
                status: "success",
                message: "You don't have products",
                data: []
            });
        }
    }
    catch(error)
    {
        console.log('Error in adding the product : ', error);
        return res.status(500).json
        (
            {
                status: 'error',
                message: 'Internal server Error',
            }
        );
    }
}

export async function addProduct(req, res)
{
    try
    {
        let product = await Product.findOne({productId:req.body.productId});
        
        if(product)
        {
            return res.status(409).json(
                {
                    status: 'error',
                    message: 'Prdocut already exists',
                }
            );
        }

        let newProduct = await Product.create(req.body);

        return res.status(201).json
        (
            {
                status: 'success',
                message: 'Product is added successfully',
                data:
                {
                    name: newProduct.productId,
                    name: newProduct.name,
                    quantity: newProduct.quantity
                }
            }
        );
    }
    catch(error)
    {
        console.log('Error in adding the poduct : ', error);
        return res.status(500).json
        (
            {
                status: 'error',
                message: 'Internal server Error',
            }
        );
    }
}


export async function updateProduct(req, res)
{
    try
    {
        let productId = req.params.id;
        let newQauntity = req.query.number;

        let updatedProduct = await Product.findOneAndUpdate({productId: productId}, { quantity: newQauntity}, {new:true});

        if(updatedProduct)
        {
            return res.status(201).json(
            {
                status: 'success',
                message: 'Product is updated successfully',
                data:
                {
                    name: updatedProduct.productId,
                    name: updatedProduct.name,
                    quantity: updatedProduct.quantity
                }
            });
        }
        return res.status(404).json(
            {
                status: 'success',
                message: 'Prdocut not found',
            }
        );
    }
    catch(error)
    {
        console.log('Error in adding the poduct : ', error);
        return res.status(500).json
        (
            {
                status: 'error',
                message: 'Internal server Error',
            }
        );
    }
}

export async function deleteProduct(req, res)
{
    try
    {
        let productDeleted = await Product.findOneAndDelete({productId: req.params.id});
        
        if (productDeleted) 
        {
            return res.status(200).json(
            {
                status: "success",
                message: "product deleted"
            });
        } 
        else 
        {
            return res.status(404).json(
            {
                status: "success",
                message: "Product not found in db",
            });
        }
    }
    catch(error)
    {
        console.log('Error in adding the product : ', error);
        return res.status(500).json
        (
            {
                status: 'error',
                message: 'Internal server Error',
            }
        );
    }
}