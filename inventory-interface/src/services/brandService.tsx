import {http}  from  '../config/http-common'

class BrandService {

  getList() {
        return http.get("/api/brands");
  }

}

const brandService = new BrandService();
export default brandService;
