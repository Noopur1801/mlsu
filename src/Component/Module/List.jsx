// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";

// const Products = () => {
//   const [item, setitem] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:4001/api/product")
//       .then((res) => res.json())
//       .then((data) => setitem(data))
//       .catch((error) => console.log(error));
//   }, []);
//   // Sample product data (replace with actual data)
//   const products = [
//     {
//       id: 1,
//       title: "Product 1",
//       description: "Description of Product 1",
//       price: 20,
//       imageUrl: "https://via.placeholder.com/300x200",
//     },
//     {
//       id: 2,
//       title: "Product 2",
//       description: "Description of Product 2",
//       price: 30,
//       imageUrl: "https://via.placeholder.com/300x200",
//     },
//     {
//       id: 3,
//       title: "Product 3",
//       description: "Description of Product 3",
//       price: 25,
//       imageUrl: "https://via.placeholder.com/300x200",
//     },
//     // Add more products as needed
//   ];

//   return (
//     <Container style={{ paddingTop: "20px", paddingBottom: "20px" }}>
//       <h1>Products</h1>
//       <Row>
//         {products.map((product) => (
//           <Col key={product.id} md={4} className="mb-4">
//             <Card>
//               <Card.Img variant="top" src={product.imageUrl} />
//               <Card.Body>
//                 <Card.Title>{product.title}</Card.Title>
//                 <Card.Text>{product.description}</Card.Text>
//                 <Card.Text>Price: ${product.price}</Card.Text>
//                 <Button variant="primary">Add to Cart</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//       <div>
//         <table>
//           <tr>
//             <th>Product_type</th>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Thumbnail</th>
//           </tr>
//           {item.map((item) => (
//             <tr key={item._id}>
//               <td>{item.product_tytle}</td>
//               <td>{item.title}</td>
//               <td>{item.description}</td>
//               <td>{item.thumbnail}</td>
//             </tr>
//           ))}
//         </table>
//       </div>
//     </Container>
//   );
// };

// export default Products;

// import React, { useState } from "react";
// import { Button, Card, CardBody, Container } from "react-bootstrap";

// const ContactUs = () => {
//   const [item, setitem] = useState([
//     {
//       id: 201,
//       product_name: "Product 1",
//       price: 20000,
//       image: "./logo192.png",
//     },
//     {
//       id: 201,
//       product_name: "Product 2",
//       price: 30000,
//       image: "./logo192.png",
//     },
//   ]);
//   return (
//     <>
//       <Container>
//         {item.map((elem) => (
//           <Card key={elem.id}>
//             <Card.Img
//               style={{ width: "300px" }}
//               variant="top"
//               src={process.env.PUBLIC_URL + elem.image}
//               alt={elem.product_name}
//             />
//             <Card.Body>
//               <Card.Title>{elem.product_name}</Card.Title>
//               <Card.Text>${elem.price}</Card.Text>
//               <Button>Buy now</Button>
//             </Card.Body>
//           </Card>
//         ))}
//       </Container>
//     </>
//   );
// };

// export default ContactUs;

// import React from "react";
// import { Container, Form, Button } from "react-bootstrap";

// const ContactUs = () => {
//   return (
//     <Container className="mt-5">
//       <h2>Contact Us</h2>
//       <Form>
//         <Form.Group controlId="formBasicName">
//           <Form.Label>Name</Form.Label>
//           <Form.Control type="text" placeholder="Enter your name" />
//         </Form.Group>

//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control type="email" placeholder="Enter your email" />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group controlId="formBasicMessage">
//           <Form.Label>Message</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={4}
//             placeholder="Enter your message"
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// export default ContactUs;
import { useEffect, useState } from "react";
import React from "react";
// import axios from "axios";
// import { Card, Container } from "react-bootstrap";
const Products = () => {
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4001/api/category")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, [refresh]);

  const deleteData = async (id) => {
    fetch(`(http://localhost:4001/api/category/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        setRefresh(!refresh);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetch("http://localhost:4001/api/category")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, []);

    // {
    //   id: 1,
    //   product_name: "Product 1",
    //   price: 999,
    //   image: "/logo192.png",
    // },
    // {
    //   id: 2,
    //   product_name: "Product 2",
    //   price: 999,
    //   image: "/logo192.png",
    // },
    // {
    //   id: 3,
    //   product_name: "Product 3",
    //   price: 999,
    //   image: "/logo192.png",
    // },
    // {
    //   id: 4,
    //   product_name: "Product 4",
    //   price: 999,
    //   image: "/logo192.png",
    // },
    // {
    //   id: 5,
    //   product_name: "Product 5",
    //   price: 999,
    //   image: "/logo192.png",
    // },

  return (
    <>
      <table>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Thumbnail</th>
          <th>Delete</th>
        </tr>
        {items.map((item) => (
          <tr key={item._id}>
            <th>{item.title}</th>
            <th>{item.description}</th>
            <th>
              <button onClick={() => deleteData(item.id)}>Delete</button>
            </th>
            <th>
              <img alt="" src={item.thumbnail} height={200} width={200} />
            </th>
          </tr>
        ))}
      </table>
    </>
  );

};
export default Products;