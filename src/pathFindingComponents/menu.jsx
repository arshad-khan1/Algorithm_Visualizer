import React, {Component} from 'react';
import SimpleSelect from "./simpleSelect";
import "./menu.css"

class Menu extends Component {
    render() {
        return (
            <nav className="nav alert-dark" >
                <SimpleSelect
                    onAlgoChanged = {this.props.onAlgoChanged}
                    items={this.props.algorithms}
                />
                {/* <SimpleSelect
                    onAlgoChanged={this.props.onMazeChanged}
                    items={this.props.mazes}
                /> */}
                <button
                    className='button1 '
                    onClick={this.props.onCreateMaze}>
                    Create Maze
                </button>
                <button
                    onClick={this.props.onVisualize}
                    className="button2 "
                >Visualize</button>
                <button
                    onClick={this.props.onClearPath}
                    className='button3 '>Clear Path</button>
                <button
                    onClick={this.props.onClearBoard}
                    className='button4 '>Clear Board</button>
            </nav>
        );
    }
}

export default Menu;