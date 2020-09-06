import React, {Component} from "react";
import './ConversionPage.scss';
import {Container, Row} from "react-bootstrap";

class ConversionPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className={'main-container'} fluid>
                <Row>
                    <div className={'conversion-wrapper'}>
                        <span className={'thanks'}>GRACIAS</span>
                        <span className={'thanks-message'}>SU CONSULTA SE HA ENVIADO CORRECTAMENTE, EN BREVE LE RESPONDEREMOS</span>
                        <button>VOLVER</button>
                    </div>
                </Row>
            </Container>
        )
    }
}

export default ConversionPage;
