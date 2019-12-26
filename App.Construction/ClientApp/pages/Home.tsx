import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Row, Col } from 'reactstrap';
import { LanguageContext, Language } from '../backbone/Language';
import { Title, Alert, Button } from '../components/elements/Card';
import { GolfSlot } from '../components/GolfSlot';
import { Breadcrumb } from '../components/Breadcrumb';

interface OrganisationState {
    visible: boolean;
}

export class Home extends React.Component<RouteComponentProps<{}>, OrganisationState> {
    constructor(props: any) {
        super(props);

        this.state = {
            visible: true
        };

        this.setVisible = this.setVisible.bind(this);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    public componentDidUpdate() {
    }

    private setVisible(visible: boolean) {
        this.setState({ visible });
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
                                <GolfSlot id="1" time="14.55" note="Spelaren med Golf-Id 645876-123 är redan bokad på detta tillfälle." onSlotClick={() => console.log('One')} />
                                <GolfSlot id="2" time="14.55" note="한국어" onSlotClick={() => console.log('two')} />
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
                        <Row >
                            <Col>
                                <Alert color="warning" message="No Slots" description="This is a warning notice about copywriting." icon targetIcon='iconic-signpost'
                                    visible={this.state.visible}
                                    onClose={this.setVisible} />
                            </Col>
                        </Row>
                    </div>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>;
    }
}
