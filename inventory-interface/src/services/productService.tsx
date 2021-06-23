import {http}  from  '../config/http-common'

class ProductService {

  getList() {
        return http.get("/api/products");
  }

  createProduct(data:IProduct){
    return  http.post("/api/products", data);    
  }
/*
  updateBrand(id:string, data:IBrand){
    return  http.put("/api/brands/"+id, data);    
  }

  deleteBrand(id:string){
    return  http.delete("/api/brands/"+id);    
  }
 */
}

const productService = new ProductService();
export default productService;
