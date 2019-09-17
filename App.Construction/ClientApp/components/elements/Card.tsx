import * as React from 'react';
import { LanguageContext } from '../../backbone/Language';
import { Requireable, number } from 'prop-types';
import { RouteComponentProps } from 'react-router';
import DatePicker from "react-datepicker";
import Popper from 'popper.js';
import { faIR } from 'date-fns/locale';
import { NavbarBrand } from 'reactstrap';

export type Color = 'primary' | 'secondary' | 'warning' | 'success' | 'info' | 'danger';
export type FontSize = 'font-xs' | 'font-sm' | 'font-md' | 'font-lg' | 'font-xl' | number;
export type FontTransform = 'font-none' | 'font-capitalize' | 'font-uppercase' | 'font-lowercase';
export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type TextAlign = 'topLeft' | 'topCenter' | 'topRight' | 'leftCenter' | 'middle' | 'rightCenter' | 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'none';
export enum SpinType { Spin_folding_cube, Spinner }
export enum BackdropType { Full = 'full', Window = 'window' }




export interface CardState {
}

export interface CardProps {
    width?: number;
    maxWidth?: number;
    minWidth?: number;
    bgColor?: string;
    className?: string;
}

export class Card extends React.Component<CardProps, CardState> {
    constructor(props: CardProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <div
                        className={this.props.className ? this.props.className + ' yc_card' : 'yc_card'}
                        style={{
                            width: this.props.width ? this.props.width : '100%',
                            maxWidth: this.props.maxWidth ? this.props.maxWidth : 'auto',
                            minWidth: this.props.minWidth ? this.props.minWidth : 'auto',
                            backgroundColor: this.props.bgColor ? this.props.bgColor : 'white'
                        }}>
                        {this.props.children}
                    </div>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}





export interface CardBodyState {
}

export interface CardBodyProps {
    width?: number;
    bgColor?: string;
    className?: string;
}

export class CardBody extends React.Component<CardBodyProps, CardBodyState> {
    constructor(props: CardBodyProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <div
                        className={this.props.className ? this.props.className + ' yc_card_body' : 'yc_card_body'}
                        style={{
                            backgroundColor: this.props.bgColor ? this.props.bgColor : 'inherite'
                        }}>
                        {this.props.children}
                    </div>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}




export interface CardTitleState {
}

export interface CardTitleProps {
    size?: FontSize;
    transform?: FontTransform;
    bold?: FontWeight;
    color?: string;
    className?: string;
    textAlign?: TextAlign;
    width?: number | undefined;
    height?: number | undefined;
}

export class CardTitle extends React.Component<CardTitleProps, CardTitleState> {
    constructor(props: CardTitleProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { size, transform, bold, color, className, width, height, textAlign } = this.props;

        let targetSize = size ? typeof size === "number" ? '' : size : 'font-md';
        let targetTransform = transform ? transform : 'font-none';
        let targetTextAlign = textAlign ? textAlign : 'middle';

        let combindClassName = className ? targetTextAlign + ' ' + targetSize + ' ' + targetTransform + ' ' + className + ' yc_card_title' : targetTextAlign + ' ' + targetSize + ' ' + targetTransform + ' yc_card_title';

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <div
                        className={combindClassName}
                        style={{
                            fontWeight: bold ? bold : 400,
                            color: color ? color : 'black',
                            width: width ? width : '100%',
                            height: height ? height : '100%',
                            fontSize: typeof size === "number" ? size : '',
                        }}>
                        {this.props.children}
                    </div>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}




export interface CardSubTitleState {
}

export interface CardSubTitleProps {
    size?: FontSize;
    transform?: FontTransform;
    bold?: FontWeight;
    color?: string;
    className?: string;
    textAlign?: TextAlign;
    width?: number | undefined;
    height?: number | undefined;
}

export class CardSubTitle extends React.Component<CardSubTitleProps, CardSubTitleState> {
    constructor(props: CardSubTitleProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { size, transform, bold, color, className, width, height, textAlign } = this.props;

        let targetSize = size ? typeof size === "number" ? '' : size : 'font-md';
        let targetTransform = transform ? transform : 'font-none';
        let targetTextAlign = textAlign ? textAlign : 'middle';

        let combindClassName = className ? targetTextAlign + ' ' + targetSize + ' ' + targetTransform + ' ' + className + ' yc_card_sub_title' : targetTextAlign + ' ' + targetSize + ' ' + targetTransform + ' yc_card_sub_title';

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <div
                        className={combindClassName}
                        style={{
                            fontWeight: bold ? bold : 400,
                            color: color ? color : 'black',
                            width: width ? width : '100%',
                            height: height ? height : '100%',
                            fontSize: typeof size === "number" ? size : '',
                        }}>
                        {this.props.children}
                    </div>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}




export interface CardTextState {
}

export interface CardTextProps {
    size?: FontSize;
    transform?: FontTransform;
    bold?: FontWeight;
    color?: string;
    className?: string;
    textAlign?: TextAlign;
    width?: number | undefined;
    height?: number | undefined;
}

export class CardText extends React.Component<CardTextProps, CardTextState> {
    constructor(props: CardTextProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { size, transform, bold, color, className, width, height, textAlign } = this.props;

        let targetSize = size ? typeof size === "number" ? '' : size : 'font-md';
        let targetTransform = transform ? transform : 'font-none';
        let targetTextAlign = textAlign ? textAlign : 'middle';

        let combindClassName = className ? targetTextAlign + ' ' + targetSize + ' ' + targetTransform + ' ' + className + ' yc_card_text' : targetTextAlign + ' ' + targetSize + ' ' + targetTransform + ' yc_card_text';

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <div
                        className={combindClassName}
                        style={{
                            fontWeight: bold ? bold : 400,
                            color: color ? color : 'black',
                            width: width ? width : '100%',
                            height: height ? height : '100%',
                            fontSize: typeof size === "number" ? size : '',
                        }}>
                        {this.props.children}
                    </div>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}




export interface ButtonState {
}

export interface ButtonProps {
    width?: number | undefined | 'fit-content' | '100%';
    style?: Color | undefined;
    paddingRight?: string | undefined;
    paddingLeft?: string | undefined;
    paddingTop?: string | undefined;
    paddingBottom?: string | undefined;
    className?: string | undefined;
    color?: string;
    size?: FontSize;
    transform?: FontTransform;
    bold?: FontWeight;
    textAlign?: TextAlign;
    height?: number | undefined | 'fit-content' | '100%';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export class Button extends React.Component<ButtonProps, ButtonState> {
    public static defaultProps = {
        style: 'primary'
    };

    constructor(props: ButtonProps) {
        super(props);

        this.state = {
        };

        this.buttonOnClick = this.buttonOnClick.bind(this);
    }

    private buttonOnClick(event: React.MouseEvent<HTMLButtonElement>) {
        if (this.props.onClick) {
            this.props.onClick(event);
        }
    }

    render() {
        const { paddingBottom, paddingLeft, paddingRight, paddingTop, className, transform, textAlign, bold, style, width, height, size } = this.props;

        let targetColor = style ? style : 'primary';

        let targetPaddingBottom = paddingBottom ? paddingBottom : '12px';
        let targetPaddingLeft = paddingLeft ? paddingLeft : '40px';
        let targetPaddingRight = paddingRight ? paddingRight : '40px';
        let targetPaddingTop = paddingTop ? paddingTop : '12px';
        let targetPadding = targetPaddingTop + ' ' + targetPaddingRight + ' ' + targetPaddingBottom + ' ' + targetPaddingLeft;
        let targetTransform = transform ? transform : 'font-uppercase';
        let targetTextAlign = textAlign ? textAlign : 'none';
        let targetSize = size ? typeof size === "number" ? '' : size : 'font-md';

        let targets = 'yc_btn ' + targetColor + ' ' + targetTransform + ' ' + targetTextAlign + ' ' + targetSize + ' ';
        let combindClassName = className ? targets + className : targets + targetColor;

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <button
                        className={combindClassName}
                        style={{
                            fontWeight: bold ? bold : 400,
                            width: width ? width : 'fit-content',
                            height: height ? height : 'fit-content',
                            padding: targetPadding ? targetPadding : '',
                            fontSize: size ? typeof size === "number" ? size : '' : ''
                        }}
                        onClick={this.buttonOnClick}>
                        {this.props.children}
                    </button>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}




export interface TitleState {
}

export interface TitleProps {
    size?: FontSize;
    transform?: FontTransform;
    bold?: FontWeight;
    color?: string;
    paddingRight?: string;
    paddingLeft?: string;
    paddingTop?: string;
    paddingBottom?: string;
    className?: string | undefined;
}

export class Title extends React.Component<TitleProps, TitleState> {
    constructor(props: TitleProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { size, transform, bold, color, paddingBottom, paddingLeft, paddingRight, paddingTop, className } = this.props;

        let targetSize = size ? typeof size === "number" ? '' : size : 'font-md';
        let targetTransform = transform ? transform : 'font-none';

        let targetPaddingBottom = paddingBottom ? paddingBottom : '0';
        let targetPaddingLeft = paddingLeft ? paddingLeft : '0';
        let targetPaddingRight = paddingRight ? paddingRight : '0';
        let targetPaddingTop = paddingTop ? paddingTop : '0';
        let targetPadding = targetPaddingTop + ' ' + targetPaddingRight + ' ' + targetPaddingBottom + ' ' + targetPaddingLeft;

        let combindClassName = targetSize + ' ' + targetTransform + ' yc_title';
        combindClassName = className ? combindClassName + ' ' + className : combindClassName;

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <div
                        className={combindClassName}
                        style={{
                            fontWeight: bold ? bold : 400,
                            color: color ? color : 'black',
                            fontSize: typeof size === "number" ? size : '',
                            padding: targetPadding
                        }}>
                        {this.props.children}
                    </div>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}




export interface TextState {
}

export interface TextProps {
    size?: FontSize;
    transform?: FontTransform;
    bold?: FontWeight;
    color?: string;
    paddingRight?: string;
    paddingLeft?: string;
    paddingTop?: string;
    paddingBottom?: string;
    className?: string | undefined;
}

export class Text extends React.Component<TextProps, TextState> {
    constructor(props: TextProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { size, transform, bold, color, paddingBottom, paddingLeft, paddingRight, paddingTop, className } = this.props;

        let targetSize = size ? typeof size === "number" ? '' : size : 'font-md';
        let targetTransform = transform ? transform : 'font-none';

        let targetPaddingBottom = paddingBottom ? paddingBottom : '0';
        let targetPaddingLeft = paddingLeft ? paddingLeft : '0';
        let targetPaddingRight = paddingRight ? paddingRight : '0';
        let targetPaddingTop = paddingTop ? paddingTop : '0';
        let targetPadding = targetPaddingTop + ' ' + targetPaddingRight + ' ' + targetPaddingBottom + ' ' + targetPaddingLeft;

        let combindClassName = targetSize + ' ' + targetTransform + ' yc_text';
        combindClassName = className ? combindClassName + ' ' + className : combindClassName;

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <div
                        className={combindClassName}
                        style={{
                            fontWeight: bold ? bold : 400,
                            color: color ? color : 'black',
                            fontSize: typeof size === "number" ? size : '',
                            padding: targetPadding
                        }}>
                        {this.props.children}
                    </div>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}





export interface ParagraphState {
}

export interface ParagraphProps {
    size?: FontSize;
    transform?: FontTransform;
    bold?: FontWeight;
    color?: string;
}

export class Paragraph extends React.Component<ParagraphProps, ParagraphState> {
    constructor(props: ParagraphProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { size, transform, bold, color } = this.props;

        let targetSize = size ? typeof size === "number" ? '' : size : 'font-md';
        let targetTransform = transform ? transform : 'font-none';

        let className = targetSize + ' ' + targetTransform + ' yc_paragraph';

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <div
                        className={className}
                        style={{
                            fontWeight: bold ? bold : 400,
                            color: color ? color : '#797979',
                            fontSize: typeof size === "number" ? size : ''
                        }}>
                        {this.props.children}
                    </div>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}




export interface BadgeState {
}

export interface BadgeProps {
    radius?: number;
    color?: string;
    dimension?: number;
    bgColor?: string;
    clickable?: boolean;
    icon?: string;
}

export class Badge extends React.Component<BadgeProps, BadgeState> {
    constructor(props: BadgeProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { color, dimension, radius, bgColor, clickable, icon } = this.props;

        let targetIcon = icon ? icon : 'iconic-check';

        let className = 'yc_badge';

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <div
                        className={className}
                        style={{
                            color: color ? color : 'black',
                            backgroundColor: bgColor ? bgColor : 'black',
                            height: dimension ? dimension : 25,
                            width: dimension ? dimension : 25,
                            borderRadius: radius ? radius : '50%',
                            cursor: clickable ? 'pointer' : 'default',
                        }}>
                        <span
                            className={"color-white iconic font-sm " + targetIcon}
                            aria-hidden="true"
                            style={{
                                fontSize: dimension ? dimension * .5 : 25 * .5,
                            }}>
                        </span>
                    </div>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}




export interface DashState {
}

export interface DashProps {
    top: number | string;
    left: number | string;
    bgColor?: string;
    width: number;
    height: number;
}

export class Dash extends React.Component<DashProps, DashState> {
    constructor(props: DashProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { top, left, bgColor, width, height } = this.props;

        let className = 'yc_dash';

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <div
                        className={className}
                        style={{
                            backgroundColor: bgColor ? bgColor : 'black',
                            left: left,
                            top: top,
                            width: width,
                            height: height
                        }}>
                    </div>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}




export interface NavBarState {
    show: boolean;
}

export interface NavBarProps {
    className?: string;
}

export class NavBar extends React.Component<NavBarProps, NavBarState> {
    constructor(props: NavBarProps) {
        super(props);

        this.state = {
            show: false
        };

        this.onClick = this.onClick.bind(this);
    }

    public onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { show } = this.state;

        console.log(show);
        this.setState({
            show: !show
        });
    }

    render() {
        const { className } = this.props;

        let classNameCombind = className ? className + ' yc_navbar' : 'yc_navbar';

        const children = this.props.children;

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <nav className={classNameCombind}>
                        {React.Children.map(children, (child: any, i) => {
                            if (child.type.displayName === 'NavBarBrand') {
                                return child;
                            } else if (child.type.displayName === 'NavToggle') {
                                return React.cloneElement<NavToggle>(child, { onClick: this.onClick } as unknown as NavToggle);
                            } else if (child.type.displayName === 'NavWrapper') {
                                let element = child as React.ReactElement<NavWrapper>;
                                let wrapper = element as unknown as NavWrapper;
                                let className = wrapper.props.className ? wrapper.props.className : '';
                                className = this.state.show ? className + ' show ease' : className + ' ease';
                                return React.cloneElement<NavWrapper>(child, { className: className } as unknown as NavWrapper);
                            } else {
                                return child;
                            }
                        })}
                    </nav>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}




export interface NavBarBrandState {
}

export interface NavBarBrandProps {
    className?: string;
    brandName: string;
    brandUrl?: string;
}

export class NavBarBrand extends React.Component<NavBarBrandProps, NavBarBrandState> {
    constructor(props: NavBarBrandProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { className, brandUrl, brandName } = this.props;

        let targetUrl = brandUrl ? brandUrl : '/';

        let classNameCombind = className ? className + ' yc_navbar_brand' : 'yc_navbar_brand';

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <a className={classNameCombind} href={targetUrl}>{brandName}</a>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}




export interface NavToggleState {
}

export interface NavToggleProps {
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export class NavToggle extends React.Component<NavToggleProps, NavToggleState> {
    constructor(props: NavToggleProps) {
        super(props);

        this.state = {
        };

        this.onClick = this.onClick.bind(this);
    }

    public onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (this.props.onClick) {
            this.props.onClick(event);
        }
    }

    render() {
        const { className } = this.props;

        let classNameCombind = className ? className + ' yc_navbar_toggler' : 'yc_navbar_toggler';

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <Button onClick={this.onClick} style="secondary"
                        className={classNameCombind}
                        paddingBottom=' 0.5rem'
                        paddingTop='0.5rem'
                        paddingLeft='0.75rem'
                        paddingRight='0.75rem'>
                        <span className="iconic iconic-menu font-md"></span>
                    </Button>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}



export interface NavWrapperState {
}

export interface NavWrapperProps {
    className?: string;
}

export class NavWrapper extends React.Component<NavWrapperProps, NavWrapperState> {
    constructor(props: NavWrapperProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { className } = this.props;

        let classNameCombind = className ? className + ' yc_navbar_navigation' : 'yc_navbar_navigation';

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <div className={classNameCombind} >
                        {this.props.children}
                    </div>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}




export interface NavState {
}

export interface NavProps {
    className?: string;
}

export class Nav extends React.Component<NavProps, NavState> {
    constructor(props: NavProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { className } = this.props;

        let classNameCombind = className ? className + ' yc_navbar_navigation_row' : 'yc_navbar_navigation_row';

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <ul className={classNameCombind}>
                        {this.props.children}
                    </ul>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}




export interface NavItemState {
}

export interface NavItemProps {
    className?: string;
    icon: string;
    name: string;
    path: string;
}

export class NavItem extends React.Component<NavItemProps, NavItemState> {
    constructor(props: NavItemProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { className, icon, name, path } = this.props;


        let isActive = location.pathname === path;

        let classNameCombind = className ? className + ' yc_navbar_navigation_item' : 'yc_navbar_navigation_item';
        classNameCombind = isActive ? classNameCombind + ' yc_nav_selected' : classNameCombind;

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <li className={classNameCombind}>
                        <a href={path}>
                            <span
                                className={"iconic font-md " + icon}
                                aria-hidden="true">
                            </span>
                            <span className='nav_title'>{name}</span>
                        </a>
                    </li>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}




export interface TabState {
}

export interface TabProps {
    className?: string;
}

export class Tab extends React.Component<TabProps, TabState> {
    constructor(props: TabProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { className } = this.props;

        let classNameCombind = className ? className + ' yc_tab' : 'yc_tab';

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <ul className={classNameCombind}>
                        {this.props.children}
                    </ul>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}




export interface TabItemState {
}

export interface TabItemProps {
    className?: string;
    activeTab: number;
    name: string;
    tabId: number;
    onClick: (tabIndex: number) => void;
}

export class TabItem extends React.Component<TabItemProps, TabItemState> {
    constructor(props: TabItemProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { className, activeTab, name, tabId } = this.props;

        let classNameCombind = className ? className + ' yc_tab_item' : 'yc_tab_item';
        classNameCombind = activeTab === tabId ? classNameCombind + ' yc_tab_selected' : classNameCombind;

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <li className={classNameCombind}>
                        <a onClick={() => this.props.onClick(tabId)}>
                            <span>{name}</span>
                        </a>
                    </li>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}




export interface TabContentState {
}

export interface TabContentProps {
    className?: string;
    activeTab: number;
}

export class TabContent extends React.Component<TabContentProps, TabContentState> {
    constructor(props: TabContentProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { className, activeTab } = this.props;

        let classNameCombind = className ? className + ' yc_tab_content' : 'yc_tab_content';

        const children = this.props.children;

        return (
            <React.Fragment>
                <LanguageContext.Consumer>
                    {lang => (
                        <div className={classNameCombind}>
                            {React.Children.map(children, (child, i) => {
                                if (React.isValidElement<TabPane>(child)) {
                                    let element = child as React.ReactElement<TabPane>;
                                    let pane = element as unknown as TabPane;
                                    if (pane.props.tabId === activeTab) {
                                        return child;
                                    }
                                }
                            })}
                        </div>
                    )}
                </LanguageContext.Consumer>
            </React.Fragment>
        )
    }
}




export interface TabPaneState {
}

export interface TabPaneProps {
    className?: string;
    tabId: number;
}

export class TabPane extends React.Component<TabPaneProps, TabPaneState> {
    constructor(props: TabPaneProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { className } = this.props;

        let classNameCombind = className ? className + ' yc_tab_pane' : 'yc_tab_pane';

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <div className={classNameCombind}>
                        {this.props.children}
                    </div>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}




export interface RadioGroupState {
}

export interface RadioGroupProps {
    className?: string;
    activeValue?: number;
    onChange: (value: number) => void;
}

export class RadioGroup extends React.Component<RadioGroupProps, RadioGroupState> {
    constructor(props: RadioGroupProps) {
        super(props);

        this.state = {
        };

        this.onChange = this.onChange.bind(this);
    }

    public onChange = (value: number) => {
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    }

    render() {
        const { className, activeValue } = this.props;

        let classNameCombind = className ? className + ' yc_radio_group' : 'yc_radio_group';

        const children = this.props.children;

        return (
            <React.Fragment>
                <LanguageContext.Consumer>
                    {lang => (
                        <div className={classNameCombind}>
                            {React.Children.map(children, (child, i) => {
                                if (React.isValidElement<RadioText>(child)) {
                                    let element = child as React.ReactElement<RadioText>;
                                    let radio = element as unknown as RadioText;
                                    if (radio.props.value === activeValue) {
                                        return React.cloneElement<RadioText>(child, { active: true, onChange: this.onChange } as unknown as RadioText);
                                    }

                                    return React.cloneElement<RadioText>(child, { onChange: this.onChange } as unknown as RadioText);
                                }
                            })}
                        </div>
                    )}
                </LanguageContext.Consumer>
            </React.Fragment>
        )
    }
}




export interface RadioTextState {
}

export interface RadioTextProps {
    className?: string;
    value: number;
    active: boolean;
    width: number;
    height: number;
    onChange?: (value: number) => void;
}

export class RadioText extends React.Component<RadioTextProps, RadioTextState> {
    public static defaultProps = {
        active: false
    };

    constructor(props: RadioTextProps) {
        super(props);

        this.state = {
        };

        this.onChange = this.onChange.bind(this);
    }

    public onChange = (e: any) => {
        if (this.props.onChange && !this.props.active) {
            this.props.onChange(parseInt(e.currentTarget.value));
        }
    }

    render() {
        const { className, width, height, active, value } = this.props;

        let classNameCombind = className ? className + ' yc_radio' : 'yc_radio';
        classNameCombind = active ? classNameCombind + ' yc_radio_selected' : classNameCombind;


        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <span className={classNameCombind}>
                        <input type="radio"
                            className="yc_radio_input"
                            value={value}
                            checked={active}
                            onChange={this.onChange}
                            style={{
                                width: width,
                                height: height,
                                fontSize: width * .6
                            }}>
                        </input>
                        <span style={{
                            width: width,
                            height: height
                        }}>
                            {this.props.children}
                        </span>
                    </span>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}




export interface TimePickerState {
    hour?: string;
    minute?: string;
    second?: string;
    time?: string;
    timeText?: string;
    edit: boolean;
}

export interface TimePickerProps {
    className?: string;
    placeholder?: string;
    width?: number;
    value?: string;
    timeEnable?: boolean;
    format?: string;
    onChange?: (value: string | undefined) => void;
}

export class TimePicker extends React.Component<TimePickerProps, TimePickerState> {
    public static defaultProps = {
        value: '',
        timeEnable: false,
        format: '{time}'
    };

    innerInput: React.RefObject<HTMLInputElement>;
    innerDiv: HTMLDivElement | undefined;
    hoursRef: Array<HTMLLIElement | null>;
    minutesRef: Array<HTMLLIElement | null>;
    secondRef: Array<HTMLLIElement | null>;

    constructor(props: TimePickerProps) {
        super(props);

        this.state = {
            timeText: '',
            time: '',
            hour: '',
            minute: '',
            second: '',
            edit: false
        };

        this.setHour = this.setHour.bind(this);
        this.setMinute = this.setMinute.bind(this);
        this.setSecond = this.setSecond.bind(this);
        this.setTime = this.setTime.bind(this);
        this.onFocusInner = this.onFocusInner.bind(this);
        this.onBlurInner = this.onBlurInner.bind(this);
        this.onChangeInner = this.onChangeInner.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onFocusWrapper = this.onFocusWrapper.bind(this);
        this.makeFocus = this.makeFocus.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.validateTime = this.validateTime.bind(this);

        this.innerInput = React.createRef<HTMLInputElement>();
        this.innerDiv = undefined;
        this.hoursRef = [];
        this.minutesRef = [];
        this.secondRef = [];
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false);

        this.setTime(this.props.value, true);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    public handleClick = (e: any) => {
        if (this.innerDiv &&
            this.innerDiv.contains(e.target)) {
            return;
        }

        if (this.props.onChange) {
            this.props.onChange(this.state.time);
        }

        this.setState({ edit: false, timeText: this.state.time });
    }

    public setHour = (hour: string) => {
        let minute = this.state.minute ? this.state.minute : '00';
        let second = this.state.second ? this.state.second : '00';
        let time = this.props.timeEnable ? hour + ':' + minute + ':' + second : hour + ':' + minute;

        if (this.hoursRef[parseInt(hour)]) {
            (this.hoursRef[parseInt(hour)] as HTMLLIElement).scrollIntoView();
        }

        this.setState({ hour, minute, second, time, timeText: time, edit: true });
        this.makeFocus();
    }

    public setMinute = (minute: string) => {
        let hour = this.state.hour ? this.state.hour : '00';
        let second = this.state.second ? this.state.second : '00';
        let time = this.props.timeEnable ? hour + ':' + minute + ':' + second : hour + ':' + minute;

        if (this.minutesRef[parseInt(minute)]) {
            (this.minutesRef[parseInt(minute)] as HTMLLIElement).scrollIntoView();
        }

        this.setState({ hour, minute, second, time, timeText: time, edit: true });
        this.makeFocus();
    }

    public setSecond = (second: string) => {
        let minute = this.state.minute ? this.state.minute : '00';
        let hour = this.state.hour ? this.state.hour : '00';
        let time = this.props.timeEnable ? hour + ':' + minute + ':' + second : hour + ':' + minute;

        if (this.secondRef[parseInt(second)]) {
            (this.secondRef[parseInt(second)] as HTMLLIElement).scrollIntoView();
        }

        this.setState({ hour, minute, second, time, timeText: time });
        this.makeFocus();
    }

    public onFocus = (e: any) => {
        this.setState({ edit: true });
    }

    public onChange = (e: any) => {
    }

    public onClick = (e: any) => {
        this.setState({ edit: true });
    }

    public onFocusWrapper = (e: any) => {
        this.setState({ edit: true });
    }

    public refCallback = (element: HTMLDivElement) => {
        if (element) {
            this.innerDiv = element;
            this.makeFocus();

            if (this.state.hour && this.hoursRef[parseInt(this.state.hour)]) {
                (this.hoursRef[parseInt(this.state.hour)] as HTMLLIElement).scrollIntoView();
            }

            if (this.state.minute && this.minutesRef[parseInt(this.state.minute)]) {
                (this.minutesRef[parseInt(this.state.minute)] as HTMLLIElement).scrollIntoView();
            }

            if (this.state.second && this.secondRef[parseInt(this.state.second)]) {
                (this.secondRef[parseInt(this.state.second)] as HTMLLIElement).scrollIntoView();
            }
        }
    };

    public makeFocus = () => {
        if (this.innerInput.current) {
            this.innerInput.current.focus();
        }
    }

    public onFocusInner = (e: any) => {
        e.target.select();
    }

    public onChangeInner = (e: any) => {
        this.setState({ timeText: e.target.value })
    }

    public onBlurInner = (e: any) => {
        this.setTime(e.target.value, false);
    }

    public setTime = (newTime: string | undefined, changeProp: boolean) => {
        const { time } = this.state;

        var pattern = this.props.timeEnable ? /^\d\d:\d\d:\d\d$/ : /^\d\d:\d\d$/;

        if (newTime && pattern.test(newTime)) {
            let times = newTime.split(':');

            if (this.props.timeEnable && times.length !== 3) {
                if (changeProp && this.props.onChange) {
                    this.props.onChange(this.state.time);
                }

                this.setState({ time, timeText: time });
                return;
            }

            if (!this.props.timeEnable && times.length !== 2) {
                if (changeProp && this.props.onChange) {
                    this.props.onChange(this.state.time);
                }

                this.setState({ time, timeText: time });
                return;
            }

            let hour = times[0];
            let minute = times[1];
            let second = times[2];
            let changeTime = this.props.timeEnable ? hour + ':' + minute + ':' + second : hour + ':' + minute;

            if (changeProp && this.props.onChange) {
                this.props.onChange(changeTime);
            }

            this.setState({ hour, minute, second, time, timeText: time });
        } else {
            if (changeProp && this.props.onChange) {
                this.props.onChange(this.state.time);
            }

            this.setState({ time, timeText: time });
        }
    }

    public validateTime = (newTime: string | undefined) => {
        const { time } = this.state;

        var pattern = this.props.timeEnable ? /^\d\d:\d\d:\d\d$/ : /^\d\d:\d\d$/;

        if (newTime && pattern.test(newTime)) {
            return newTime;
        } else {
            return time;
        }
    }

    render() {
        const { className, width, value, placeholder, format } = this.props;

        let classNameCombind = className ? className + ' yc_time_picker' : 'yc_time_picker';
        let newValue = value;

        var pattern = /\{time\}/;
        if (newValue && pattern.test(format as string)) {
            newValue = (format as string).replace(pattern, value as string);
        }

        return (
            <React.Fragment>
                <LanguageContext.Consumer>
                    {lang => (
                        <div>
                            <span className={classNameCombind}
                                style={{
                                    width: width ? width : '100%',
                                }}>
                                <input className="yc_time_picker_input"
                                    type="text"
                                    onFocus={this.onFocus}
                                    onChange={this.onChange}
                                    placeholder={placeholder}
                                    value={newValue} >
                                </input>
                            </span>
                            {this.state.edit && this.renderPicker()}
                        </div>
                    )}
                </LanguageContext.Consumer>
            </React.Fragment>
        )
    }

    public renderPicker() {
        const { placeholder, timeEnable } = this.props;

        const hours = [], minutes = [], seconds = [];

        for (var i = 0; i <= 23; i++) {
            hours.push(("0" + i).slice(-2));
        }

        for (var i = 0; i <= 59; i++) {
            minutes.push(("0" + i).slice(-2));
            seconds.push(("0" + i).slice(-2));
        }

        return (
            <div className='yc_time_picker_panel' ref={this.refCallback}>
                <div className='yc_time_picker_panel_inner'>
                    <div className='yc_time_picker_panel_input_wrapper'>
                        <input className="yc_time_picker_panel_input"
                            ref={this.innerInput}
                            onFocus={this.onFocusInner}
                            onBlur={this.onBlurInner}
                            onChange={this.onChangeInner}
                            value={this.state.timeText}
                            placeholder={placeholder}
                            type="text">
                        </input>
                    </div>
                    <div className='yc_time_picker_panel_combobox'>
                        <div className='yc_time_picker_panel_select'>
                            <ul>
                                {hours.map((hour, index) => {
                                    return <li key={hour} ref={el => (this.hoursRef[parseInt(hour)] = el)} onClick={() => this.setHour(hour)} className={this.state.hour === hour ? 'yc_time_picker_panel_select_option_selected' : ''}>{hour}</li>
                                })}
                            </ul>
                        </div>
                        <div className='yc_time_picker_panel_select'>
                            <ul>
                                {minutes.map((minute, index) => {
                                    return <li key={minute} ref={el => (this.minutesRef[parseInt(minute)] = el)} onClick={() => this.setMinute(minute)} className={this.state.minute === minute ? 'yc_time_picker_panel_select_option_selected' : ''}>{minute}</li>
                                })}
                            </ul>
                        </div>
                        {timeEnable &&
                            <div className='yc_time_picker_panel_select'>
                                <ul>
                                    {seconds.map((second, index) => {
                                        return <li key={second} ref={el => (this.secondRef[parseInt(second)] = el)} onClick={() => this.setSecond(second)} className={this.state.second === second ? 'yc_time_picker_panel_select_option_selected' : ''}>{second}</li>
                                    })}
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}




export interface EditorState {
}

export interface EditorProps {
    className?: string;
    placeholder?: string;
    value?: string;
    width?: number;
    onChange?: (value: string) => void;
}

export class Editor extends React.Component<EditorProps, EditorState> {
    public static defaultProps = {
        value: ''
    };

    constructor(props: EditorProps) {
        super(props);

        this.state = {
        };

        this.onChange = this.onChange.bind(this);
    }

    public onChange = (e: any) => {
        if (this.props.onChange) {
            this.props.onChange(e.currentTarget.value);
        }
    }

    render() {
        const { className, placeholder, value, width } = this.props;

        let classNameCombind = className ? className + ' yc_editor' : 'yc_editor';

        return (
            <React.Fragment>
                <LanguageContext.Consumer>
                    {lang => (
                        <span className={classNameCombind}
                            style={{
                                width: width ? width : '100%',
                            }}>
                            <input className="yc_editor_input"
                                type="text"
                                placeholder={placeholder}
                                value={value}
                                onChange={this.onChange}>
                            </input>
                        </span>
                    )}
                </LanguageContext.Consumer>
            </React.Fragment>
        )
    }
}




export interface ToolTipState {
    toggle: boolean;
}

export interface ToolTipProps {
    className?: string;
    radius?: number;
    color?: string;
    dimension?: number;
    bgColor?: string;
    icon?: string;
    tipTop?: number;
    tipLeft?: number;
}

export class ToolTip extends React.Component<ToolTipProps, ToolTipState> {

    innerDiv: HTMLDivElement | undefined;

    constructor(props: ToolTipProps) {
        super(props);

        this.state = {
            toggle: false
        };

        this.onClcik = this.onClcik.bind(this);

        this.innerDiv = undefined;
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    public handleClick = (e: any) => {
        if (this.innerDiv &&
            this.innerDiv.contains(e.target)) {
            return;
        }

        if (this.state.toggle) {
            this.setState({ toggle: false });
        }
    }

    public onClcik = (e: any) => {
        const { toggle } = this.state;

        this.setState({ toggle: !toggle });
    }

    public refCallback = (element: HTMLDivElement) => {
        if (element) {
            this.innerDiv = element;
        }
    };

    render() {
        const { className, color, dimension, radius, bgColor, icon } = this.props;

        let targetIcon = icon ? icon : 'iconic-check';

        let classNameCombind = className ? className + ' yc_tooltip' : 'yc_tooltip';


        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <div>
                        <div
                            className={classNameCombind}
                            style={{
                                color: color ? color : 'black',
                                backgroundColor: bgColor ? bgColor : 'black',
                                height: dimension ? dimension : 25,
                                width: dimension ? dimension : 25,
                                borderRadius: radius ? radius : '50%',
                            }}
                            onClick={this.onClcik}>
                            <span
                                className={"color-white iconic font-sm " + targetIcon}
                                aria-hidden="true"
                                style={{
                                    fontSize: dimension ? dimension * .5 : 25 * .5,
                                }}>
                            </span>
                        </div>
                        {this.state.toggle && this.renderTip()}
                    </div>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }

    public renderTip() {
        const { tipTop, tipLeft } = this.props;

        return (
            <div className='yc_tooltip_tip' ref={this.refCallback}
                style={{
                    top: tipTop ? tipTop : 25 + 4,
                    left: tipLeft ? tipLeft : 25 + 4,
                }}>
                <div className='yc_tooltip_content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}




export interface SpinState {
}

export interface SpinProps {
    loading: boolean;
    type?: SpinType;
    backdropDisable?: boolean;
    backdropType: BackdropType;
}

export class Spin extends React.Component<SpinProps, SpinState> {
    public static defaultProps = {
        type: SpinType.Spinner,
        backdropDisable: false,
        backdropType: BackdropType.Full
    };

    constructor(props: SpinProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { loading, type, backdropDisable, backdropType } = this.props;

        if (!loading) {
            return <div />;
        }

        let backdropClass = !backdropDisable ? 'yc_spin_backdrop_' + backdropType.toString() : '';

        return (
            <React.Fragment>
                <LanguageContext.Consumer>
                    {lang => (
                        <div>
                            {type === SpinType.Spin_folding_cube &&
                                <div className="yc_spin_folding_cube">
                                    <div className="yc_spin_cube1 yc_spin_cube"></div>
                                    <div className="yc_spin_cube2 yc_spin_cube"></div>
                                    <div className="yc_spin_cube4 yc_spin_cube"></div>
                                    <div className="yc_spin_cube3 yc_spin_cube"></div>
                                </div>
                            }
                            {type === SpinType.Spinner &&
                                <div className="yc_spinner">
                                    <div className="yc_double_bounce1"></div>
                                    <div className="yc_double_bounce2"></div>
                                </div>
                            }
                            {!backdropDisable && <div className={'yc_spin_backdrop ' + backdropClass}></div>}
                        </div>
                    )}
                </LanguageContext.Consumer>
            </React.Fragment>
        )
    }
}




export interface DateTimePickerState {
}

interface HighlightDates {
    [className: string]: Date[];
}

export interface DateTimePickerProps {
    adjustDateOnChange?: boolean;
    allowSameDay?: boolean;
    autoComplete?: string;
    autoFocus?: boolean;
    calendarClassName?: string;
    calendarContainer?(props: { children: React.ReactNode[] }): React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    clearButtonTitle?: string;
    customInput?: React.ReactNode;
    customInputRef?: string;
    dateFormat?: string | string[];
    dateFormatCalendar?: string;
    dayClassName?(date: Date): string | null;
    disabled?: boolean;
    disabledKeyboardNavigation?: boolean;
    dropdownMode?: 'scroll' | 'select';
    endDate?: Date | null;
    excludeDates?: Date[];
    excludeTimes?: Date[];
    filterDate?(date: Date): boolean;
    fixedHeight?: boolean;
    forceShowMonthNavigation?: boolean;
    formatWeekDay?(formattedDate: string): string;
    formatWeekNumber?(date: Date): string | number;
    highlightDates?: Array<HighlightDates | Date>;
    id?: string;
    includeDates?: Date[];
    includeTimes?: Date[];
    injectTimes?: Date[];
    inline?: boolean;
    isClearable?: boolean;
    locale?: string | Locale;
    maxDate?: Date | null;
    maxTime?: Date;
    minDate?: Date | null;
    minTime?: Date;
    monthsShown?: number;
    name?: string;
    nextMonthButtonLabel?: string;
    onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
    onChange(date: Date | null, event: React.SyntheticEvent<any> | undefined): void;
    onChangeRaw?(event: React.FocusEvent<HTMLInputElement>): void;
    onClickOutside?(event: React.MouseEvent<HTMLDivElement>): void;
    onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
    onInputClick?(): void;
    onInputError?(err: { code: number; msg: string }): void;
    onKeyDown?(event: React.KeyboardEvent<HTMLDivElement>): void;
    onMonthChange?(date: Date): void;
    onSelect?(date: Date, event: React.SyntheticEvent<any> | undefined): void;
    onWeekSelect?(firstDayOfWeek: Date, weekNumber: string | number, event: React.SyntheticEvent<any> | undefined): void;
    onYearChange?(date: Date): void;
    open?: boolean;
    openToDate?: Date;
    peekNextMonth?: boolean;
    placeholderText?: string;
    popperClassName?: string;
    popperContainer?(props: { children: React.ReactNode[] }): React.ReactNode;
    popperModifiers?: Popper.Modifiers;
    popperPlacement?: string;
    popperProps?: {};
    preventOpenOnFocus?: boolean;
    previousMonthButtonLabel?: string;
    readOnly?: boolean;
    renderCustomHeader?(params: {
        date: Date;
        changeYear(year: number): void;
        changeMonth(month: number): void;
        decreaseMonth(): void;
        increaseMonth(): void;
        prevMonthButtonDisabled: boolean;
        nextMonthButtonDisabled: boolean;
    }): React.ReactNode;
    renderDayContents?(dayOfMonth: number): React.ReactNode;
    required?: boolean;
    scrollableMonthYearDropdown?: boolean;
    scrollableYearDropdown?: boolean;
    selected?: Date | null;
    selectsEnd?: boolean;
    selectsStart?: boolean;
    shouldCloseOnSelect?: boolean;
    showDisabledMonthNavigation?: boolean;
    showMonthDropdown?: boolean;
    showMonthYearDropdown?: boolean;
    showMonthYearPicker?: boolean;
    showTimeSelect?: boolean;
    showTimeSelectOnly?: boolean;
    showWeekNumbers?: boolean;
    showYearDropdown?: boolean;
    startDate?: Date | null;
    startOpen?: boolean;
    strictParsing?: boolean;
    tabIndex?: number;
    timeCaption?: string;
    timeFormat?: string;
    timeIntervals?: number;
    title?: string;
    todayButton?: React.ReactNode;
    useShortMonthInDropdown?: boolean;
    useWeekdaysShort?: boolean;
    value?: string;
    weekLabel?: string;
    withPortal?: boolean;
    yearDropdownItemNumber?: number;
    timeInputLabel?: string;
    showTimeInput?: boolean;
    inlineFocusSelectedMonth?: boolean;
    onDayMouseEnter?: (date: Date) => void;
    onMonthMouseLeave?: () => void;
}

export class DateTimePicker extends React.Component<DateTimePickerProps, DateTimePickerState> {

    constructor(props: DateTimePickerProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { className } = this.props;

        let combinedClassName = className ? className + ' yc_date_picker_input' : 'yc_date_picker_input';

        return (
            <React.Fragment>
                <LanguageContext.Consumer>
                    {lang => (
                        <span className='yc_date_picker'>
                            <DatePicker
                                adjustDateOnChange={this.props.adjustDateOnChange}
                                allowSameDay={this.props.allowSameDay}
                                autoComplete={this.props.autoComplete}
                                autoFocus={this.props.autoFocus}
                                calendarClassName={this.props.calendarClassName}
                                calendarContainer={this.props.calendarContainer}
                                children={this.props.children}
                                className={combinedClassName}
                                clearButtonTitle={this.props.clearButtonTitle}
                                customInput={this.props.customInput}
                                customInputRef={this.props.customInputRef}
                                dateFormat={this.props.dateFormat}
                                dateFormatCalendar={this.props.dateFormatCalendar}
                                dayClassName={this.props.dayClassName}
                                disabled={this.props.disabled}
                                disabledKeyboardNavigation={this.props.disabledKeyboardNavigation}
                                dropdownMode={this.props.dropdownMode}
                                endDate={this.props.endDate}
                                excludeDates={this.props.excludeDates}
                                excludeTimes={this.props.excludeTimes}
                                filterDate={this.props.filterDate}
                                fixedHeight={this.props.fixedHeight}
                                forceShowMonthNavigation={this.props.forceShowMonthNavigation}
                                formatWeekDay={this.props.formatWeekDay}
                                formatWeekNumber={this.props.formatWeekNumber}
                                highlightDates={this.props.highlightDates}
                                id={this.props.id}
                                includeDates={this.props.includeDates}
                                includeTimes={this.props.includeTimes}
                                injectTimes={this.props.injectTimes}
                                inline={this.props.inline}
                                isClearable={this.props.isClearable}
                                locale={this.props.locale}
                                maxDate={this.props.maxDate}
                                maxTime={this.props.maxTime}
                                minDate={this.props.minDate}
                                minTime={this.props.minTime}
                                monthsShown={this.props.monthsShown}
                                name={this.props.name}
                                nextMonthButtonLabel={this.props.nextMonthButtonLabel}
                                onBlur={this.props.onBlur}
                                onChange={this.props.onChange}
                                onChangeRaw={this.props.onChangeRaw}
                                onClickOutside={this.props.onClickOutside}
                                onFocus={this.props.onFocus}
                                onInputClick={this.props.onInputClick}
                                onInputError={this.props.onInputError}
                                onKeyDown={this.props.onKeyDown}
                                onMonthChange={this.props.onMonthChange}
                                onSelect={this.props.onSelect}
                                onWeekSelect={this.props.onWeekSelect}
                                onYearChange={this.props.onYearChange}
                                open={this.props.open}
                                openToDate={this.props.openToDate}
                                peekNextMonth={this.props.peekNextMonth}
                                placeholderText={this.props.placeholderText}
                                popperClassName={this.props.popperClassName}
                                popperContainer={this.props.popperContainer}
                                popperModifiers={this.props.popperModifiers}
                                popperPlacement={this.props.popperPlacement}
                                popperProps={this.props.popperProps}
                                preventOpenOnFocus={this.props.preventOpenOnFocus}
                                previousMonthButtonLabel={this.props.previousMonthButtonLabel}
                                readOnly={this.props.readOnly}
                                renderCustomHeader={this.props.renderCustomHeader}
                                renderDayContents={this.props.renderDayContents}
                                required={this.props.required}
                                scrollableMonthYearDropdown={this.props.scrollableMonthYearDropdown}
                                scrollableYearDropdown={this.props.scrollableYearDropdown}
                                selected={this.props.selected}
                                selectsEnd={this.props.selectsEnd}
                                selectsStart={this.props.selectsStart}
                                shouldCloseOnSelect={this.props.shouldCloseOnSelect}
                                showDisabledMonthNavigation={this.props.showDisabledMonthNavigation}
                                showMonthDropdown={this.props.showMonthDropdown}
                                showMonthYearDropdown={this.props.showMonthYearDropdown}
                                showMonthYearPicker={this.props.showMonthYearPicker}
                                showTimeSelect={this.props.showTimeSelect}
                                showTimeSelectOnly={this.props.showTimeSelectOnly}
                                showWeekNumbers={this.props.showWeekNumbers}
                                showYearDropdown={this.props.showYearDropdown}
                                startDate={this.props.startDate}
                                startOpen={this.props.startOpen}
                                strictParsing={this.props.strictParsing}
                                tabIndex={this.props.tabIndex}
                                timeCaption={this.props.timeCaption}
                                timeFormat={this.props.timeFormat}
                                timeIntervals={this.props.timeIntervals}
                                title={this.props.title}
                                todayButton={this.props.todayButton}
                                useShortMonthInDropdown={this.props.useShortMonthInDropdown}
                                useWeekdaysShort={this.props.useWeekdaysShort}
                                value={this.props.value}
                                weekLabel={this.props.weekLabel}
                                withPortal={this.props.withPortal}
                                yearDropdownItemNumber={this.props.yearDropdownItemNumber}
                                timeInputLabel={this.props.timeInputLabel}
                                showTimeInput={this.props.showTimeInput}
                                inlineFocusSelectedMonth={this.props.inlineFocusSelectedMonth}
                                onDayMouseEnter={this.props.onDayMouseEnter}
                                onMonthMouseLeave={this.props.onMonthMouseLeave}></DatePicker>
                        </span>
                    )}
                </LanguageContext.Consumer>
            </React.Fragment>
        )
    }
}




export interface AlertState {
}

export interface AlertProps {
    color: Color;
    className?: string | undefined;
    style?: React.CSSProperties | undefined;
    message: string;
    closable: boolean;
    icon: boolean;
    visible: boolean;
    targetIcon?: string | undefined;
    description?: string | undefined;
    onClose?: (visible: boolean) => void;
}

export class Alert extends React.Component<AlertProps, AlertState> {

    public static defaultProps = {
        icon: false,
        closable: false,
        visible: true
    };

    constructor(props: AlertProps) {
        super(props);

        this.state = {
        };

        this.renderClose = this.renderClose.bind(this);
        this.renderIcon = this.renderIcon.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    public onClose = () => {
        if (this.props.onClose) {
            this.props.onClose(false);
        }
    }

    render() {
        if (!this.props.visible) {
            return (
                <React.Fragment >
                </React.Fragment >
            );
        }

        const { color, className, style, message, description, icon, closable } = this.props;

        let combinedClassName = className ? className + ' yc_alert' : 'yc_alert';
        combinedClassName = combinedClassName + ' ' + color;
        combinedClassName = icon ? combinedClassName + ' yc_alert_with_icon' : combinedClassName;
        combinedClassName = closable ? combinedClassName + ' yc_alert_closable' : combinedClassName;

        return (
            <React.Fragment>
                <LanguageContext.Consumer>
                    {lang => (
                        <div className={combinedClassName} style={style}>
                            {icon && this.renderIcon()}
                            {closable && this.renderClose()}
                            <span className="yc_alert_message">{message}</span>
                            {description && <span className="yc_alert_description">{description}</span>}
                        </div>
                    )}
                </LanguageContext.Consumer>
            </React.Fragment>
        )
    }

    public renderIcon() {
        const { targetIcon } = this.props;

        let className = "color-white iconic yc_alert_icon " + targetIcon;

        return (
            <span className={className}></span>
        );
    }

    public renderClose() {
        return (
            <span className="yc_alert_close_icon" onClick={this.onClose}>
                <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
            </span>
        );
    }
}




export interface CheckboxState {
}

export interface CheckboxProps {
    className?: string;
    name: string;
    active: boolean;
    width?: number | '100%' | 'fit-content' | undefined;
    height?: number | '100%' | 'fit-content' | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
    public static defaultProps = {
        active: false,
    };

    constructor(props: CheckboxProps) {
        super(props);

        this.state = {
        };

        this.onChange = this.onChange.bind(this);
    }

    public onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        if (this.props.onChange) {
            this.props.onChange(e);
        }
    }

    render() {
        const { className, width, height, active, name } = this.props;

        let classNameCombind = className ? className + ' yc_checkbox_wrapper' : 'yc_checkbox_wrapper';


        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <span className={classNameCombind}>
                        <span className={active ? "yc_checkbox yc_checkbox_checked" : "yc_checkbox"}>
                            <input type="checkbox" className="yc_checkbox_input"
                                name={name}
                                checked={active}
                                onChange={this.onChange}
                                style={{
                                    width: width,
                                    height: height,
                                }}>
                            </input>
                            <span className="yc_checkbox_inner">
                            </span>
                        </span>
                        <span>
                            {this.props.children}
                        </span>
                    </span>
                )}
            </LanguageContext.Consumer>
        </React.Fragment>
    }
}

