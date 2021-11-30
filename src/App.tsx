import './App.css';
import Header from './components/Header';
import PhotoList from './components/PhotoList';
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <PhotoList />
            </div>
        </BrowserRouter>
    );
}

export default App;
