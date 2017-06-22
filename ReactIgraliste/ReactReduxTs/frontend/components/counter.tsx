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

export class Counter extends React.Component<ICounterProps, ICounterState>{
    render() {
        return <div>
            <Header compiler={'Text'} framework={'Text'}></Header>
            <p>Counter</p>
        </div>;
    }
}