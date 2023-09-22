import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import { saveShippingAddress } from '../slices/cartSlice';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';

function ShippingScreen() {
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    const [address, setAddress] = useState(shippingAddress?.address || '');
    const [city, setCity] = useState(shippingAddress?.city || '');
    const [postalcode, setPostalcode] = useState(shippingAddress?.postalcode || '');
    const [country, setCountry] = useState(shippingAddress?.country || '');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({
            address,
            city,
            postalcode,
            country
        }));
        navigate('/payments')
    }

  return (
    <FormContainer>
          <CheckoutSteps step1 step2 />
        <h1>
            Shipping
        </h1>
        <Form onSubmit={submitHandler}>
            <Form.Group>
                <Form.Label>
                    Address
                </Form.Label>
                <Form.Control
                type='text'
                placeholder='Enter Address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                >
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    City
                </Form.Label>
                <Form.Control
                type='text'
                placeholder='Enter City'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                >
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    Postalcode
                </Form.Label>
                <Form.Control
                type='text'
                placeholder='Enter Postalcode'
                value={postalcode}
                onChange={(e) => setPostalcode(e.target.value)}
                >
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    Country
                </Form.Label>
                <Form.Control
                type='text'
                placeholder='Enter Country'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                >
                </Form.Control>
            </Form.Group>
            <Button
            type='submit'
            varient='primary'
            className='my-2'
            >
                Continue
            </Button>
        </Form>
    </FormContainer>
  )
}

export default ShippingScreen
