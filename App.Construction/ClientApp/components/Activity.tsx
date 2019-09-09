import * as React from 'react';
import { LanguageContext } from '../backbone/Language';

export interface ActivityState {
}

export interface ActivityProps {
}

export class Activity extends React.Component<ActivityProps, ActivityState> {
    constructor(props: ActivityProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <div>
                    </div>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}
