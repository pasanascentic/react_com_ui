import * as React from 'react';
import { LanguageContext } from '../backbone/Language';
import { Row, Col } from 'reactstrap';
import { Card, CardBody, CardTitle, CardText, ToolTip } from './elements/Card';
import { max } from 'date-fns';

export interface WidgetState {
}

export interface WidgetProps {
    width?: number;
    maxWidth?: number;
    minWidth?: number;
    bgColor?: string;
    className?: string;
}

export class Widget extends React.Component<WidgetProps, WidgetState> {
    constructor(props: WidgetProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { width, maxWidth, minWidth, bgColor, className } = this.props;

        let combindClassName = className ? className + ' margin-0-20' : 'margin-0-20';

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <Card className={combindClassName} width={width} maxWidth={maxWidth} minWidth={minWidth} bgColor={bgColor} >
                        <CardBody className='margin-40-10'>
                            {this.props.children}
                        </CardBody>
                    </Card>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}
