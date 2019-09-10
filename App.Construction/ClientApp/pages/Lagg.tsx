import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Row, Col } from 'reactstrap';
import { LanguageContext, Language } from '../backbone/Language';
import { Title, Tab, TabItem, TabContent, TabPane, RadioGroup, RadioText, TimePicker, Editor, ToolTip, Spin, SpinType, BackdropType, DateTimePicker } from '../components/elements/Card';
import { Breadcrumb } from '../components/Breadcrumb';

interface LaggState {
    activeTab: number;
    activeValue?: number;
    text?: string;
    time?: string;
    loading: boolean;
    startDate: Date
}

export class Lagg extends React.Component<RouteComponentProps<{}>, LaggState> {
    intervalNumber: number;

    constructor(props: any) {
        super(props);

        this.state = {
            activeTab: 0,
            activeValue: undefined,
            time: undefined,
            loading: true,
            startDate: new Date()
        };

        this.setActiveTab = this.setActiveTab.bind(this);
        this.setActiveValue = this.setActiveValue.bind(this);
        this.setText = this.setText.bind(this);
        this.setTime = this.setTime.bind(this);
        this.timer = this.timer.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.intervalNumber = 0;
    }

    componentWillMount() {
        this.intervalNumber = setInterval(this.timer, 5000);
    }

    componentWillUnmount() {
    }

    public componentDidUpdate() {
    }

    private setActiveTab(tabIndex: number) {
        this.setState({ activeTab: tabIndex, loading: true });
        this.intervalNumber = setInterval(this.timer, 5000);
    }

    private setActiveValue(value: number) {
        this.setState({ activeValue: value });
    }

    private setText(text: string) {
        this.setState({ text: text });
    }

    private setTime(time: string | undefined) {
        this.setState({ time: time });
    }

    private timer() {
        console.log('timer');

        this.setState({
            loading: false
        });

        clearInterval(this.intervalNumber);
    }

    private handleChange(date: Date) {
        this.setState({
            startDate: date
        });
    };

    public render() {

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <div>
                        <Row>
                            <Col>
                                <Breadcrumb title='Lagg ut starttid fran 10:an'></Breadcrumb>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Tab>
                                    <TabItem tabId={0} name="Gustavsviksbanan" onClick={this.setActiveTab} activeTab={this.state.activeTab} />
                                    <TabItem tabId={1} name="Mosjobanan" onClick={this.setActiveTab} activeTab={this.state.activeTab} />
                                </Tab>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId={0}>
                                        <div>
                                            <Spin type={SpinType.Spin_folding_cube} backdropType={BackdropType.Window} loading={this.state.loading} />
                                            <Row className="padding-bottom-50 padding-top-50">
                                                <Col md="6">
                                                    <Row>
                                                        <Col xs="11" className="no-padding">
                                                            <Title color="#111" bold={700} size={16}
                                                                transform="font-none" >Antal lediga platser fran 10:an</Title>
                                                            <RadioGroup activeValue={this.state.activeValue} onChange={this.setActiveValue}>
                                                                <RadioText height={25} width={25} value={0}>4</RadioText>
                                                                <RadioText height={25} width={25} value={1}>3</RadioText>
                                                                <RadioText height={25} width={25} value={2}>2</RadioText>
                                                                <RadioText height={25} width={25} value={3}>1</RadioText>
                                                            </RadioGroup>
                                                        </Col>
                                                        <Col xs="1" className="no-padding flex-full-center">
                                                            <ToolTip bgColor="#D4D4D4" dimension={20} icon="iconic-question-mark">
                                                                This is a sample tooltip!
                                                            </ToolTip>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col md="6"></Col>
                                            </Row>
                                            <Row className="padding-bottom-50">
                                                <Col md="6">
                                                    <Row>
                                                        <Col xs="11" className="no-padding">
                                                            <DateTimePicker
                                                                selected={this.state.startDate}
                                                                onChange={this.handleChange}
                                                                showTimeSelect
                                                                timeFormat="HH:mm"
                                                                timeIntervals={15}
                                                                timeCaption="time"
                                                                dateFormat="MMMM d, yyyy h:mm aa"></DateTimePicker>
                                                        </Col>
                                                        <Col xs="1" className="no-padding flex-full-center">
                                                            <ToolTip bgColor="#D4D4D4" dimension={20} icon="iconic-question-mark">
                                                                This is a sample tooltip!
                                                            </ToolTip>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col md="6"></Col>
                                            </Row>
                                            <Row className="padding-bottom-50">
                                                <Col md="6">
                                                    <Row>
                                                        <Col xs="11" className="no-padding">
                                                            <TimePicker format='{time}' value={this.state.time} onChange={this.setTime} placeholder='Starttid fran 1:an'></TimePicker>
                                                        </Col>
                                                        <Col xs="1" className="no-padding flex-full-center">
                                                            <ToolTip bgColor="#D4D4D4" dimension={20} icon="iconic-question-mark">
                                                                This is a sample tooltip!
                                                            </ToolTip>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col md="6"></Col>
                                            </Row>
                                            <Row className="padding-bottom-50">
                                                <Col md="6">
                                                    <Row>
                                                        <Col xs="11" className="no-padding">
                                                            <Editor value={this.state.text} placeholder="Golf-id oa spelaren i bollen" onChange={this.setText}></Editor>
                                                        </Col>
                                                        <Col xs="1" className="no-padding flex-full-center">
                                                            <ToolTip bgColor="#D4D4D4" dimension={20} icon="iconic-question-mark">
                                                                This is a sample tooltip!
                                                            </ToolTip>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col md="6">
                                                    <Title color="#111" bold={400} size={11}
                                                        transform="font-none" >*Den angivna spelaren behover bekrafta tiden pa hal 9</Title>
                                                </Col>
                                            </Row>
                                        </div>
                                    </TabPane>
                                    <TabPane tabId={1}>
                                        <Spin type={SpinType.Spinner} loading={this.state.loading} />
                                    </TabPane>
                                </TabContent>
                            </Col>
                        </Row>
                    </div>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>;
    }
}
