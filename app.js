import fs from "fs"


export default class productManager{

    constructor(){
        this.path="./src/products.json"
    }

    getProducts=()=>{
        if(fs.existsSync(this.path)){
            const content = fs.readFileSync(this.path,"utf-8")
            let valor = JSON.parse(content)
            return valor
        }else console.log("archgivo no encontrado")
    }
}