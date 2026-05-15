import React, { Component } from 'react';
import Bar from './Bar';
import Form from './Form';

// Algorithms
import BubbleSort from '../algorithms/BubbleSort';
import MergeSort from '../algorithms/MergeSort';
import QuickSort from '../algorithms/QuickSort';
import InsertionSort from '../algorithms/InsertionSort';
import SelectionSort from '../algorithms/SelectionSort';

// Icons
import Play from '@material-ui/icons/PlayCircleOutlineRounded';
import Forward from '@material-ui/icons/SkipNextRounded';
import Backward from '@material-ui/icons/SkipPreviousRounded';
import RotateLeft from '@material-ui/icons/RotateLeft';


import '../App.css';

class Sorting extends Component {
	state = {
		array: [],
		arraySteps: [],
		colorKey: [],
		colorSteps: [],
		timeouts: [],
		currentStep: 0,
		barCount: 10,
		delay: 300,
		algorithm: 'Bubble Sort',
	};

	ALGORITHMS = {
		'Bubble Sort': BubbleSort,
		'Merge Sort': MergeSort,
		'Quick Sort': QuickSort,
		'Insertion Sort': InsertionSort,
		'Selection Sort': SelectionSort,
	};

	componentDidMount() {

		this.generateBars();
	}


	setTimeouts = () => {
		let steps = this.state.arraySteps;
		let colorSteps = this.state.colorSteps;

		this.clearTimeouts();
		let timeouts = [];

		let i = 0;

		while (i < steps.length - this.state.currentStep) {
			let timeout = setTimeout(() => {
				let currentStep = this.state.currentStep;
				this.setState({
					array: steps[currentStep],
					colorKey: colorSteps[currentStep],
					currentStep: currentStep + 1,
				});
				timeouts.push(timeout);
			}, this.state.delay * i);
			i++;
		}

		this.setState({
			timeouts: timeouts,
		});
	};

	changeAlgorithm = (e) => {
		this.clearTimeouts();
		this.clearColorKey();
		this.setState(
			{
				algorithm: e.target.value,
				currentStep: 0,
				arraySteps: [
					this.state.arraySteps[
						this.state.currentStep === 0 ? 0 : this.state.currentStep - 1
					],
				],
			},
			() => this.generateSteps()
		);
	};

	clearTimeouts = () => {
		this.state.timeouts.forEach((timeout) => clearTimeout(timeout));
		this.setState({ timeouts: [] });
	};

	clearColorKey = () => {
		let blankKey = new Array(this.state.barCount).fill(0);
		this.setState({ colorKey: blankKey, colorSteps: [blankKey] });
	};

	stepBack = () => {
		let currentStep = this.state.currentStep;

		if (currentStep === 0) return;
		this.clearTimeouts();
		currentStep -= 1;
		this.setState({
			array: this.state.arraySteps[currentStep],
			colorKey: this.state.colorSteps[currentStep],
			currentStep: currentStep,
		})
	};

	stepForward = () => {
		let currentStep = this.state.currentStep;

		if (currentStep >= this.state.arraySteps.length - 1) return;
		this.clearTimeouts();
		currentStep += 1;
		this.setState({
			array: this.state.arraySteps[currentStep],
			colorKey: this.state.colorSteps[currentStep],
			currentStep: currentStep,
		})
	};

	generateSteps = () => {
		let array = this.state.array.slice();
		let steps = this.state.arraySteps.slice();
		let colorSteps = this.state.colorSteps.slice();

		this.ALGORITHMS[this.state.algorithm](array, 0, steps, colorSteps);

		this.setState({
			arraySteps: steps,
			colorSteps: colorSteps,
		});
	};

	generateRandomNumber = (min, max) => {
		return Math.floor(Math.random() * (max - min) + min);
	};

	generateBars = () => {
		this.clearTimeouts();
		this.clearColorKey();

		let barCount = this.state.barCount;
		let arr = [];

		for (let i = 0; i < barCount; i++) {
			arr.push(this.generateRandomNumber(50, 200));
		}

		this.setState(
			{
				array: arr,
				arraySteps: [arr],
				barCount: barCount,
				currentStep: 0,
			},
			() => this.generateSteps()
		);
	};

	changeArray = (index, value) => {
		let array = this.state.array;
		array[index] = value;
		console.log(array);
		this.setState(
			{
				array: array,
				arraySteps: [array],
				currentStep: 0,
			},
			() => this.generateSteps()
		);
	};

	changeBarCount = (e) => {
		this.clearTimeouts();
		this.clearColorKey();
		this.setState(
			{
				barCount: parseInt(e.target.value),
			},
			() => this.generateBars()
		);
	};

	changeSpeed = (e) => {
		this.clearTimeouts();
		this.setState({
			delay: parseInt(e.target.value),
		});
	};

	render() {
		let barsDiv = this.state.array.map((value, index) => (
			<Bar
				key={index}
				index={index}
				length={value}
				color={this.state.colorKey[index]}
				changeArray={this.changeArray}
			/>
		));
		let playButton;

		if (this.state.arraySteps.length === this.state.currentStep) {
			playButton = (
				<button className='btn-primary' onClick={this.generateBars}>
					<RotateLeft />
				</button>
			);
		} else {
			playButton = (
				<button className='btn-primary' onClick={this.setTimeouts}>
					<Play />
				</button>
			);
		}


		return (
			<div className='page-container'>
				<h1 className='page-title'>Sorting Visualizer</h1>
				
				<div className='frame'>
					<div className='bars-container'>{barsDiv}</div>
				</div>
				
				<div className='controls-glass'>
					<div className='control-buttons'>
						<button className='btn-secondary' onClick={this.stepBack}>
							<Backward />
						</button>
						{playButton}
						<button className='btn-secondary' onClick={this.stepForward}>
							<Forward />
						</button>
					</div>

					<div className='divider' style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.1)', margin: '0 10px' }} />

					<Form
						formLabel='Algorithm'
						values={[
							'Bubble Sort',
							'Merge Sort',
							'Quick Sort',
							'Insertion Sort',
							'Selection Sort',
						]}
						labels={[
							'Bubble Sort',
							'Merge Sort',
							'Quick Sort',
							'Insertion Sort',
							'Selection Sort',
						]}
						currentValue={this.state.algorithm}
						onChange={this.changeAlgorithm}
					/>
					<Form
						formLabel='Items'
						values={[10, 15, 20, 25, 30]}
						labels={[10, 15, 20, 25, 30]}
						currentValue={this.state.barCount}
						onChange={this.changeBarCount}
					/>
					<Form
						formLabel='Speed'
						values={[500, 400, 300, 200, 100]}
						labels={['0.5x', '1x', '1.5x', '2x', '3x']}
						currentValue={this.state.delay}
						onChange={this.changeSpeed}
					/>
				</div>
			</div>
		);

	}
}

export default Sorting;
