import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats}) => {
    // console.log(stats);
    return <section className={css.statistics}>
        {title?<h2 className={css.title}>{title}</h2>:""}
        
        <ul className={css.stats_list}>
            {stats.map((stat) =>
                <li className={css.item} key={stat.id}>
                    <span className={css.label}>{stat.label}</span>
                    <span className={css.percentage}>{stat.percentage}</span>
                </li>
            )}
        </ul>
    </section>;
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object)
}
    
export default Statistics;