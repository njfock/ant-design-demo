import React from 'react';
import {Row, Col, Typography, Button} from 'antd';
import {MinusOutlined, PlusOutlined} from '@ant-design/icons';
import {connect} from 'react-redux'
const Counter = ({counter, increment, decrement}) => {
    return(
        <React.Fragment>
            <Row>
                <Typography.Title>Contador</Typography.Title>
            </Row>
            <Row>
                <Col md={9}/>
                <Col md={2}>
                    <Button size="large" icon={<MinusOutlined/>} shape="circle" onClick={decrement}/>
                </Col>
                <Col md={2}>
                    <span style={{fontSize:'2rem', fontWeight:'bold'}}>{counter}</span>
                </Col>
                <Col md={2}>
                    <Button size="large" icon={<PlusOutlined/>} shape="circle" onClick={increment}/>
                </Col>
                <Col md={9}/>
            </Row>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({counter: state.counter})

const mapDispatchToProps = dispatch => ({
    increment: () => {dispatch({type: 'INCREMENT'})},
    decrement: () => {dispatch({type: 'DECREMENT'})}
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)