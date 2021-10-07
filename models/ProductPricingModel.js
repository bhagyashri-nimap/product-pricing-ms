
var { productData } = require('../mongooseModel/Product.js');
const request = require('request');
// var { userData } = require('../mongooseModel/User.js');
require('dotenv').config();
var _ = require('lodash');
exports.getAll = async function (data) {
   
    const checkProduct= await productData.find({
    })
    if (_.isEmpty(checkProduct)) {
        return {
            data: "error",
            value: false
        }
    }
       return {
           data: checkProduct,
           value: true
       }
},
exports.save = async function (data) {
    let saveProduct
       let newProductObj = {
        productSku: data.productSku,
        priceInr: data.priceInr,
        priceUsd:data.priceUsd
       }

       let productObj = new productData(newProductObj)
       saveProduct = await productObj.save()
      
    if (saveProduct && !saveProduct._id) {
        return {
            data: "Something Went Wrong While Saving Product",
            value: false
        }
    }
    return {
        data: saveProduct,
        value: true
    }
       
}