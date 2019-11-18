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

const user = {
  age: 3,
  location: 'Los Angeles'
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  } else {
    return 'Unknown';
  }
}

const template2 = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
