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
                    onClick={() => this.setState({ FirstActive: true }) & this.setState({ SecondActive: false }) & MudarLabel(hipotenusa)}
                    id="Radio">
                Hipotenusa</Button>
                <Button 
                    className="buttonbtn"
                    variant={this.state.SecondActive ? "secondary" : "outline-secondary"}
                    onClick={() => this.setState({ FirstActive: false}) & this.setState({ SecondActive: true}) & MudarLabel(cateto)}>
                Cateto</Button>
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
                    onMouseLeave={() => this.setState({ Hovered: false })}
                    onClick={Calculate}>
                Calcular</Button>
            </div>
        )
    }
}

function Respostas() {
    return (
        <div id="respostas-container">
            <h4 id="resp1"></h4>
            <h4 id="resp2"></h4>
            <h4 id="resp3"></h4>
            <h4 id="resp4"></h4>
            <h4 id="resp5"></h4>
            <h4 id="resp6"></h4>
            <h4 id="resp7"></h4>
        </div>
    )
}

function App() {
    return (
        <div>
            <Helmet>
                <title>Teorema de Pitágoras</title>
                <link rel="shortcut icon" href="https://image.winudf.com/v2/image1/Y29tLmluaXR6ZXJfZGV2LnRlb3JlbWFQaXRhZ29yYXNfaWNvbl8xNTQxMTAxMDU5XzA0Ng/icon.png?w=170&fakeurl=1" type="image/x-icon"/>
            </Helmet>
            <Container>
                <Row className="RowInp">
                    <Col xs={6} md={4}><h3 id="lbl1">Primeiro Cateto:</h3></Col>
                    <Col xs={12} md={8}><input type="number" id="Num1"/></Col>
                </Row>
                <Row className="RowInp">
                    <Col xs={6} md={4}><h3 id="lbl2">Segundo Cateto:</h3></Col>
                    <Col className="SCol" xs={12} md={8}><input type="number" id="Num2"/></Col>
                </Row>
                <Row>
                    <Col className="TogCol"><ToggleButtons /></Col>
                    <Col className="SubCol"><ButtonSubmit /></Col>
                </Row>
                <Row>
                    <Respostas/>
                </Row>
            </Container>
        </div>
    )
}

function MudarLabel(qual) {
    if (qual = hipotenusa) {
        document.getElementById('lbl1').innerHTML = 'Primeiro Cateto:';
        document.getElementById('lbl2').innerHTML = 'Segundo Cateto:';
    }
    else if (qual = cateto) {
        document.getElementById('lbl1').innerHTML = 'Hipotenusa:';
        document.getElementById('lbl2').innerHTML = 'Cateto:';
    }
}

function Calculate() {
    var first = document.getElementById('Num1').value;
    var second = document.getElementById('Num2').value;
    var HasClass = document.getElementById('Radio').classList.contains('secondary');
    if (!first & !second) {
        document.getElementById("Num1").placeholder = "Nenhum número digitado!";
        document.getElementById("Num2").placeholder = "Nenhum número digitado!";
    }
    else if (!first) {
        document.getElementById("Num1").placeholder = "Nenhum número digitado!";
    }
    else if (!second) {
        document.getElementById("Num2").placeholder = "Nenhum número digitado!";
    }
    else {
        if (HasClass = true) {
            document.getElementById('Num1').value = '';
            document.getElementById('Num2').value = '';
            // $('#resposta-container').append('<h4>A<sup>2</sup> = B<sup>2</sup> + C<sup>2</sup></h4>');
            document.getElementById('resp1').innerHTML = 'A<sup>2</sup> = B<sup>2</sup> + C<sup>2</sup>';

            // $('#resposta-container').append('<h4>A<sup>2</sup> = ' + first + '<sup>2</sup> + ' + second + '<sup>2</sup></h4>');
            document.getElementById('resp2').innerHTML = 'A<sup>2</sup> = ' + first + '<sup>2</sup> + ' + second + '<sup>2</sup>';

            // $('#resposta-container').append('<h4>A<sup>2</sup> = ' + fsqr + ' + ' + ssqr + '</h4>');
            document.getElementById('resp3').innerHTML = 'A<sup>2</sup> = ' + Math.pow(first, 2) + ' + ' + Math.pow(second, 2);

            var soma = parseInt(Math.pow(first, 2)) + parseInt(Math.pow(second, 2))
            // $('#resposta-container').append('<h4>A<sup>2</sup> = ' + soma + '</h4>');
            document.getElementById('resp4').innerHTML = 'A<sup>2</sup> = ' + soma;

            // $('#resposta-container').append('<h4>A = √' + soma + '</h4>');
            document.getElementById('resp5').innerHTML = 'A = √' + soma;

            // $('#resposta-container').append('<h3> A = ' + h + '</h3>');
            document.getElementById('resp6').innerHTML = 'A = ' + Math.sqrt(soma);
        }
        else {
            document.getElementById('Num1').value = '';
            document.getElementById('Num2').value = '';
            // $('#resposta').append('<div class="resposta-container"></div>');
            // $('#resposta-container').append('<h4>A<sup>2</sup> = B<sup>2</sup> + C<sup>2</sup></h4>');
            // $('#resposta-container').append('<h4>' + first + '<sup>2</sup> = ' + second + '<sup>2</sup>' + '+ C<sup>2</sup></h4>');
            // var fsqr = Math.pow(first);
            // var ssqr = Math.pow(second);
            // $('#resposta-container').append('<h4>' + fsqr + ' = ' + ssqr + ' + C<sup>2</sup></h4>');
            // $('#resposta-container').append('<h4>C<sup>2</sup> = ' + fsqr + ' - ' + ssqr + '</h4>');
            // var subtração = fsqr - ssqr;
            // $('#resposta-container').append('<h4>C<sup>2</sup> = ' + subtração + '</h4>');
            // $('#resposta-container').append('<h4>A = √' + subtração + '</h4>');
            // var c = Math.sqrt(Math.pow(first) - Math.pow(second));
            // $('#resposta-container').append('<h3> A = ' + c + '</h3>');
        }
    }
}

export default App