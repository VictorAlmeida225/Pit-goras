import React from 'react';
import Helmet from 'react-helmet';
import { Button, Col, Row, Container, Modal } from 'react-bootstrap';

class ToggleButtons extends React.Component {
    state = {
        FirstActive: true,
        SecondActive: false,
    }
    render() {
        return (
            <div>
                <Button 
                    className="buttonbtn"
                    variant={this.state.FirstActive ? "secondary" : "outline-secondary"}
                    onClick={() => this.setState({ FirstActive: true}) & this.setState({ SecondActive: false})}>
                First</Button>
                <Button 
                    className="buttonbtn"
                    variant={this.state.SecondActive ? "secondary" : "outline-secondary"}
                    onClick={() => this.setState({ FirstActive: false}) & this.setState({ SecondActive: true})}>
                Second</Button>
            </div>
        );
    }
}

class ButtonSubmit extends React.Component {
    state = {
        Hovered: false,
    }

    render() {
        return (
            <div>
                <Button 
                    className="buttonbtn"
                    variant={this.state.Hovered ? "primary" : "outline-primary"}
                    onMouseEnter={() => this.setState({ Hovered: true })}
                    onMouseLeave={() => this.setState({ Hovered: false })}>
                Calcular</Button>
            </div>
        )
    }
}
function App() {
    return (
        <div>
            <Helmet>
                <title>Teorema de Pitágoras</title>
                <link rel="shortcut icon" href="https://image.winudf.com/v2/image1/Y29tLmluaXR6ZXJfZGV2LnRlb3JlbWFQaXRhZ29yYXNfaWNvbl8xNTQxMTAxMDU5XzA0Ng/icon.png?w=170&fakeurl=1" type="image/x-icon"/>
            </Helmet>
            <Container>
                <Row>
                    <Col xs={6} md={4}><h3>Primeiro Cateto:</h3></Col>
                    <Col xs={12} md={8}><input type="number" /></Col>
                </Row>
                <Row>
                    <Col xs={6} md={4}><h3>Segundo Cateto:</h3></Col>
                    <Col xs={12} md={8}><input type="number" /></Col>
                </Row>
                <Row>
                    <Col className="TogCol"><ToggleButtons /></Col>
                    <Col className="SubCol"><ButtonSubmit /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default App