import React from 'react';
import QRCode from 'qrcode';
import ReactToPrint from "react-to-print";
import { RouteComponentProps } from "react-router-dom";
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap'

interface IPropsProductViewComponent extends RouteComponentProps<any>{
    productSelected:IProduct;
    getProductById:(id:string)=> void;
}

interface IStateProductViewComponent{
    codeQrImage:string;
}

export default class ProductViewComponent extends React.Component<IPropsProductViewComponent,IStateProductViewComponent> {
    componentRef:any;
    constructor(props:IPropsProductViewComponent){
        super(props);
        this.state = {
            codeQrImage:''
        };
        
    }
    componentDidMount() {
        console.log('component did mount')
        const params = this.props.match.params;
        if( params && params.id && params.id.length === 24){
            console.log('watching id')
            const {id} = this.props.match.params;
            this.props.getProductById(id);
            this.generateQrCode();
        }else{
            console.log('redirection');
            this.props.history.push('/products');
        }
    }

    async generateQrCode () {
        
        try {
              const response = await QRCode.toDataURL(window.location.href);
              this.setState({
                  ...this.state,
                  codeQrImage: response
              });
        }catch (error) {
          console.log(error);
        }
    }

    render(){
        const codeQrImage = this.state.codeQrImage;
        const productSelected = this.props.productSelected;
        return (
            <div className="product-view-component container">
                <h2>VIEW COMPONENT</h2>
                <h3>{JSON.stringify(productSelected)}</h3>

                <Row>
                    <Col xs={12} md={6} lg={6} xl={6}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Product View</Card.Title>
                                <ListGroup>
                                    <ListGroup.Item><b>Cost:</b>{productSelected.cost}</ListGroup.Item>
                                    <ListGroup.Item><b>Gender:</b> {productSelected.gender}</ListGroup.Item>
                                    <ListGroup.Item><b>Brand:</b> {(productSelected.brand)?productSelected.brand.name:'undefined'}</ListGroup.Item>
                                    <ListGroup.Item><b>Url:</b> {window.location.href}</ListGroup.Item>
                                </ListGroup>
                                
                                <Button variant="primary">Back to Products</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                    <Col xs={12} md={6} lg={6} xl={6}>
                        <Card style={{ width: '18rem' }}>
                            
                            <Card.Body>
                                <Card.Title>QR Code</Card.Title>
                                {codeQrImage ? (
                                <a href={codeQrImage} download>
                                    <img src={codeQrImage} alt="img"/>
                                </a>) : 'ERROR generating QR code'}
                                
                            </Card.Body>
                            <ReactToPrint
                                trigger={() => <button>Print this out!</button>}
                                content={() => this.componentRef }
                            />
                            <div style={{display:'block'}}>
                                <ComponentToPrint
                                    qrImage={codeQrImage}
                                    product={productSelected} 
                                    ref={(el) => (this.componentRef = el) } 
                                />
                            </div>
                            <Button variant="success">Print</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }

}

interface IComProps{
    qrImage:string;
    product:IProduct;
}

const boxStyle = {
    color:'blue',
    backgroundColor:'gray',
    width:'100px',
    height:'fit-content',
    display:'flex',
    FlexDirection:'column',
    FlexWrap:'no-wrap'
}

class ComponentToPrint extends React.Component <IComProps,any>{
    
    render() {
      console.log(this.props);
      const qrImage = this.props.qrImage;
      const product = this.props.product;
      return (
        <div style={boxStyle}>
            {qrImage ? (
            <a href={qrImage} download>
                <img src={qrImage} alt="img" style={{width:'70px',height:'70px'}}/>
            </a>) : 'ERROR generating QR code'}
            <h2>Bs{product.cost}</h2>
        </div>
      );
    }
  }