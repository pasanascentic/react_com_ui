import * as React from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label } from "reactstrap";
import { LanguageContext } from '../backbone/Language';
import { TopNavbar } from '../components/TopNavbar';

export interface LayoutProps {
    children?: React.ReactNode;
}

export interface LayoutState {
}

export class Layout extends React.Component<LayoutProps, LayoutState> {
    constructor(props: LayoutProps) {
        super(props);

        this.state = {
        };
    }

    public componentDidMount() {
    }

    public componentWillUnmount() {
    }

    public render() {
        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <div>
                        <Container fluid={true} className='no-padding' >
                            <TopNavbar>
                            </TopNavbar>
                            <Row style={{ margin: 0 }}>
                                <Col style={{ marginLeft: '35px', marginRight: '35px', paddingTop: '10px' }} >
                                    {this.props.children}
                                </Col>
                            </Row>
                        </Container>
                    </div>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>;
    }
}
