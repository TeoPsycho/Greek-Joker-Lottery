import React, { Component } from 'react';
import Selection from './components/Selection/Selection';
import QuantityButton from './components/QuantityButton/QuantityButton';
import DrawButton from './components/DrawButton/DrawButton';
import selectRandomNumbers from './tzoker';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor() {
    super();
    var howManyOutOf45 = 5;
    var howManyOutOf20 = 1;
    this.state = {
      howManyOutOf45: howManyOutOf45,
      howManyOutOf20: howManyOutOf20,
      outOf45: selectRandomNumbers(howManyOutOf45, 45),
      outOf20: selectRandomNumbers(howManyOutOf20, 20)
    };
    this.global_delay_factor = 1.0;
    this.temporary_global_delay_factor = this.global_delay_factor;
    this.min_global_delay_factor = 0.10;
    this.max_global_delay_factor = 25.0;
    this.activeCalculation = false;
    this.timersID = [];
  }

  updateNumbers = (count = 1, delay = 500) => {
    if (this.activeCalculation === true) {
      alert("Wait until calculation is finished and try again!");
      return
    }
    console.clear();
    this.activeCalculation = true;
    const totalDelay = this.global_delay_factor * delay;
    var outOf45;
    var outOf20;
    for (let i = 1; i <= count; i++) {
      this.timersID.push(setTimeout(() => {
        document.getElementById("counter").innerHTML = i;
        // document.getElementById("timer").innerHTML = tt;
        outOf45 = selectRandomNumbers(this.state.howManyOutOf45, 45);
        outOf20 = selectRandomNumbers(this.state.howManyOutOf20, 20);
        console.log(`${i}: out of 45: (${outOf45}), out of 20: (${outOf20}).`);
        this.setState({ outOf45: outOf45 });
        this.setState({ outOf20: outOf20 });
      }, totalDelay * i));
    }
    let i = count + 1;
    this.timersID.push(setTimeout(() => {
      this.activeCalculation = false;
      console.log('Calculation finished.');
    }, totalDelay * i));
  }

  onButtonClick20 = (event) => {
    this.setState({ howManyOutOf20: parseInt(event.target.value) }, () => this.updateNumbers());
  }

  onButtonClick45 = (event) => {
    this.setState({ howManyOutOf45: parseInt(event.target.value) }, () => this.updateNumbers());
  }

  onStopButtonClick = () => {
    this.timersID.map(timerID => clearTimeout(timerID));
    this.activeCalculation = false;
    this.timersID = [];
    console.log('Calculation stopped.');
  }

  render() {
    return (
      <div className="flex flex-column pa5">
        <div className="tc dib">
          <Selection outOf45={this.state.outOf45} outOf20={this.state.outOf20} />
        </div>
        <div className="tc dib">
          <QuantityButton value={5} onButtonClick={this.onButtonClick45} bgcolor={"blue"} />
          <QuantityButton value={6} onButtonClick={this.onButtonClick45} bgcolor={"blue"} />
          <QuantityButton value={7} onButtonClick={this.onButtonClick45} bgcolor={"blue"} />
          <QuantityButton value={8} onButtonClick={this.onButtonClick45} bgcolor={"blue"} />
        </div>
        <div className="tc dib">
          <QuantityButton value={1} onButtonClick={this.onButtonClick20} bgcolor={"light-red"} />
          <QuantityButton value={2} onButtonClick={this.onButtonClick20} bgcolor={"light-red"} />
          <QuantityButton value={3} onButtonClick={this.onButtonClick20} bgcolor={"light-red"} />
        </div>
        <div className="tc dib">
          <button
            id="counter"
            className="tc f6 dim br3 ph3 pv2 mb2 dib white bg-dark-blue"
            type="button"
          >counter</button>
          <button
            id="timer"
            className="tc f6 dim br3 ph3 pv2 mb2 dib white bg-dark-blue"
            type="button"
          >timer</button>
        </div>
        <div className="tc flex justify-center">
          <DrawButton count={1} onButtonClick={this.updateNumbers} />
          <DrawButton count={5} onButtonClick={this.updateNumbers} />
          <DrawButton count={10} onButtonClick={this.updateNumbers} />
          <DrawButton count={20} onButtonClick={this.updateNumbers} />
          <DrawButton count={50} delay={200} onButtonClick={this.updateNumbers} />
          <DrawButton count={100} delay={10} onButtonClick={this.updateNumbers} />
          <DrawButton count={200} delay={5} onButtonClick={this.updateNumbers} />
          <DrawButton count={500} delay={10} onButtonClick={this.updateNumbers} />
        </div>
        <div className="tc dib">
          <button
            id="StopButton"
            className="f6 link dim br3 ph3 pv2 ma1 mb2 dib white bg-dark-green"
            type="button"
            onClick={() => this.onStopButtonClick()}
          >Stop All Calculations</button>
          <div className="tooltip">
            <input
              id="GDFinput"
              className="input-reset ba b--black-20 pa2 mb2 db w-100"
              type="text"
              placeholder={`Global Delay Factor=${this.global_delay_factor}`}
              size="25"
              onChange={(event) => this.onGDFTextChange(event)}
              onKeyUp={(event) => this.onGDFKeyUp(event)}
            ></input>
            <span id="tooltiptext" className="tooltiptext"></span>
          </div>
          <button
            id="GDFButton"
            className="f6 link dim br3 ph3 pv2 ma1 mb2 dib white bg-dark-green"
            type="button"
            onClick={() => this.onGDFButtonClick()}
          >Global Delay Factor</button>
        </div>
      </div>
    );
  }

  onGDFTextChange = (event) => {
    const value = event.target.value;
    console.log('change', value);
    const tooltip = document.getElementById("tooltiptext");
    const button = document.getElementById("GDFButton");
    if (!isNaN(value) && this.min_global_delay_factor <= value && value <= this.max_global_delay_factor) {
      this.temporary_global_delay_factor = parseFloat(value);
      tooltip.style.visibility = "hidden";
      tooltip.innerHTML = '';
      button.disabled = false;
      button.classList.replace("bg-dark-gray", "bg-dark-green");

    } else {
      tooltip.innerHTML = `Enter a value between ${this.min_global_delay_factor} and ${this.max_global_delay_factor}).`;
      tooltip.style.visibility = "visible";
      button.disabled = true;
      button.classList.replace("bg-dark-green", "bg-dark-gray");
    }
  }

  onGDFKeyUp = (event) => {
    const button = document.getElementById("GDFButton");
    if (event.keyCode === 13 && button.disabled === false) {
      console.log('Enter key pressed!');
      this.onGDFButtonClick()
    }
  }

  onGDFButtonClick = () => {
    const factor = this.temporary_global_delay_factor;
    this.global_delay_factor = factor;
    const inputText = document.getElementById("GDFinput");
    inputText.value = '';
    inputText.placeholder = `Global Delay Factor=${factor}`;
    console.log(`Global Delay Factor updated to new value = ${factor.toFixed(2)}. It will be applied in next calculation.`);
  }
}

export default App;

// upload to Github and make it work
// fix the width and position of the tooltip
// modify the buttons that are not buttons (not to be pressed) to be different
// make the pointer to turn to hand when hovering over a button
// use the button with id "timer" to report the time passed since the button was pressed
// create a delayed tootlip that shows for every button what is the time delay of each calculation