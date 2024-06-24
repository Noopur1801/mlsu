import React, {useState} from 'react'
import { Container,Card,Button } from 'react-bootstrap';


const Product = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            product_name: "Product 1",
            price: 999,
            image: "/logo192.png"
        },
        {
            id: 2,
            product_name: "Product 2",
            price: 1999,
            image: "/logo192.png"
        },
        {
            id: 3,
            product_name: "Product 3",
            price: 2999,
            image: "/logo192.png"
        }
    ]);
    return (
        <Container>
              {items.map((elem) => (
               
                    <Card key={elem.id}>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + elem.image} alt={elem.product_name}/>
                        <Card.Body>
                            <Card.Title>{elem.product_name}</Card.Title>
                            <Card.Title>${elem.price}</Card.Title>
                            <Button>Buy Now</Button>
                        </Card.Body>
                    </Card>

                ))}
              
        </Container>
    );
  
     
  
}

export default Product;