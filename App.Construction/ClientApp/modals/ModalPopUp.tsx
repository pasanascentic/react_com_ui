import * as React from 'react';
import { Link } from 'react-router-dom';
import * as App from 'pubsub-js';

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ContentAlign, Button, Paragraph } from '../components/elements/Card';

export interface ModalPopUpState {
    modal: boolean;
    isShowLoader?: boolean;
}

export interface ModalPopUpProps {
    onClosed?: (() => void),
    onSave?: (() => void),
    title: string,
    modalOpen?: string,
    modalClose?: string,
    modalSave?: string,
    isCancelButtonEnable?: boolean,
    cancelButtonLabel?: string,
    okButtonLabel?: string,
    contentAlign?: ContentAlign,
    headerStyle?: React.CSSProperties | undefined,
    bodyStyle?: React.CSSProperties | undefined,
    footerStyle?: React.CSSProperties | undefined,
}

export class ModalPopUp extends React.Component<ModalPopUpProps, ModalPopUpState> {
    public static defaultProps = {
        isCancelButtonEnable: true,
        contentAlign: 'middle'
    };

    constructor(props: ModalPopUpProps) {
        super(props);

        this.state = {
            modal: false,
            isShowLoader: undefined
        };

        this.close = this.close.bind(this);
        this.showHideLoader = this.showHideLoader.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.save = this.save.bind(this);
    }

    public componentDidMount() {
        App.subscribe(this.props.modalOpen, this.openModal.bind(this));
        App.subscribe(this.props.modalClose, this.closeModal.bind(this));
        App.subscribe('isShowModalLoader', this.showHideLoader);
    }

    public componentWillUnmount() {
        App.unsubscribe(this.openModal.bind(this));
        App.unsubscribe(this.closeModal.bind(this));
        App.unsubscribe('isShowModalLoader');
    }

    private showHideLoader = (msg: string, data: boolean) => {
        this.setState({ isShowLoader: data });
    }

    openModal() {
        this.setState({
            modal: true
        });
    }

    closeModal() {
        this.setState({
            modal: false
        });
    }

    close = () => {
        this.setState({
            modal: false
        });

        if (this.props.onClosed) {
            this.props.onClosed();
        }
    }

    save = () => {
        App.publish(this.props.modalSave, {});
        if (this.props.onSave) {
            this.props.onSave();
        } else {
            this.setState({
                modal: false
            });
        }
    }

    render() {
        const { contentAlign, okButtonLabel, isCancelButtonEnable, cancelButtonLabel, title, headerStyle, bodyStyle, footerStyle } = this.props;
        console.log(title);
        return (
            <React.Fragment>
                <Modal isOpen={this.state.modal} toggle={this.close} >
                    <ModalHeader toggle={this.close} style={headerStyle}>{title}</ModalHeader>
                    <ModalBody className={contentAlign + ' flex-direction-column'} style={bodyStyle}>
                        <Paragraph size={11} bold={100} >{title}</Paragraph>
                        {
                            this.state.isShowLoader && this.state.isShowLoader == true &&
                            <div className="page-content-loader">
                                <p>Loading...</p>
                            </div>
                        }
                        {
                            !this.state.isShowLoader && this.props.children
                        }
                    </ModalBody>
                    <ModalFooter className={contentAlign + ' flex-direction-column'} style={footerStyle}>
                        <Button color="primary" size="font-sm" onClick={this.save}>{okButtonLabel}</Button>
                        {' '}
                        {
                            isCancelButtonEnable &&
                            <Button color="secondary" className="btn-pill" onClick={this.close}>{cancelButtonLabel}</Button>
                        }
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}
