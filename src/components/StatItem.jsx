const StatItem = ({ count, title, icon, color, bcg }) => {
  return <article style={{backgroundColor: color}} className="stat-wrapper">
            <header className="stat-header">
              <span className='count'>{count}</span>
              <span className='icon'>{icon}</span>
            </header>
            <h5 className='title'>{title}</h5>
        </article>
}

export default StatItem;