import React from 'react'
import { useEffect, useState } from 'react'
import controller from '../../../services/helper'
import { endpoints } from '../../../services/costants'
import { Link } from "react-router-dom"
import { Card, Col, Row } from 'antd';
const { Meta } = Card;

const Products = () => {
  const [products, setData] = useState([])
  const Getproducts = async () => {
    try {
      const data = await controller.getAllData(endpoints.products);
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);

    }
  };


  useEffect(() => {
    Getproducts();
  }, [])
  return (
    <Row gutter={16}>
      {products && products.map((p) => {
        return (<Col className="gutter-row" span={6} key={p.id}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt={p.title} src={p.image} />}
          >

            <Meta title={<Link to={`${p.id}`}>{p.title}</Link>} description={<div>

              <p>Price: $ {p.price}</p>
              <p>{p.description.slice(0, 50)}</p>
              
            </div>} />
          </Card>
        </Col>)
      })}
    </Row>
  );
}

export default Products

