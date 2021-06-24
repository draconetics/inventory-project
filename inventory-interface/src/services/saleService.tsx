import {http}  from  '../config/http-common'

class SaleService {

  getList() {
      return http.get("/api/products");
  }

  createSale(data:ISale){
      return  http.post("/api/products", data);    
  }

  getSaleById(id:string) {
      return  http.get("/api/products/"+id);    
  }
  
  updateSale(id:string, data:IBrand){
    return  http.put("/api/brands/"+id, data);    
  }

  deleteSale(id:string){
    return  http.delete("/api/brands/"+id);    
  }
}

const saleService = new SaleService();
export default saleService;
