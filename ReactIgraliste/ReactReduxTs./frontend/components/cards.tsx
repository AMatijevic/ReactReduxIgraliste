import * as React from "react"
import Card from "./card";
import Form from "./form";

interface ICardsState {
    cards: Array<any>;
    userName: string;
}
export class Cards extends React.Component<undefined, ICardsState> {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                { name: 'name gb', company: 'company hh', id:1 },
                { name: 'name gb', company: 'company hh', id:2 },
                { name: 'name gb', company: 'company hh', id:3 }
            ],
            userName:''
        }
    }

    onClickHandler = () => {
        this.setState((current: ICardsState) => ({ cards: current.cards.concat({ name: this.state.userName, company: 'test', id: current.cards.length + 1 }) }));
    }
    onChangeTxt = (event: React.ChangeEvent<any>) => {
        this.setState({ userName: event.target.value });
    }

    handleSubmit = (data) => {
        this.setState((current: ICardsState) => ({ cards: current.cards.concat({ name: data.name, company: data.company, imageUrl: data.avatar_url, id: current.cards.length + 1 }) }));       
        console.log("Event form submit",this.state.userName);
    }

    render() {
        return <div>
            <Form onSubmit={this.handleSubmit}></Form>
            <button onClick={this.onClickHandler}>Add Testino</button>
            {this.state.cards.map(card => <Card key={card.id} {...card} />)}
        </div>
    }
}
export default Cards;