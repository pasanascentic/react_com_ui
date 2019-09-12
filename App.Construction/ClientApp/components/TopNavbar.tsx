import * as React from 'react';
import { LanguageContext, Language } from '../backbone/Language';
import { NavBar, NavBarBrand, NavWrapper, Nav, NavItem, Button, NavToggle } from '../components/elements/Card';

interface TopNavbarProps {
}

interface TopNavbarState {
}

export class TopNavbar extends React.Component<TopNavbarProps, TopNavbarState> {
    constructor(props: TopNavbarProps) {
        super(props);

        this.state = {

        };
    }

    public componentDidMount() {

    }

    public render() {
        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <div>
                        <NavBar>
                            <NavBarBrand brandName='Sista'></NavBarBrand>
                            <NavToggle />
                            <NavWrapper>
                                <Nav>
                                    <NavItem name='Oversikt' icon='iconic-eye-open' path='/'></NavItem>
                                    <NavItem name='Lagg ut starttid' icon='iconic-clock' path='/lagg'></NavItem>
                                    <NavItem name='Hur gor man' icon='iconic-question-mark' path='/support'></NavItem>
                                    <NavItem name='Klubbprofil' icon='iconic-person-genderless' path='/help'></NavItem>
                                </Nav>
                            </NavWrapper>
                        </NavBar>
                    </div>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }

}