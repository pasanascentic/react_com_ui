import * as React from 'react';
import { LanguageContext } from '../backbone/Language';
import { Row, Col } from 'reactstrap';
import { Card, CardBody, CardTitle, CardText, ToolTip } from './elements/Card';
import { max } from 'date-fns';

export interface TileState {
}

export interface TileProps {
    width?: number;
    maxWidth?: number;
    minWidth?: number;
    title: string;
    titleFontSize?: number;
    counter: string;
    counterFontSize?: number;
    tooltip?: string;
    bgColor?: string;
}

export class Tile extends React.Component<TileProps, TileState> {
    constructor(props: TileProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { width, maxWidth, minWidth, tooltip, counterFontSize, counter, bgColor } = this.props;

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <Card width={width} maxWidth={maxWidth} minWidth={minWidth} bgColor={bgColor} >
                        <CardBody className='margin-20-10'>
                            {tooltip &&
                                <Row>
                                    <Col xs="11" className="no-padding">
                                        {this.renderTitle()}
                                    </Col>
                                    <Col xs="1" className="no-padding flex-full-center">
                                        <ToolTip bgColor="#D4D4D4" dimension={20} icon="iconic-question-mark">
                                            This is a sample tooltip!
                                    </ToolTip>
                                    </Col>
                                </Row>

                            }
                            {!tooltip && this.renderTitle()}
                            <CardText bold={900} size={counterFontSize ? counterFontSize : 26} color="#111" textAlign='middle' height={50}>{counter}</CardText>
                        </CardBody>
                    </Card>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }

    public renderTitle() {
        let { titleFontSize, title } = this.props;
        return (
            <CardTitle bold={500} size={titleFontSize ? titleFontSize : 16} color="#9B9B9B" >{title}</CardTitle>
        );
    }
}
