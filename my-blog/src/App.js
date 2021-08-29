import { useState } from 'react';
import './App.css';
import Header from './components/Header.js';
import BlogList from './components/BlogList.js';
import Footer from './components/Footer.js';

function App() {
    const [news, setNews] = useState([]);
    return (
        <div className="App">
            <Header />
            <BlogList />
            <Footer />
        </div>
    );
}

export default App;
