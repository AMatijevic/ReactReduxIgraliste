import * as React from "react"; 

interface ICountProps {
    helloMessage?: string;
    //onClickFunction: React.EventHandler<any>;
}
interface ICountState {
    count: number;
    test?: string;
}

export class CountTwo extends React.Component<ICountProps, ICountState>{
    constructor(props: ICountProps) {
        super(props);
        this.state = { count:0 }
    }
    public static defaultProps: Partial<ICountProps> = {
        helloMessage: "Some default text"
    };

    hadleClick = (incrementValue: number) => {
        //this.props.onClickFunction(incrementValue);
        this.setState((current) => ({ ...current, test:"Bla", count: current.count + incrementValue }), () => { console.log(this.state) });
    }

    render() {
        return <div>
            <h1>{this.props.helloMessage}</h1>
            <button onClick={() => this.hadleClick(1)}>+1</button>
            <p>{this.state.count} {this.state.test}</p>
        </div>
    }
}
export default CountTwo;