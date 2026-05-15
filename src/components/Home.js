import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="hero">
                <h1 className="hero-title">
                    ALGO <span className="gradient-text">VISUALS</span>
                </h1>

                <p className="hero-subtitle">
                    Interact. Understand. Master the logic behind sorting, pathfinding, and more.
                </p>
            </header>

            <main className="features-grid">
                <Link to="/sorting" className="feature-card glass">
                    <div className="card-icon sorting-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="20" x2="18" y2="10" />
                            <line x1="12" y1="20" x2="12" y2="4" />
                            <line x1="6" y1="20" x2="6" y2="14" />
                        </svg>
                    </div>
                    <div className="card-content">
                        <h2>Sorting Algorithms</h2>
                        <p>Watch popular sorting algorithms like Bubble, Merge, Quick, and Insertion Sort in action.</p>
                        <span className="explore-btn">Explore Now</span>
                    </div>
                </Link>

                <Link to="/pathing" className="feature-card glass">
                    <div className="card-icon pathing-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="7" height="7" />
                            <rect x="14" y="3" width="7" height="7" />
                            <rect x="14" y="14" width="7" height="7" />
                            <rect x="3" y="14" width="7" height="7" />
                        </svg>
                    </div>
                    <div className="card-content">
                        <h2>Pathfinding Algorithms</h2>
                        <p>Simulate pathfinding algorithms like Dijkstra, A*, BFS, and DFS through complex mazes.</p>
                        <span className="explore-btn">Explore Now</span>
                    </div>
                </Link>
            </main>

            <footer className="home-footer">
                <p>Designed for learning. Built for developers.</p>
            </footer>
        </div>
    );
};

export default Home;
