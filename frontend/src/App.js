import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginRegister from './LoginRegister';
import Home from './Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginRegister />} />
                <Route path='/register' element={<LoginRegister />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
