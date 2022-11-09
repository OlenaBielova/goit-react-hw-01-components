import css from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return <ul className={css.friend_list}>
    {friends.map(friend => 
        <li className={css.item} key={friend.id}>
            {friend.isOnline?<span className={css.status_online}></span>:<span className={css.status_offline}></span>}
            <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{friend.name}</p>
    </li>)
    }
    </ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }))
}

export default FriendList;