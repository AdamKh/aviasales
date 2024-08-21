import { useState } from 'react'

import Header from '../header'
import TicketList from '../ticketList'
import Filter from '../filter'
import Tabs from '../tabs'
import LoadMoreButton from '../loadMoreButton'

import classes from './App.module.scss'

export default function App() {
  const [ticketList] = useState([
    {
      price: 13400,
      carrier: 'S7.svg',
      segments: [
        {
          origin: 'MOW',
          destination: 'HKT',
          date: '10:45',
          stops: ['HKG', 'JNB'],
          duration: 1395,
        },
        {
          origin: 'HKT',
          destination: 'MOW',
          date: '11:20',
          stops: ['HKG'],
          duration: 810,
        },
      ],
    },
  ])

  return (
    <div className={classes.app}>
      <Header />
      <div className={classes.asideAndMainWrapper}>
        <Filter />
        <div className={classes.mainWrapper}>
          <Tabs />
          <TicketList ticketList={ticketList} />
          <LoadMoreButton />
        </div>
      </div>
    </div>
  )
}
