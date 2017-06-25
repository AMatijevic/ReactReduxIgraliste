import * as React from "react";
import Header from "./header";

interface ICounterProps {
    //Ovdje idu cisto stvari samo za prikaz
    //Propertiji propsa se nece mjenjati tokom zivota komponente
    //Niti korinik niti sustav ih nece mjenjati
}
interface ICounterState {
    //Nesto sto se mijenja kroz vrijeme nesto sa cime komponenta zapravo radi sto ce se mijenjati tokom zivota komponente
    //Tu idu stvari koje bi stavio na scope u angularu da ih mozes bind na kontrolu jer ti njihove vrijednosti trebaju tokom zivota komponente
    counter: number;
}

//Counter komponenta mora imati button i mora reagirati na click tog buttona
//Svi properties koje definiras unutar state interfacea u mom slucaju to je ICounterState biti ce dostupni u komponenti kao this.state.properties on interface

export class Counter extends React.Component<ICounterProps, ICounterState>{
    constructor(props: ICounterProps) {
        super(props);
        this.state = { counter: 0 };
    }

    incrementCounter = (event: any, incrementValue: number) => {
        //Never mutate state -> sto bi znacilo uvijek stvori novi state kad ga moras modificirati i tom novom state-u dodaj te promjene
        //za to se cesto koristi object.assign() da stvoris kopiju objekta i onda na kopiji mjenjas sto mora biti promijenjno
        this.setState(Object.assign({}, this.state, { counter: this.state.counter + incrementValue }));
    }


    render() {
        return <div>
            <Header compiler = {'Text compiler'} framework = {'Text framework'} ></Header>
            <p>Counter</p>
            <button onClick={e => this.incrementCounter(e, 1)} >+1</button>
            <button onClick={e => this.incrementCounter(e, 3)} >+3</button>
            <button onClick={e => this.incrementCounter(e, 5)} >+5</button>
            <button onClick={e => this.incrementCounter(e, 7)} >+7</button>
            <p>{this.state.counter}</p>
        </div>;
    }
}
export default Counter;