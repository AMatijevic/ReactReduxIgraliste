import * as React from "react";
import Button from "./button";

interface ICounterPops {
    helloMessage: string;
}
interface ICounterState {
    counter: number;
}

export class CounterThree extends React.Component<ICounterPops, ICounterState>{
    constructor(props: ICounterPops) {
        super(props);
        this.state = { counter: 0 };
    };

    increment = (incrementValue) => {
        console.log(incrementValue);
        this.setState((current: ICounterState) => ({ ...current, counter: current.counter + incrementValue }));
    }

    render() {
        return <div>
            <h1>{this.props.helloMessage}</h1>
            <Button onClickFunc={this.increment} countValue={3}></Button>
            <Button onClickFunc={this.increment} countValue={5}></Button>
            <Button onClickFunc={this.increment} countValue={7}></Button>
            <h2>Counter value: {this.state.counter}</h2>
        </div>
    };
}
export default CounterThree;
