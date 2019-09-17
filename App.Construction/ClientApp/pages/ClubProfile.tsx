import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Row, Col } from 'reactstrap';
import { LanguageContext, Language } from '../backbone/Language';
import { Title, Button, Badge, CardBody, CardTitle, CardText, ToolTip, Text, Checkbox } from '../components/elements/Card';
import { Tile } from '../components/Tile';
import { Widget } from '../components/Widget';

interface ClubProfileState {
    goal1?: boolean;
    goal2?: boolean;
    goal3?: boolean;
}

export class ClubProfile extends React.Component<RouteComponentProps<{}>, ClubProfileState> {
    constructor(props: any) {
        super(props);

        this.state = {
            goal1: false,
            goal2: false,
            goal3: false
        };

        this.setGoal = this.setGoal.bind(this);
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    private setGoal(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ [event.target.name]: event.target.checked });
    }

    public render() {
        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <div>
                        <Row>
                            <Col>
                                <Title color="#DDD" bold={700} size={16}
                                    paddingLeft="20px"
                                    paddingTop="40px"
                                    transform="font-uppercase">profil</Title>
                                <Title color="#111" bold={700} size={20}
                                    paddingLeft="20px">ÖREBRO City</Title>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Title color="#9B9B9B" bold={700} size={16}
                                    paddingLeft="20px"
                                    paddingTop="20px"
                                    paddingBottom="20px"
                                    transform="font-none">Användare på klubben</Title>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6" lg="3" className='middle'>
                                <Tile maxWidth={300} title="Registrerade användare" counter="530" />
                            </Col>
                            <Col md="6" lg="3" className='middle'>
                                <Tile maxWidth={300} title="Användare idag" counter="41" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className='leftCenter'>
                                <Title color="#9B9B9B" bold={700} size={16}
                                    paddingLeft="20px"
                                    paddingTop="20px"
                                    paddingBottom="20px"
                                    paddingRight="20px"
                                    transform="font-none">Starttider från 10:an</Title>
                                <Button size={"font-xs"} height='fit-content' width='fit-content'
                                    transform="font-uppercase"
                                    paddingTop="5px"
                                    paddingBottom="5px">idag - filtrera</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6" lg="3" className='middle'>
                                <Tile maxWidth={250} title="Skapade starttider" counter="20" />
                            </Col>
                            <Col md="6" lg="3" className='middle'>
                                <Tile maxWidth={250} title="Bokade starttider" counter="5" />
                            </Col>
                            <Col md="6" lg="3" className='middle'>
                                <Tile maxWidth={250} title="uppskattat värde" tooltip="Detta är ett verktygstips" counter="450 kr" />
                            </Col>
                            <Col md="6" lg="3" className='middle'>
                                <Tile maxWidth={250} title="uppskattat värde - långsiktigt" titleFontSize={13} counter="1350 kr" />
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6" lg="4">
                                <Row className='topLeft no-margin'>
                                    <Title color="#9B9B9B" bold={700} size={16}
                                        paddingLeft="20px"
                                        paddingTop="20px"
                                        paddingBottom="20px"
                                        paddingRight="20px"
                                        transform="font-none">Förväntad utvecklingskurva</Title>
                                </Row>
                                <Row className='middle'>
                                    <Widget>
                                        förväntad utvecklingskurva widget
                                    </Widget>
                                </Row>
                            </Col>
                            <Col md="6" lg="4">
                                <Row className='topLeft no-margin'>
                                    <Title color="#9B9B9B" bold={700} size={16}
                                        paddingLeft="20px"
                                        paddingTop="20px"
                                        paddingBottom="20px"
                                        paddingRight="20px"
                                        transform="font-none">Mål</Title>
                                </Row>
                                <Row className='middle'>
                                    <Widget>
                                        <Row className="margin-bottom-10">
                                            <Col className="flex-center" xs="11">
                                                <Text bold={400} size={11} color="#464646" className="no-margin">
                                                    5% av golfklubbmedlemmar registrerade
                                                </Text>
                                            </Col>
                                            <Col className="flex-center no-padding" xs="1">
                                                <Checkbox name="goal1" onChange={this.setGoal} active={this.state.goal1} ></Checkbox>
                                            </Col>
                                        </Row>
                                        <Row className="margin-bottom-10">
                                            <Col className="flex-center" xs="11">
                                                <Text bold={400} size={11} color="#464646" className="no-margin">
                                                    7% av golfklubbmedlemmar registrerade
                                                </Text>
                                            </Col>
                                            <Col className="flex-center no-padding" xs="1">
                                                <Checkbox name="goal2" onChange={this.setGoal} active={this.state.goal2} ></Checkbox>
                                            </Col>
                                        </Row>
                                        <Row className="margin-bottom-10">
                                            <Col className="flex-center" xs="11">
                                                <Text bold={400} size={11} color="#464646" className="no-margin">
                                                    3 greenfee intäkter genom Sista Nio
                                                </Text>
                                            </Col>
                                            <Col className="flex-center no-padding" xs="1">
                                                <Checkbox name="goal3" onChange={this.setGoal} active={this.state.goal3} ></Checkbox>
                                            </Col>
                                        </Row>
                                    </Widget>
                                </Row>
                            </Col>
                            <Col md="6" lg="4">
                                <Row className='topLeft no-margin'>
                                    <Title color="#9B9B9B" bold={700} size={16}
                                        paddingLeft="20px"
                                        paddingTop="20px"
                                        paddingBottom="20px"
                                        paddingRight="20px"
                                        transform="font-none">Uppgradering</Title>
                                </Row>
                                <Row className='middle'>
                                    <Widget bgColor='#0275B2'>
                                        <Row className="margin-bottom-10">
                                            <Col>
                                                <Text bold={700} size={15} color="#fff" transform="font-uppercase">
                                                    uppgradera för att skapa och boka fler startplatser från den 10: e, se spelarnas position på de första nio och mycket mer ...
                                                </Text>
                                            </Col>
                                        </Row>
                                        <Row >
                                            <Col>
                                                <Button
                                                    width="100%"
                                                    size="font-sm"
                                                    textAlign="middle"
                                                    bold={700}
                                                    transform="font-uppercase"
                                                    style="secondary">
                                                    se vårt paket
                                                    </Button>
                                            </Col>
                                        </Row>
                                    </Widget>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Title color="#111" bold={900} size={30}
                                    paddingLeft="20px"
                                    paddingTop="20px"
                                    paddingBottom="20px"
                                    transform="font-none">
                                    Kvar att göra</Title>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='middle'>
                                <Widget>
                                    <Row className="no-margin padding-10">
                                        <Col xs="2" sm="2" lg="1" className="middle no-padding margin-bottom-10">
                                            <Badge bgColor="#134D08" dimension={30} icon="iconic-signpost" />
                                        </Col>
                                        <Col xs="10" sm="10" lg="5" className="flex-center margin-bottom-10" >
                                            <Text color="#111" bold={900} size={20} className="no-margin break-word">
                                                Nyhetsbrev till klubbmedlemmarna
                                            </Text>
                                        </Col>
                                        <Col sm="6" lg="3" className="flex-center no-padding margin-bottom-10">
                                            <Button
                                                width="100%"
                                                size={11}
                                                textAlign="middle"
                                                bold={600}
                                                transform="font-uppercase"
                                                style="primary">
                                                använd mall
                                                    </Button>
                                        </Col>
                                        <Col sm="6" lg="3" className="margin-bottom-10 middle" >
                                            <Text color="#111" bold={800} size={11} className="no-margin">
                                                Markera som klar&nbsp;&nbsp;
                                                <Badge bgColor="#FAD749" dimension={14} icon="iconic-check" />
                                            </Text>
                                        </Col>
                                    </Row>
                                    <Row className="no-margin padding-10">
                                        <Col xs="2" sm="2" lg="1" className="middle no-padding margin-bottom-10">
                                            <Badge bgColor="#134D08" dimension={30} icon="iconic-signpost" />
                                        </Col>
                                        <Col xs="10" sm="10" lg="5" className="flex-center margin-bottom-10" >
                                            <Text color="#111" bold={900} size={20} className="no-margin break-word">
                                                Nyhetsbrev till klubbmedlemmarna
                                            </Text>
                                        </Col>
                                        <Col sm="6" lg="3" className="flex-center no-padding margin-bottom-10">
                                            <Button
                                                width="100%"
                                                size={11}
                                                textAlign="middle"
                                                bold={600}
                                                transform="font-uppercase"
                                                style="primary">
                                                använd mall
                                                    </Button>
                                        </Col>
                                        <Col sm="6" lg="3" className="margin-bottom-10 middle" >
                                            <Text color="#111" bold={800} size={11} className="no-margin">
                                                Markera som klar&nbsp;&nbsp;
                                                <Badge bgColor="#FAD749" dimension={14} icon="iconic-check" />
                                            </Text>
                                        </Col>
                                    </Row>
                                    <Row className="no-margin padding-10">
                                        <Col xs="2" sm="2" lg="1" className="middle no-padding margin-bottom-10">
                                            <Badge bgColor="#134D08" dimension={30} icon="iconic-signpost" />
                                        </Col>
                                        <Col xs="10" sm="10" lg="5" className="flex-center margin-bottom-10" >
                                            <Text color="#111" bold={900} size={20} className="no-margin break-word">
                                                Nyhetsbrev till klubbmedlemmarna
                                            </Text>
                                        </Col>
                                        <Col sm="6" lg="3" className="flex-center no-padding margin-bottom-10">
                                            <Button
                                                width="100%"
                                                size={11}
                                                textAlign="middle"
                                                bold={600}
                                                transform="font-uppercase"
                                                style="primary">
                                                använd mall
                                                    </Button>
                                        </Col>
                                        <Col sm="6" lg="3" className="margin-bottom-10 middle" >
                                            <Text color="#111" bold={800} size={11} className="no-margin">
                                                Markera som klar&nbsp;&nbsp;
                                                <Badge bgColor="#FAD749" dimension={14} icon="iconic-check" />
                                            </Text>
                                        </Col>
                                    </Row>
                                </Widget>
                            </Col>
                        </Row>
                    </div>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>;
    }
}
