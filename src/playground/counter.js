let count = 0;
const addOne = () => {
  count++;
  renderCounter();
};
const subtractOne = () => {
  count--;
  renderCounter();
};
const reset = () => {
  count = 0;
  renderCounter();
};

const renderCounter = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne} id="my-id" className="button">
        +1
      </button>
      <button onClick={subtractOne}> - 1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounter();
