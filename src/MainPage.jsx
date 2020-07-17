import React, {Component} from "react";
import './MainPage.scss'
import {Container, Row, Col, Image, Button} from "react-bootstrap";
import {Icon} from "react-icons-kit";
import {whatsapp, phone} from 'react-icons-kit/fa';
import {
    ic_move_to_inbox,
    ic_question_answer,
    ic_shopping_cart,
    ic_location_on,
    ic_local_shipping,
    ic_group,
    ic_store
} from 'react-icons-kit/md'
import logotype from './assets/logotipo_color.png';
import blackLogotype from './assets/logotipo_negro.png';
import emailjs from 'emailjs-com';

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: undefined,
            phone: undefined,
            email: undefined,
            comment: undefined
        }
    }

    scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({behavior: "smooth"});
    }

    disableSubmit = () => {
        return (this.state.name === undefined || this.state.name === '') ||
        (this.state.email === undefined || this.state.email === '') ||
        (this.state.phone === undefined || this.state.phone === '')
    }

    handleSubmit = () => {
        const templateParams = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            comment: this.state.comment ? this.state.comment : 'No ha enviado comentario',
        };
        emailjs.send('vulcan', 'vulcan_contact', templateParams, 'user_HuS7eIH3jKdOYfBr8M5Q5')
            .then((res) => {
                console.log('SUCCESS!', res.status, res.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    }

    render() {
        return (
            <Container className={'main-container'} fluid>
                <div className={'floating-buttons'}>
                    <button className={'phone-floating'}>
                        <Icon icon={phone} size={45}/>
                    </button>
                    <button className={'wpp-floating'}>
                        <Icon icon={whatsapp} size={45}/>
                    </button>
                </div>
                <Container className={'hero-container'} fluid>
                    <Container className={'hero-wrapper'} fluid>
                        <Row>
                            <Col className={'logotype-container'}>
                                <Image src={logotype} alt={''} fluid/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className={'hero-body'} md={6}>
                                <div className={'slogan-big'}>
                                    UNA TRADICIÓN QUE SE COMPARTE
                                </div>
                                <div className={'slogan-small'}>
                                    HORNOS Y FOGONEROS QUE NOS REÚNEN
                                </div>
                                <Button onClick={() => this.scrollToContact()}>CONTACTANOS</Button>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <Container className={'contact-us-container'} fluid id={'contact'}>
                    <Row>
                        <Col className={'contact-us-title'}>
                            <span>CONTACTANOS</span>
                        </Col>
                    </Row>
                    <div className={'form-wrapper'}>
                        <Row>
                            <Col className={'name'} md={5}>
                                <input placeholder={'Nombre'} onChange={(e) => this.setState({name: e.target.value})}/>
                            </Col>
                            <Col className={'phone'} md={2}>
                                <input placeholder={'Teléfono'} onChange={(e) => this.setState({phone: e.target.value})}/>
                            </Col>
                            <Col className={'email'} md={5}>
                                <input placeholder={'Email'} onChange={(e) => this.setState({email: e.target.value})}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className={'comment'}>
                                <textarea placeholder={'Comentarios'} onChange={(e) => this.setState({comment: e.target.value})}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className={'send-contact'}>
                                <Button disabled={this.disableSubmit()} onClick={() => this.handleSubmit()}>ENVIAR MI CONSULTA</Button>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <Container className={'buy-container'} fluid>
                    <Row>
                        <Col className={'buy-title'}>
                            <span>¿CÓMO COMPRO?</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={'steps'}>
                            <div className={'step'}>
                                <Icon icon={ic_move_to_inbox} size={100} style={{marginBottom: '30px'}}/>
                                <div className={'step-title'}>CONSULTANOS</div>
                                <div className={'step-description'}>Dejanos tus datos en el formulario o por Whatsapp
                                </div>
                            </div>
                            <div className={'step'}>
                                <Icon icon={ic_question_answer} size={100} style={{marginBottom: '30px'}}/>
                                <div className={'step-title'}>TE CONTACTAMOS</div>
                                <div className={'step-description'}>Respondemos tus consultas por chat o por teléfono en
                                    las 24 horas
                                </div>
                            </div>
                            <div className={'step'}>
                                <Icon icon={ic_shopping_cart} size={100} style={{marginBottom: '30px'}}/>
                                <div className={'step-title'}>COMPRÁS</div>
                                <div className={'step-description'}>Cerramos detalles, nos decís a donde te lo enviamos
                                    y hacés el pago
                                </div>
                            </div>
                            <div className={'step'}>
                                <Icon icon={ic_location_on} size={100} style={{marginBottom: '30px'}}/>
                                <div className={'step-title'}>LO RECIBÍS</div>
                                <div className={'step-description'}>Fabricamos tu pedido, lo despachamos y lo recibís en
                                    tu casa
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className={'why-us-container'} fluid>
                    <Row>
                        <Col className={'why-us-title'}>
                            <span>¿POR QUÉ ELEGIRNOS?</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={'pros'}>
                            <div className={'pro'}>
                                <Icon icon={ic_local_shipping} size={100} style={{marginBottom: '30px'}}/>
                                <div className={'step-title'}>ENVÍO GRATIS</div>
                                <div className={'step-description'}>Los envíos son 100% gratuitos en Buenos Aires</div>
                            </div>
                            <div className={'pro'}>
                                <Icon icon={ic_group} size={100} style={{marginBottom: '30px'}}/>
                                <div className={'step-title'}>ATENCIÓN</div>
                                <div className={'step-description'}>Te mantenemos notificado desde la fabricación hasta
                                    el despacho
                                </div>
                            </div>
                            <div className={'pro'}>
                                <Icon icon={ic_store} size={100} style={{marginBottom: '30px'}}/>
                                <div className={'step-title'}>FABRICACIÓN LOCAL</div>
                                <div className={'step-description'}>Fabricamos tu pedido, lo despachamos y lo recibís en
                                    tu casa
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={'to-contact-us'}>
                            <Button onClick={() => this.scrollToContact()}>CONSULTAR</Button>
                        </Col>
                    </Row>
                </Container>
                <Container className={'footer-container'} fluid>
                    <Row>
                        <Col className={'footer-logotype-container'}>
                            <Image src={blackLogotype} alt={''} fluid/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={'footer-rights'}>
                            <span>© 2020 Vulcal Fogoneros</span>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default MainPage;
