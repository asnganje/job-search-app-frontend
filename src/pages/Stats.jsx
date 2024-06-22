import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';
import StatItem from '../components/StatItem';
const Stats = () => {
  return(
    <div className='stats-container'>
      <StatItem color = "#e9b949" title="current users" count={3} icon={<FaCalendarCheck />}/>
      <StatItem color = "#99a3ca" title="total jobs" count={2} icon={<FaSuitcaseRolling />}/>
    </div>
  )
}

export default Stats;