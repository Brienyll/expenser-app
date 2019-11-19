'use strict';

console.log('App.js is running!');

var appObject = {
  title: 'Indecision',
  subtitle: 'App',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appObject.title
  ),
  appObject.subtitle && React.createElement(
    'p',
    null,
    appObject.subtitle
  ),
  React.createElement(
    'p',
    null,
    appObject.options.length > 0 ? 'Here are your options' : 'No options'
  )
);

var count = 0;
var addOne = function addOne() {
  count++;
  renderCounter();
};
var subtractOne = function subtractOne() {
  count--;
  renderCounter();
};
var reset = function reset() {
  count = 0;
  renderCounter();
};

var appRoot = document.getElementById('app');

var renderCounter = function renderCounter() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne, id: 'my-id', className: 'button' },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: subtractOne },
      ' - 1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'Reset'
    )
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounter();
