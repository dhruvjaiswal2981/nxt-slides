import './index.css'

const SlideItem = props => {
  const {details, slideNumber, onChangeActiveTab, activeTab} = props
  const {id, heading, description} = details

  const name = activeTab.id === id ? 'card-bg' : ''

  const changeActiveTab = () => {
    onChangeActiveTab(id)
  }

  return (
    <li
      className={`item ${name}`}
      onClick={changeActiveTab}
      testid={`slideTab${slideNumber}`}
    >
      <p className="number">{slideNumber}</p>
      <div className="card">
        <h1 className="item-head">{heading}</h1>
        <p className="item-para">{description}</p>
      </div>
    </li>
  )
}

export default SlideItem
