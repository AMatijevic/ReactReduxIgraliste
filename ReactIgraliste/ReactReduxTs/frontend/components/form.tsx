import * as React from "react"
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

interface IFormProps {
    onSubmit: Function;
}
interface IFormState {
    userName: string;
}

export class Form extends React.Component<IFormProps, IFormState> {
    constructor(props: IFormProps) {
        super(props);
        this.state = { userName:'' };
    }
    onInputChange = (event: React.ChangeEvent<any>) => {
        this.setState({ userName: event.target.value });
    }
    handleSubmit = (event: React.FormEvent<any>) => {
        event.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(resp => {
                this.props.onSubmit(resp.data);
                this.setState({ userName: '' });
            });
    }
    render(){
        return <div>
            <form onSubmit={this.handleSubmit}>
            <input
                type='text'
                value={this.state.userName}
                onChange={this.onInputChange}
                required>
            </input>
            <button type='submit'>Submit</button>
        </form>
        </div>
    }
}
export default Form;