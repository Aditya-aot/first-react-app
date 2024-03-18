import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Header from './components/header';
import Meassage from './pages/Message';
import Gautam from './pages/Gautam';
import ToDoList from './pages/To-Do-List';


function App() {
    return(
        <>
            <Header />

            <Router>
                <Routes>
                    <Route path='/' element={< Meassage />}></Route>
                    <Route path='/gautam' element={< Gautam />}></Route>
                    <Route path='/todolist' element={< ToDoList />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;