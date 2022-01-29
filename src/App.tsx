import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import IdentityPanel from './components/IdentityPanel';
import CommanderPanel from './components/CommanderPanel';
import SpellPanel from './components/SpellPanel';
import LandPanel from './components/LandPanel';
import store from './redux-modules/store';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <header><Header /></header>
                <main>
                    <section><IdentityPanel /></section>
                    <section><CommanderPanel /></section>
                    <section><SpellPanel /></section>
                    <section><LandPanel /></section>
                    <section><Footer /></section>
                </main>
            </div>
        </Provider>
    );
}

export default App;
