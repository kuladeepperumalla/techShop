import React from "react"
import { Col, Row, Image, ListGroup, Card, Button, ListGroupItem} from "react-bootstrap"
import { Link } from "react-router-dom"
import {  useParams } from 'react-router-dom'
import Rating from "../components/Rating"
import products from "../products"


const ProductScreen = ({ history, match }) => {

    const {id: productId } = useParams();
    const product = products.find((p) => p._id === productId)
    return (
        <>
        <Link className="btn btn-light my-3" to={'/'}>Go Back</Link>
        <Row>
        <Col md={5}>
            <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={4}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.value} text={`${product.numReviews} reviews`} />
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: ${product.price}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant="flush">
                    <ListGroupItem>
                        <Row>
                            <Col>Price</Col>
                            <Col>
                            <strong>
                                {product.price}
                            </strong>
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>Status</Col>
                            <Col>{product.countInStock ? 'In Stock' : 'Out Of Stock'}</Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Button
                        className="btn btn"
                        >
                            Add To Cart
                        </Button>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
        </Row>
        </>
    )
}

export default ProductScreen