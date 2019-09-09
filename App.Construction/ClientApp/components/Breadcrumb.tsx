import * as React from 'react';
import { LanguageContext } from '../backbone/Language';
import { Title, Dash } from '../components/elements/Card';

export interface BreadcrumbState {
}

export interface BreadcrumbProps {
    title: string;
}

export class Breadcrumb extends React.Component<BreadcrumbProps, BreadcrumbState> {
    constructor(props: BreadcrumbProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { title } = this.props;

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <div>
                        <Dash top='45%' left='-35px' width={45} height={3} bgColor='#0275B2'></Dash>
                        <Title color="#111" bold={500} size={34}
                            paddingLeft='10px'
                            transform="font-capitalize" >{title}</Title>
                    </div>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}
