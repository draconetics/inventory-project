import React from 'react';
import {Button, Table, Modal, Form, ModalFooter} from 'react-bootstrap';

interface IPropsProductListComponent {
    products: IProduct[];
    getProducts: () => Promise<void>;
    /* createBrand:(data:IBrand)=> void;
    updateBrand:(data:IBrand)=> void;
    deleteBrand:(data:IBrand)=>void; */
}
  
interface IStateProductListComponent{
}


export default class componentName extends React.Component<IPropsProductListComponent,IStateProductListComponent> {


      componentDidMount(){
        this.props.getProducts();
      }
    
      render(){
        const productList = this.props.products;
        return (
          <div className="brand-list">
              <h2>this is brandlist component</h2>
              <h3>{JSON.stringify(this.props.products)}</h3>
              <div className="container">
                <button className="btn btn-primary">Create new Product</button>
              </div>
              <div className="container">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Brand</th>
                      <th>Gender</th>
                      <th>Cost</th>
                      <th>Operations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList && productList.map((item, index)=>{
                      return (
                        <tr key={index}>
                          <td>{index+1}</td>
                          <td>{(item.brand)?item.brand.name:'No brand found'}</td>
                          <td>{item.cost}</td>
                          <td>{item.gender}</td>
                          <td>
                            <button className="btn btn-success" >Edit</button>
                            <button className="btn btn-danger" >Delete</button>
                          </td>
                        </tr>
                      )
                      })
                    }
                    
                  </tbody>
                </Table>
              </div>
          </div>
        );
      }
}
