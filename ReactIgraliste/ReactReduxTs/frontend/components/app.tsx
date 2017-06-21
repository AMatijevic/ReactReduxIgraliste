import * as React from "react";
export class App extends React.Component<undefined, undefined>{
    render() {
        const divStyle = {
            color: 'blue',
            background: 'beige'
        };
        return <div style={divStyle}>
            <h1>App is set up</h1>
            <p>Some text from react app</p>
        </div>;
    }
}

//ES5 createClass
//var HelloWorld = React.createClass({
//    render: function () {
//        return (
//            <h1>Hello world</h1>
//            )
//    }
//})

//ES6 class
//No autobind with this
//Context of this is changed depending on caller in ES6
//In ES5 class <div onClick={this.handleClick}></div> is working fine
//In ES6 class <div onClick={this.handleClick.bind(this)}></div> here you need to manualy bind this this is not recomended because of performance reason
//Recomended is to bind this inside the class constructor
//class Contacts extends React.Component{
    //constructor(props){
        //super(props)
        //this.handleClick = this.handleClick.bind(this)
    //}
//}



//ES5 stateless function
    //var HelloWorld = function (props) {
    //    return (
    //        <h1>Hello world</h1>
    //        )
    //}

//ES6 stateless function
    //const HelloWorld = (props) => {
    //    return (
    //        <h1>Hello world</h1>
    //    )
    //}

//Benefits of stateless functional components
//No class needed
//avoid this keyword -> that is only a function so no need to use this keyword at all
//use for stupid presentation components -> enforce best practice -> state is not used in stupid presentation components
//avoid using state in presentation components
//state need to be managed by more higher container components or flux, redux and others... and than those higher components are containing stupid presentation components
//Code is much easyer to understand and maintain whean you use stateless functional components
//containes props and returning some HTML that is all that one stateless functional components need to be doing
//Performance is much better

//Only in those caces use class components
// manage State
//Refs to underlined DOM -> Ref will always return NULL in stateless functional components
//Lifecycle methods - if you need react on some lifecycle eventes like commponent created or removed or what ever
//Child function(for performance) - if you have function inside the function and other type of nesting function(that is not good for performance) is beter to use class in those cases
//For everything else use stateless functional components

//bit.ly/react-define-component -> link for other ways how to create components in react

//Container and presentation components
//Container -> behavior, dispatch data, actions 
    //Backend of frontend
    //Little to no markup
    //Passing data and action to childrean
    //thay are statefull 
    //If working with redux -> redux connect function on the back of the file
    //Some people put Container components to separate folder from Presentation components but that depends how you will organize your app
    //He is organize his app by feature
    //Knows about redux -> have redux specific code inside for dispatching actions to the store and connecting to the store via connect
    //Ofen stateful -> because thay need to manage state

//Presentation
    //Nearly all markup - no logic inside just markup
    //Recive data and actions vis props from container components
    //Doesn't now about redux
    //Only depends on props to display what need to be display to user
    //Stateless

//Whean you notice that some components don't use props they recive but merely forward them down... it's good time to introduce some container components