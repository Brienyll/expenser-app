'use strict';

var vis = false;

var visToggle = function visToggle(e) {
  vis = !vis;
  renderTemplate();
};

var renderTemplate = function renderTemplate() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: visToggle },
      ' ',
      vis ? 'Hide details' : 'Show details'
    ),
    React.createElement(
      'p',
      null,
      vis ? 'Hey. These are some details you can now see!' : ''
    )
  );

  ReactDOM.render(template, document.getElementById('app'));
};

renderTemplate();
