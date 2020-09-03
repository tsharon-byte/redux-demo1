import React, {useState} from 'react';
import {MyCard} from "./components/MyCard";
import "./App.css"
import {MySnackbar} from "./components/MySnackbar";
import {mainReducer} from "./store/mainReducer";
import {Provider} from "react-redux";
import {createStore} from "redux";

const store = createStore(mainReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <MyCard/>
                <MySnackbar/>
            </div>
        </Provider>
    );
}

export default App;
