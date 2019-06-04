import React, { Component } from 'react'
import ThingListContext from '../../contexts/ThingListContext'
import ThingApiService from '../../services/thing-api-service'
import { Section } from '../../components/Utils/Utils'
import ThingListItem from '../../components/ThingListItem/ThingListItem'
import Mymap from '../../components/GardenModal/filter'
import './ThingListPage.css'


export default class GardenPage extends Component {
  static contextType = GardenContext

  componentDidMount() {
    this.context.clearError()
    ThingApiService.getThings()
      .then(this.context.setThingList)
      .catch(this.context.setError)
  }

  renderThings() {
    const { thingList = [] } = this.context
    return thingList.map(thing =>
      <ThingListItem
        key={thing.id}
        thing={thing}
      />
    )
  }

  render() {
    const { error } = this.context
    return (
      <Section list className='GardenPage'>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderMap()}
      </Section>
    )
  }
}
