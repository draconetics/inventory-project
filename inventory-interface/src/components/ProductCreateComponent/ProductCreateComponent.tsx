import React from 'react';
import {Button, Table, Modal, Form, ModalFooter} from 'react-bootstrap';
import { RouteComponentProps } from "react-router-dom";

interface IPropsProductCreateComponent extends RouteComponentProps<any>{
  brands: IBrand[];
  getBrands: () => Promise<void>;
  createProduct:(data:IProduct)=> void;/*
  updateBrand:(data:IBrand)=> void;
  deleteBrand:(data:IBrand)=>void; */
}

interface IStateProductCreateComponent{
  gender:string;
  cost:number;
  brand:string;/*
  deleteDialogShow:boolean;
  newBrand:IBrand; */
}

export default class ProductCreateComponent extends React.Component<IPropsProductCreateComponent,IStateProductCreateComponent> {

  constructor(props:IPropsProductCreateComponent){
    super(props);
    this.state = {
        gender:'',
        cost:0,
        brand:'',
    };

    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
  }

  componentDidMount() {
      this.props.getBrands();
  }

  saveProduct() {
      this.props.createProduct({...this.state, brand: JSON.parse(this.state.brand)});
      this.props.history.push('/products');
  }

  onChangeBrand(e) {
      console.log(e.target.value);
      console.log(e.target.name);
      this.setState({
          ...this.state,
          [e.target.name]: e.target.value
      });
  }

  registerForm() {
      const brands = this.props.brands;
      return(
        <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Select the Brand</Form.Label>
                <Form.Control name="brand" as="select" onChange={this.onChangeBrand}>
                {brands && brands.map((item) => {
                    return (
                        <option value={JSON.stringify(item)}>{item.name}</option>
                    );
                })}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control 
                    name="gender"
                    type="text"
                    placeholder="Enter gender"
                    onChange={this.onChangeBrand}
                />
            </Form.Group>
            <Form.Group controlId="cost">
                <Form.Label>Cost</Form.Label>
                <Form.Control
                    name="cost"
                    type="number"
                    placeholder="12.4"
                    onChange={this.onChangeBrand}
                />
            </Form.Group>
            <Button variant="primary" onClick={this.saveProduct}>
                Save Product
            </Button>
        </Form>
      );
  }

  render(){
    return (
        <div className="product-create-component container">
            <h2>this is create product component</h2>
            <h3>{JSON.stringify(this.state)}</h3>
            <h2>this is the form2</h2>
            {this.registerForm()}
        </div>
    );
  }
}
