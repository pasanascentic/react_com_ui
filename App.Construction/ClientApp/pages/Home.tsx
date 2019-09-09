import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Row, Col } from 'reactstrap';
import { LanguageContext, Language } from '../backbone/Language';
import { Title } from '../components/elements/Card';
import { GolfSlot } from '../components/GolfSlot';
import { Breadcrumb } from '../components/Breadcrumb';

interface OrganisationState {
}

export class Home extends React.Component<RouteComponentProps<{}>, OrganisationState> {
    constructor(props: any) {
        super(props);

        this.state = {
        };

    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    public componentDidUpdate() {
    }

    public render() {

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <div>
                        <Row>
                            <Col>
                                <Breadcrumb title='Starttider fran hal #10'></Breadcrumb>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Title color="#717171" bold={700} size={20}
                                    paddingTop='40px'
                                    paddingBottom='30px'
                                    paddingLeft='50px'
                                    transform="font-capitalize" >Mosjobanan</Title>
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                                <GolfSlot time="14.55" note="this is a sample paragraph.you can write any text here 2019." onSlotClick={() => console.log('One')} />
                                <GolfSlot time="14.55" note="this is a sample paragraph.you can write any text here 2019." onSlotClick={() => console.log('two')} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Title color="#717171" bold={700} size={20}
                                    paddingTop='40px'
                                    paddingBottom='30px'
                                    paddingLeft='50px'
                                    transform="font-capitalize" >Gustavsviksbanan</Title>
                            </Col>
                        </Row>
                    </div>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>;
    }
}
