import * as React from 'react';
import { LanguageContext } from '../backbone/Language';
import { Row, Col } from 'reactstrap';
import { Card, CardBody, Title, Paragraph, Button, Badge } from '../components/elements/Card';

export interface GolfSlotState {
}

export interface GolfSlotProps {
    time: string;
    note: string;
    onSlotClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export class GolfSlot extends React.Component<GolfSlotProps, GolfSlotState> {
    constructor(props: GolfSlotProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { time, note, onSlotClick } = this.props;

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <Card maxWidth={500}>
                        <CardBody>
                            <Row>
                                <Col xs="2" className="no-padding">
                                    <Badge bgColor="#134D08" dimension={30} icon="iconic-signpost" />
                                </Col>
                                <Col xs="4" className="no-padding">
                                    <Title bold={900} size={18} transform="font-uppercase" >{time}</Title>
                                    <Paragraph size={11} bold={100}>{note}</Paragraph>
                                </Col>
                                <Col xs="6" className="flex-center flex-justify-end no-padding">
                                    <Button onClick={onSlotClick}>Boka in spelare</Button>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}
