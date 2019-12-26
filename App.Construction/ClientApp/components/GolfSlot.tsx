import * as React from 'react';
import { LanguageContext } from '../backbone/Language';
import { Row, Col } from 'reactstrap';
import * as App from 'pubsub-js';
import { Card, CardBody, Title, Paragraph, Button, Badge } from '../components/elements/Card';

import { ModalPopUp } from '../modals/ModalPopUp';

export interface Slot {
    isAllocated: boolean;
    userId?: string;
    userName: string;
}

export interface GolfSlotState {
}

export interface GolfSlotProps {
    id: string;
    time: string;
    note: string;
    onSlotClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export class GolfSlot extends React.Component<GolfSlotProps, GolfSlotState> {
    openModelPopUp: string;
    closeModelPopUp: string;
    slots: Slot[];

    constructor(props: GolfSlotProps) {
        super(props);

        this.state = {
        };

        this.onDetailClick = this.onDetailClick.bind(this);
        this.onModalSave = this.onModalSave.bind(this);

        this.slots = [];

        this.openModelPopUp = `openModelPopUp_${this.props.id}`;
        this.closeModelPopUp = `closeModelPopUp_${this.props.id}`;
    }

    private onDetailClick(event: React.MouseEvent<HTMLDivElement>) {
        App.publish(this.openModelPopUp, {});
    }

    private onModalSave() {
        App.publish(this.closeModelPopUp, {});
    }

    render() {
        const { time, note, onSlotClick } = this.props;

        let title: string = "Starttid på Örebro City Golf & CC - Gustavsviksbanan";

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <React.Fragment>
                        <Card maxWidth={500}>
                            <CardBody className='golf_body'>
                                <Row>
                                    <Col xs="2" className="no-padding">
                                        <Badge bgColor="#134D08" dimension={30} icon="iconic-signpost" />
                                    </Col>
                                    <Col xs="4" className="no-padding">
                                        <Title bold={900} size={18} transform="font-uppercase" >{time}</Title>
                                        <Paragraph size={11} bold={100}>{note}</Paragraph>
                                    </Col>
                                    <Col xs="6">
                                        <Row className="flex-center flex-justify-center no-padding">
                                            <Button size="font-sm" className="margin-bottom-20" onClick={onSlotClick}>Boka in spelare</Button>
                                            <Title bold={600} size="font-sm" style={{ cursor: 'pointer' }} transform="font-uppercase" onClick={this.onDetailClick} >visa detaljer</Title>
                                        </Row>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <ModalPopUp
                            modalOpen={this.openModelPopUp}
                            modalClose={this.closeModelPopUp}
                            onSave={this.onModalSave}
                            title={title}
                            isCancelButtonEnable={false}
                            okButtonLabel="Boka in spelare"
                            headerStyle={{ backgroundColor: 'green', color: 'white' }}
                        >
                            <Title bold={400} size={18} transform="font-none" >Title text goes here</Title>
                            <Title bold={900} size={18} transform="font-none" paddingTop="10px" paddingBottom="30px" >16:55</Title>
                            <Row className="margin-20-10" style={{ width: '80%' }}>
                                {
                                    this.slots.map(slot => {
                                        return (
                                            <Col className="flex-center flex-direction-column no-padding">
                                                <Badge bgColor={slot.isAllocated ? "#0075B2" : "#A2A2A2"} color={slot.isAllocated ? "#fff" : "#111"} dimension={25} icon="iconic-person-genderless" />
                                                <Title bold={400} size={10} paddingTop="10px" transform="font-none" >{slot.isAllocated ? slot.userName : "Not vailable"}</Title>
                                                {slot.isAllocated && <Title bold={400} size={10} paddingTop="10px" transform="font-none" >{slot.userName}</Title>}
                                            </Col>
                                        );
                                    })
                                }
                                <Col className="flex-center flex-direction-column no-padding">
                                    <Badge bgColor="#0075B2" dimension={25} icon="iconic-person-genderless" />
                                    <Title bold={400} size={10} paddingTop="10px" transform="font-none" >Name goes here</Title>
                                </Col>
                                <Col className="flex-center flex-direction-column no-padding">
                                    <Badge bgColor="#0075B2" dimension={25} icon="iconic-person-genderless" />
                                    <Title bold={400} size={10} paddingTop="10px" transform="font-none" >Name goes here</Title>
                                </Col>
                                <Col className="flex-center flex-direction-column no-padding">
                                    <Badge bgColor="#A2A2A2" color="#111" dimension={25} icon="iconic-person-genderless" />
                                </Col>
                                <Col className="flex-center flex-direction-column no-padding">
                                    <Badge bgColor="#A2A2A2" color="#111" dimension={25} icon="iconic-person-genderless" />
                                </Col>
                            </Row>
                            <Title bold={500} size={16} transform="font-none" paddingTop="30px" paddingBottom="20px" >Summary text goes here</Title>
                        </ModalPopUp>
                    </React.Fragment>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}
