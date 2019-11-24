const obj = {
  name: 'Brielle',
  getName() {
    return this.name;
  }
};

class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Let a Computer decide';
    const options = ['Thing one ', 'Thing Two ', 'Thing Three '];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handle pick');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this);
  }
  removeAll() {
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        <button onClick={this.removeAll}>Remove All</button>
        {this.props.options.map(option => (
          <OptionComponents key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

class OptionComponents extends React.Component {
  render() {
    return (
      <div>
        <p>Option: {this.props.optionText}</p>
      </div>
    );
  }
}

class AddOption extends React.Component {
  onFormSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
