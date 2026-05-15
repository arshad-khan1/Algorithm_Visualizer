import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Sorting from './components/Sorting.js'
import Pathing from './pathFindingComponents/pathfinder.jsx'
import Home from './components/Home.js'
import './App.css';

function App(){
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className='app'>
            <nav className={`navbar ${isHome ? 'navbar-transparent' : 'glass'}`}>
                <div className="container nav-content">
                    <Link to="/" className='nav-logo'>
                        <img src="/favicon.png" alt="Logo" className="nav-logo-img" style={{height: '32px', width: '32px', borderRadius: '4px'}} />
                        <span className="logo-text">AlgoVisuals</span>
                    </Link>

                    
                    <div className="nav-links">
                        <Link to="/sorting" className={`nav-link ${location.pathname === '/sorting' ? 'active' : ''}`}>
                            Sorting
                        </Link>
                        <Link to="/pathing" className={`nav-link ${location.pathname === '/pathing' ? 'active' : ''}`}>
                            Pathfinding
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sorting" element={<Sorting />} />
                    <Route path="/pathing" element={<Pathing />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;

