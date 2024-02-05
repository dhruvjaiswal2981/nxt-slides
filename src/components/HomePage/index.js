import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from '../Header'
import SlideItem from '../SlideItem'
import './index.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class HomePage extends Component {
  state = {
    initialList: initialSlidesList,
    activeTab: initialSlidesList[0],
    headChange: false,
    paraChange: false,
  }

  renderListItems = () => {
    const {initialList, activeTab} = this.state
    return (
      <ol className="items-list">
        {initialList.map(each => {
          const index = initialList.indexOf(each)

          return (
            <SlideItem
              details={each}
              key={each.id}
              slideNumber={index + 1}
              onChangeActiveTab={this.onChangeActiveTab}
              activeTab={activeTab}
            />
          )
        })}
      </ol>
    )
  }

  onAddItem = () => {
    const {activeTab, initialList} = this.state
    const index = initialList.indexOf(activeTab)

    const object = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }

    const newList = [...initialList]
    newList.splice(index + 1, 0, object)
    this.setState({initialList: newList, activeTab: newList[index + 1]})
  }

  renderButton = () => (
    <div className="button-container">
      <button type="button" className="button" onClick={this.onAddItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
          alt="new plus icon"
          className="icon"
        />
        New
      </button>
    </div>
  )

  onChangeActiveTab = id => {
    const {initialList} = this.state
    const item = initialList.findIndex(eachItem => id === eachItem.id)
    this.setState({activeTab: initialList[item]})
  }

  changeHead = () => {
    this.setState({headChange: true})
  }

  changePara = () => {
    this.setState({paraChange: true})
  }

  editHeading = event => {
    const {activeTab} = this.state
    const tab = activeTab
    tab.heading = event.target.value
    this.setState({activeTab: tab})
  }

  editDescription = event => {
    const {activeTab} = this.state
    const tabPara = activeTab
    tabPara.description = event.target.value
    this.setState({activeTab: tabPara})
  }

  setPara = event => {
    const {initialList, activeTab} = this.state

    const ind = initialList.indexOf(activeTab)
    const modifiedList = [...initialList]

    modifiedList[ind].description = event.target.value

    this.setState({initialList: modifiedList, paraChange: false})
  }

  setHead = event => {
    const {initialList, activeTab} = this.state

    const ind = initialList.indexOf(activeTab)
    const modifiedList = [...initialList]

    modifiedList[ind].heading = event.target.value

    this.setState({initialList: modifiedList, headChange: false})
  }

  renderContent = () => {
    const {activeTab, headChange, paraChange} = this.state
    const {heading, description} = activeTab

    return (
      <div className="content-container">
        {headChange ? (
          <input
            value={heading}
            className="card-head"
            onChange={this.editHeading}
            onBlur={this.setHead}
          />
        ) : (
          <h1 className="card-head" onClick={this.changeHead}>
            {heading}
          </h1>
        )}
        {paraChange ? (
          <input
            value={description}
            className="card-para"
            onChange={this.editDescription}
            onBlur={this.setPara}
          />
        ) : (
          <p className="card-para" onClick={this.changePara}>
            {description}
          </p>
        )}
      </div>
    )
  }

  renderPage = () => (
    <div className="content1">
      {this.renderButton()}
      <div className="content2">
        {this.renderListItems()}
        {this.renderContent()}
      </div>
    </div>
  )

  render() {
    return (
      <div className="main-container">
        <Header />
        {this.renderPage()}
      </div>
    )
  }
}

export default HomePage
