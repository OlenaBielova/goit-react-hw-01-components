import logo from '../../logo.svg';
// import 'components/App/App';
import css from './App.css';
import Profile from 'components/Profile/Profile';
import user from 'user.json';
import Statistics from 'components/Statistics/Statistics';
import data from 'data.json';
import FriendList from 'components/FriendList/FriendList';
import friends from 'friends.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from 'transactions.json';

function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  )
}

export default App;
