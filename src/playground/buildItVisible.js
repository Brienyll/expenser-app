let vis = false;

const visToggle = e => {
  vis = !vis;
  renderTemplate();
};

const renderTemplate = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={visToggle}>
        {' '}
        {vis ? 'Hide details' : 'Show details'}
      </button>
      <p>{vis ? 'Hey. These are some details you can now see!' : ''}</p>
    </div>
  );

  ReactDOM.render(template, document.getElementById('app'));
};

renderTemplate();
