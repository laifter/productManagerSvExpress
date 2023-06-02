import express from "express";
import productManager from "../app.js"
const app = express()

app.use(express.urlencoded({extended:true}))
const product = new productManager()


app.get("/products",(req,res)=>{
    let limit = parseInt(req.query.limit)
    if(!limit)return res.send(product.getProducts())
    let allProducts = product.getProducts()
    let productLimit = allProducts.slice(0,limit)
    res.send(productLimit)
})

app.get("/products/:id",(req,res)=>{
    let id = parseInt(req.params.id)
    let allProducts = product.getProducts()
    let productByid = allProducts.find(product => product.id === id)
    if(productByid === undefined) res.send("error objeto no encontrado")
    
    
    res.send(productByid)


})

app.listen(8080,console.log("server arriba"))