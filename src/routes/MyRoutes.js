
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/Home'
import Stat from '../components/Stat'


const MyRoutes = ({ input, items, words, changeInput, getItems, readSearchWord}) => {

  return (
    <Router>
    <div>
    <ul className="channel-list ">
      <li>
        <Link to="/">Prouduct</Link>
      </li>
      <li>
        <Link to="/stat">Stat</Link>
      </li>
    </ul>
    <Routes> 
    <Route path="/" exact element={<Home input={input} items={items} words={words} changeInput={changeInput} getItems={getItems} readSearchWord={readSearchWord} />} />
    <Route path="/stat" element={<Stat />} />
    </Routes>
    </div>
    </Router>

  );
};

export default MyRoutes;
