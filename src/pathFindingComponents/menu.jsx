import React, {Component} from 'react';
import SimpleSelect from "./simpleSelect";
import "./menu.css"

class Menu extends Component {
    render() {
        return (
            <div className="menu-container">
                <SimpleSelect
                    onAlgoChanged={this.props.onMazeChanged}
                    items={this.props.mazes}
                    label="Maze"
                />
                <SimpleSelect
                    onAlgoChanged = {this.props.onAlgoChanged}
                    items={this.props.algorithms}
                    label="Algorithm"
                />

                <button
                    className='btn-primary'
                    onClick={this.props.onVisualize}>
                    Visualize
                </button>
                <button
                    className='btn-secondary'
                    onClick={this.props.onCreateMaze}>
                    Generate Maze
                </button>
                <button
                    onClick={this.props.onClearPath}
                    className='btn-secondary'>Clear Path</button>
                <button
                    onClick={this.props.onClearBoard}
                    className='btn-secondary'>Clear Board</button>
            </div>

        );
    }
}

export default Menu;