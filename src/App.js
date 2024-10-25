import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Sorting from './components/Sorting.js'
import Pathing from './pathFindingComponents/pathfinder.jsx'

function App(){

	return (
		<div className='app'>
			<h1 className='nav-heading'>
				<Link to={"/"} className='head'>
                    <span style={{color:"black"}}>Algorithm Visualizer's</span>
                </Link>
			</h1>

			<Routes>
				<Route path="/sorting" element={<Sorting />} />
				<Route path="/pathing" element={<Pathing />} />
			</Routes>


			<div className='homepagediv'>
				<Link to={"/sorting"} className='sorting'>Sorting Algorithm</Link>
				<Link to={"/pathing"} className='pathing'>Path Finder</Link>
			</div>
		</div>
	);
}
	

export default App;
