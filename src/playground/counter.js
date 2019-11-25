class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.subtractOne = this.subtractOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0
    };
  }
  addOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  subtractOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }
  reset() {
    this.setState(prevState => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count:{this.state.count} </h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.subtractOne}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounter();
// };
// const subtractOne = () => {
//   count--;
//   renderCounter();
// };
// const reset = () => {
//   count = 0;
//   renderCounter();
// };

// const renderCounter = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne} id="my-id" className="button">
//         +1
//       </button>
//       <button onClick={subtractOne}> - 1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounter();
