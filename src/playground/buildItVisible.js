class Visible extends React.Component {
  constructor(props) {
    super(props);
    this.visToggle = this.visToggle.bind(this);
    this.state = {
      vis: false
    };
  }
  visToggle() {
    this.setState(prevState => {
      return {
        vis: !prevState.vis
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.visToggle}>
          {' '}
          {this.state.vis ? 'Hide details' : 'Show details'}
        </button>
        <p>
          {this.state.vis ? 'Hey. These are some details you can now see!' : ''}
        </p>
      </div>
    );
  }
}
ReactDOM.render(<Visible />, document.getElementById('app'));
