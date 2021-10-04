
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
    // var resBody
    // var url = "http://localhost:3000/getAll"
    // var options = {
    //     method: "GET",
    //     url: url,
    //     headers: {
    //         accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTVhOGU5MTZhZDE1MzllNjg2Mzk0MjciLCJuYW1lIjoiYmhhZ3lhc2hyaTc3NyIsImVtYWlsIjoiYmhhZ3lhc2hyaUBnbWFpbC5jb20iLCJtb2JpbGUiOiI5MjIxMjIxMjI0IiwiaWF0IjoxNjMzMzI0Njg5fQ.5XeywZOuBMX1tggdXWB01yURuQUR5F5tirBZaMwIiY4'
    //     }
    // }
    // console.log(options)
    // await request(options, function (err, response, body) {
    //     if (err) {
    //         return err, null
    //     } else {
    //         console.log("body============", body)
    //         resBody = body.
    //     }
    // })
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