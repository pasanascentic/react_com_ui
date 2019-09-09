import * as App from 'pubsub-js';
import * as React from 'react';


export interface LanguageInfo {
    text:   Text[];
    id:     string;
    langid: string;
}

export interface Text {
    key:   string;
    value: string;
}

export interface LanguageState {
    current?: LanguageInfo;
}

export class Language {
    
    // private languageStorageId: string = 'language-partnercenter';
    private languageStorageId: string = 'language-construction'; 

    constructor() {
        var cache = localStorage.getItem(this.languageStorageId);
        if (cache!=null)
        {
           this.text = JSON.parse(cache);
           console.info('Loaded Language from Cache');
        }
    }

    private text?: Text[];
    private id?: string;
    private langid?: string;

    public loadData(data: Text[]) {
        this.text = data;
        localStorage.setItem(this.languageStorageId,JSON.stringify(this.text));
        console.info('Saved Language to Cache');
    }

    private find(data: Text[],search: string): string {
        let val: string= search;
        data.forEach((element) => {
            if (element.key.toLowerCase()===search.toLowerCase()) {
                val = element.value;
                return val;
            } 
        });
        return val;
    }

    public Text(key: string): string {
        if (this.text!=undefined)
        {
            return this.find(this.text, key);
        }
        return "-"; //Default
    }
}

export const LanguageContext = React.createContext(new Language());

export const LanguageConsumer = LanguageContext.Consumer;


export interface LanguageProviderState {
    current: Language,
}

export interface LanguageProviderProps {
}

export class LanguageProvider extends React.Component<LanguageProviderProps, LanguageProviderState> {
    constructor(props:LanguageProviderProps) {
        super(props);
        let cl: Language = new Language();
        this.state = { current:  cl };
    }

    componentDidMount() {
        this.updateLanguage('default');
        App.subscribe("language.update",this.update.bind(this));
    }

    componentWillUnmount() {
        App.unsubscribe("language.update");
    }

    private update(msg: string, lang: string) {
        var textdata = new Array<Text>();

        textdata.push({key: "start.message",value: "element.value"});
        textdata.push({key: "engage.buttontext",value: "Test"});
        textdata.push({key: "button.close",value: "Stäng"});

        let cl: Language = new Language();
        cl.loadData(textdata);
        
        this.setState({current: cl});
    }

    private updateLanguage(lang: string) {
        console.info(lang);
        fetch('api/app/currentlanguage',
            {credentials: "same-origin"})
            .then(response => response.json() as Promise<LanguageInfo[]>)
            .then(data => {
                var textdata = new Array<Text>();

                data[0].text.map(element => {
                    textdata.push({key: element.key,value: element.value});
                });
                let cl: Language = new Language();
                cl.loadData(textdata);
                
                console.info(textdata);

                this.setState({current: cl});
        }).catch(reason => {
        });
    }

    render() {
      return (
        <LanguageContext.Provider value={this.state.current} >
          {this.props.children}
        </LanguageContext.Provider>
    );}
}




