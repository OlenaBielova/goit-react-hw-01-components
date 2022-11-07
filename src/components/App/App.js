import logo from '../../logo.svg';
// import 'components/App/App';
import css from './App.css';
import Profile from 'components/Profile/Profile';
import user from '../../user.json';
import Statistics from 'components/Statistics/Statistics';
import data from '../../data.json';

function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics
        title={data.label}
      stats={data.percentage} />
    </div>
  );
}

export default App;
