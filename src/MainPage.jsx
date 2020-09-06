import React, {Component} from "react";
import './MainPage.scss'
import {Container, Row, Col, Image, Button, Overlay} from "react-bootstrap";
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
import img1 from './assets/92017251_634185094088547_5174429634584968870_n.jpg';
import img2 from './assets/103300266_281518622893187_691887325705316298_n.jpg';
import img3 from './assets/lanin_cuadrado.jpg';
import Particles from "react-particles-js";

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: undefined,
            phone: undefined,
            email: undefined,
            comment: undefined,
            showP1: false,
            showP2: false,
            showP3: false
        };
        this.buttonRef1 = React.createRef();
        this.buttonRef2 = React.createRef();
        this.buttonRef3 = React.createRef();
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
                    <div className={'phone-floating'} onClick={() => window.open("tel:+5401141697397")}>
                        <Icon icon={phone} size={45} style={{color: "black"}}/>
                    </div>
                    <div className={'wpp-floating'} onClick={() => window.open("")}>
                        <Icon icon={whatsapp} size={45}/>
                    </div>
                </div>
                <Container className={'hero-container'} fluid>
                    <Particles
                        style={{position: 'absolute'}}
                        params={{
                            "particles": {
                                "number": {
                                    "value": 50,
                                    "density": {
                                        "enable": true,
                                        "value_area": 800
                                    }
                                },
                                "color": {
                                    "value": "#ffa400"
                                },
                                "shape": {
                                    "type": "circle",
                                    "stroke": {
                                        "width": 0.5,
                                        "color": "#ffb700"
                                    },
                                    "polygon": {
                                        "nb_sides": 5
                                    },
                                    "image": {
                                        "src": "img/github.svg",
                                        "width": 100,
                                        "height": 100
                                    }
                                },
                                "opacity": {
                                    "value": 1,
                                    "random": false,
                                    "anim": {
                                        "enable": false,
                                        "speed": 1,
                                        "opacity_min": 0.1,
                                        "sync": false
                                    }
                                },
                                "size": {
                                    "value": 2,
                                    "random": false,
                                    "anim": {
                                        "enable": true,
                                        "speed": 10,
                                        "size_min": 0.5,
                                        "sync": false
                                    }
                                },
                                "line_linked": {
                                    "enable": false,
                                    "distance": 157.82952832645452,
                                    "color": "#ffffff",
                                    "opacity": 0.4,
                                    "width": 1
                                },
                                "move": {
                                    "enable": true,
                                    "speed": 10,
                                    "direction": "top-right",
                                    "random": false,
                                    "straight": false,
                                    "out_mode": "out",
                                    "bounce": false,
                                    "attract": {
                                        "enable": false,
                                        "rotateX": 600,
                                        "rotateY": 1200
                                    }
                                }
                            },
                            "interactivity": {
                                "detect_on": "canvas",
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                    },
                                    "onclick": {
                                        "enable": false,
                                        "mode": "bubble"
                                    },
                                    "resize": true
                                },
                                "modes": {
                                    "grab": {
                                        "distance": 179.82017982017982,
                                        "line_linked": {
                                            "opacity": 0.3561858966575193
                                        }
                                    },
                                    "bubble": {
                                        "distance": 255.80432187492372,
                                        "size": 12.181158184520177,
                                        "duration": 0.24362316369040352,
                                        "opacity": 1,
                                        "speed": 3
                                    },
                                    "repulse": {
                                        "distance": 100,
                                        "duration": 0.4
                                    },
                                    "push": {
                                        "particles_nb": 4
                                    },
                                    "remove": {
                                        "particles_nb": 2
                                    }
                                }
                            },
                            "retina_detect": true
                        }}
                    />
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
                <Container className={'products-container'} fluid>
                    <Row>
                        <Col className={'products-title'}>
                            <span>MODELOS</span>
                        </Col>
                    </Row>
                    <div className={'products-wrapper'}>
                        <Row>
                            <Col className={'product-container'}>
                                <div className={'product'}>
                                    <div className={'product-name'}>
                                        <span className={'name'}>CHAITÉN</span>
                                        <span className={'description'}>HORNO PIZZERO</span>
                                    </div>
                                    <div className={'product-image'}>
                                        <Image src={img1}/>
                                    </div>
                                    <div className={'more-details'}>
                                        <button
                                            onClick={() => this.setState({showP1: !this.state.showP1})}
                                            ref={this.buttonRef1}
                                        >
                                            MÁS INFORMACIÓN
                                        </button>
                                        <Overlay target={this.buttonRef1.current} show={this.state.showP1}
                                                 placement="top">
                                            {({placement, arrowProps, show: _show, popper, ...props}) => (
                                                <div
                                                    {...props}
                                                    style={{
                                                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                                        color: 'white',
                                                        borderRadius: 0,
                                                        height: 440,
                                                        width: 380,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'center',
                                                        paddingLeft: 50,
                                                        fontSize: 30,
                                                        ...props.style,
                                                    }}
                                                >
                                                    <div>
                                                        <span style={{
                                                            fontFamily: 'Manufaktur-Bold, sans-serif',
                                                            marginRight: 10
                                                        }}>
                                                            DIÁMETRO:
                                                        </span>
                                                        <span style={{fontFamily: 'Manufaktur-Medium, sans-serif'}}>
                                                            1 M
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span style={{
                                                            fontFamily: 'Manufaktur-Bold, sans-serif',
                                                            marginRight: 10
                                                        }}>
                                                            PESO:
                                                        </span>
                                                        <span style={{fontFamily: 'Manufaktur-Medium, sans-serif'}}>
                                                            80 KG
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span style={{
                                                            fontFamily: 'Manufaktur-Bold, sans-serif',
                                                            marginRight: 10
                                                        }}>
                                                            ALTURA:
                                                        </span>
                                                        <span style={{fontFamily: 'Manufaktur-Medium, sans-serif'}}>
                                                            50 CM
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span style={{
                                                            fontFamily: 'Manufaktur-Bold, sans-serif',
                                                            marginRight: 10
                                                        }}>
                                                            ESPESOR:
                                                        </span>
                                                        <span style={{fontFamily: 'Manufaktur-Medium, sans-serif'}}>
                                                            50 CM
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span style={{
                                                            fontFamily: 'Manufaktur-Bold, sans-serif',
                                                            marginRight: 10
                                                        }}>
                                                            MATERIAL:
                                                        </span>
                                                        <span style={{fontFamily: 'Manufaktur-Medium, sans-serif'}}>
                                                            HIERRO
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                        </Overlay>
                                    </div>
                                </div>
                            </Col>
                            <Col className={'product-container'}>
                                <div className={'product'}>
                                    <div className={'product-name'}>
                                        <span className={'name'}>LANÍN</span>
                                        <span className={'description'}>FOGONERO</span>
                                    </div>
                                    <div className={'product-image'}>
                                        <Image src={img2}/>
                                    </div>
                                    <div className={'more-details'}>
                                        <button
                                            onClick={() => this.setState({showP2: !this.state.showP2})}
                                            ref={this.buttonRef2}
                                        >
                                            MÁS INFORMACIÓN
                                        </button>
                                        <Overlay target={this.buttonRef2.current} show={this.state.showP2}
                                                 placement="top">
                                            {({placement, arrowProps, show: _show, popper, ...props}) => (
                                                <div
                                                    {...props}
                                                    style={{
                                                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                                        padding: '2px 10px',
                                                        color: 'white',
                                                        borderRadius: 0,
                                                        height: 440,
                                                        width: 380,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'center',
                                                        paddingLeft: 50,
                                                        fontFamily: 'Manufaktur-Medium, sans-serif',
                                                        fontSize: 30,
                                                        ...props.style,
                                                    }}
                                                >
                                                    <div>
                                                        <span style={{
                                                            fontFamily: 'Manufaktur-Bold, sans-serif',
                                                            marginRight: 10
                                                        }}>
                                                            DIÁMETRO:
                                                        </span>
                                                        <span style={{fontFamily: 'Manufaktur-Medium, sans-serif'}}>
                                                            1 M
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span style={{
                                                            fontFamily: 'Manufaktur-Bold, sans-serif',
                                                            marginRight: 10
                                                        }}>
                                                            PESO:
                                                        </span>
                                                        <span style={{fontFamily: 'Manufaktur-Medium, sans-serif'}}>
                                                            80 KG
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span style={{
                                                            fontFamily: 'Manufaktur-Bold, sans-serif',
                                                            marginRight: 10
                                                        }}>
                                                            ALTURA:
                                                        </span>
                                                        <span style={{fontFamily: 'Manufaktur-Medium, sans-serif'}}>
                                                            50 CM
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span style={{
                                                            fontFamily: 'Manufaktur-Bold, sans-serif',
                                                            marginRight: 10
                                                        }}>
                                                            ESPESOR:
                                                        </span>
                                                        <span style={{fontFamily: 'Manufaktur-Medium, sans-serif'}}>
                                                            50 CM
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span style={{
                                                            fontFamily: 'Manufaktur-Bold, sans-serif',
                                                            marginRight: 10
                                                        }}>
                                                            MATERIAL:
                                                        </span>
                                                        <span style={{fontFamily: 'Manufaktur-Medium, sans-serif'}}>
                                                            HIERRO
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                        </Overlay>
                                    </div>
                                </div>
                            </Col>
                            <Col className={'product-container'}>
                                <div className={'product'}>
                                    <div className={'product-name'}>
                                        <span className={'name'}>TAMBORA</span>
                                        <span className={'description'}>FOGONERO</span>
                                    </div>
                                    <div className={'product-image'}>
                                        <Image src={img3}/>
                                    </div>
                                    <div className={'more-details'}>
                                        <button
                                            onClick={() => this.setState({showP3: !this.state.showP3})}
                                            ref={this.buttonRef3}
                                        >
                                            MÁS INFORMACIÓN
                                        </button>
                                        <Overlay target={this.buttonRef3.current} show={this.state.showP3}
                                                 placement="top">
                                            {({placement, arrowProps, show: _show, popper, ...props}) => (
                                                <div
                                                    {...props}
                                                    style={{
                                                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                                        padding: '2px 10px',
                                                        color: 'white',
                                                        borderRadius: 0,
                                                        height: 440,
                                                        width: 380,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'center',
                                                        paddingLeft: 50,
                                                        fontFamily: 'Manufaktur-Medium, sans-serif',
                                                        fontSize: 30,
                                                        ...props.style,
                                                    }}
                                                >
                                                    <div>
                                                        <span style={{
                                                            fontFamily: 'Manufaktur-Bold, sans-serif',
                                                            marginRight: 10
                                                        }}>
                                                            DIÁMETRO:
                                                        </span>
                                                        <span style={{fontFamily: 'Manufaktur-Medium, sans-serif'}}>
                                                            1 M
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span style={{
                                                            fontFamily: 'Manufaktur-Bold, sans-serif',
                                                            marginRight: 10
                                                        }}>
                                                            PESO:
                                                        </span>
                                                        <span style={{fontFamily: 'Manufaktur-Medium, sans-serif'}}>
                                                            80 KG
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span style={{
                                                            fontFamily: 'Manufaktur-Bold, sans-serif',
                                                            marginRight: 10
                                                        }}>
                                                            ALTURA:
                                                        </span>
                                                        <span style={{fontFamily: 'Manufaktur-Medium, sans-serif'}}>
                                                            50 CM
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span style={{
                                                            fontFamily: 'Manufaktur-Bold, sans-serif',
                                                            marginRight: 10
                                                        }}>
                                                            ESPESOR:
                                                        </span>
                                                        <span style={{fontFamily: 'Manufaktur-Medium, sans-serif'}}>
                                                            50 CM
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span style={{
                                                            fontFamily: 'Manufaktur-Bold, sans-serif',
                                                            marginRight: 10
                                                        }}>
                                                            MATERIAL:
                                                        </span>
                                                        <span style={{fontFamily: 'Manufaktur-Medium, sans-serif'}}>
                                                            HIERRO
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                        </Overlay>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
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
                                <input placeholder={'Teléfono'}
                                       onChange={(e) => this.setState({phone: e.target.value})}/>
                            </Col>
                            <Col className={'email'} md={5}>
                                <input placeholder={'Email'} onChange={(e) => this.setState({email: e.target.value})}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className={'comment'}>
                                <textarea placeholder={'Comentarios'}
                                          onChange={(e) => this.setState({comment: e.target.value})}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className={'send-contact'}>
                                <Button disabled={this.disableSubmit()} onClick={() => this.handleSubmit()}>ENVIAR MI
                                    CONSULTA</Button>
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
