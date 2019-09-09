import * as React from 'react';
import { LanguageContext } from '../../backbone/Language';
import { Requireable } from 'prop-types';
import { RouteComponentProps } from 'react-router';

export type Color = 'primary' | 'secondary';
export type TitleSize = 'font-xs' | 'font-sm' | 'font-md' | 'font-lg' | 'font-xl' | number;
export type TitleTransform = 'font-none' | 'font-capitalize' | 'font-uppercase' | 'font-lowercase';
export type TitleWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
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
                            width: this.props.width ? this.props.width + 'px' : 'auto',
                            maxWidth: this.props.maxWidth ? this.props.maxWidth + 'px' : 'auto',
                            minWidth: this.props.minWidth ? this.props.minWidth + 'px' : 'auto',
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
    color?: string;
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
                        className={this.props.className ? this.props.className + ' yc_card-body' : 'yc_card-body'}
                        style={{
                            backgroundColor: this.props.color ? this.props.color : 'white'
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
    width?: number;
    color?: Color;
    paddingRight?: string;
    paddingLeft?: string;
    paddingTop?: string;
    paddingBottom?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export class Button extends React.Component<ButtonProps, ButtonState> {
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
        const { color, paddingBottom, paddingLeft, paddingRight, paddingTop } = this.props;

        let targetColor = color ? color : 'primary';

        let targetPaddingBottom = paddingBottom ? paddingBottom : '0';
        let targetPaddingLeft = paddingLeft ? paddingLeft : '0';
        let targetPaddingRight = paddingRight ? paddingRight : '0';
        let targetPaddingTop = paddingTop ? paddingTop : '0';
        let targetPadding = targetPaddingTop + ' ' + targetPaddingRight + ' ' + targetPaddingBottom + ' ' + targetPaddingLeft;

        let className = targetColor + ' yc_btn';

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <button
                        className={className}
                        style={{
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
    size?: TitleSize;
    transform?: TitleTransform;
    bold?: TitleWeight;
    color?: string;
    paddingRight?: string;
    paddingLeft?: string;
    paddingTop?: string;
    paddingBottom?: string;
}

export class Title extends React.Component<TitleProps, TitleState> {
    constructor(props: TitleProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { size, transform, bold, color, paddingBottom, paddingLeft, paddingRight, paddingTop } = this.props;

        let targetSize = size ? typeof size === "number" ? '' : size : 'font-md';
        let targetTransform = transform ? transform : 'font-none';

        let targetPaddingBottom = paddingBottom ? paddingBottom : '0';
        let targetPaddingLeft = paddingLeft ? paddingLeft : '0';
        let targetPaddingRight = paddingRight ? paddingRight : '0';
        let targetPaddingTop = paddingTop ? paddingTop : '0';
        let targetPadding = targetPaddingTop + ' ' + targetPaddingRight + ' ' + targetPaddingBottom + ' ' + targetPaddingLeft;

        let className = targetSize + ' ' + targetTransform + ' yc_title';

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <div
                        className={className}
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
    size?: TitleSize;
    transform?: TitleTransform;
    bold?: TitleWeight;
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
}

export interface NavBarProps {
    className?: string;
}

export class NavBar extends React.Component<NavBarProps, NavBarState> {
    constructor(props: NavBarProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        const { className } = this.props;

        let classNameCombind = className ? className + ' yc_navbar' : 'yc_navbar';

        return <React.Fragment>
            <LanguageContext.Consumer>
                {lang => (
                    <nav className={classNameCombind}>
                        {this.props.children}
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
                    <div className={classNameCombind}>
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
