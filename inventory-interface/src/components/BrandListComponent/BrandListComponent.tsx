import React from 'react';

interface IPropsBrandListComponent {
  brands: IBrand[];
  getBrands: () => Promise<void>;
}

interface IStateBrandListComponent{
}

export default class BrandListComponent extends React.Component<IPropsBrandListComponent,IStateBrandListComponent> {

  componentDidMount(){
    this.props.getBrands();
  }

  render(){
    const brandList = this.props.brands;
    return (
      <div className="brand-list">
          <h2>this is brandlist component</h2>
          <h3>{JSON.stringify(this.props.brands)}</h3>
          <div className="container brand-list__tools">
            <button className="btn btn-primary">Create new Brand</button>
          </div>
          <ul className="container brand-list__table">
            <li className="brand-list__title">
                <span>#</span>
                <span>CODE</span>
                <span>NAME</span>
                <span>OPERATIONS</span>
            </li>
            {brandList && brandList.map((item, index)=>{
                return (
                  <li key={index}>
                    <span>{index+1}</span>
                    <span>{item.code}</span>
                    <span>{item.name}</span>
                    <span>
                      <button className="btn btn-success">Edit</button>
                      <button className="btn btn-danger">Delete</button>
                    </span>
                  </li>
                )
            })}
          
          </ul>
      </div>
    );
  }
}
