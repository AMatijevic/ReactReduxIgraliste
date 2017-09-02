import './css/site.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Hello} from './components/HelloWorld';


function renderApp(){
    ReactDOM.render(
        <Hello />,
        document.getElementById("react-app")
    );
}

renderApp();

if (module.hot) {
    module.hot.accept('./components/HelloWorld', () => {
        renderApp();
    });
}
