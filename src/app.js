class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Your life in the hands of a Computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Options Component</p>
        <OptionComponents />
      </div>
    );
  }
}

class OptionComponents extends React.Component {
  render() {
    return <p> Option Components </p>;
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <p> AddOption Component</p>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
