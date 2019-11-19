console.log('App.js is running!');

const appObject = {
  title: 'Indecision',
  subtitle: 'App',
  options: ['One', 'Two']
};

const template = (
  <div>
    <h1>{appObject.title}</h1>
    {appObject.subtitle && <p>{appObject.subtitle}</p>}

    <p>
      {appObject.options.length > 0 ? 'Here are your options' : 'No options'}
    </p>
  </div>
);

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

const appRoot = document.getElementById('app');

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
