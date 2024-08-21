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
      // Цена в рублях
      price: 13400,
      // Код авиакомпании (iata)
      carrier: 'S7.svg',
      // Массив перелётов.
      // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
      segments: [
        {
          // Код города (iata)
          origin: 'MOW',
          // Код города (iata)
          destination: 'HKT',
          // Дата и время вылета туда
          date: '10:45',
          // Массив кодов (iata) городов с пересадками
          stops: ['HKG', 'JNB'],
          // Общее время перелёта в минутах
          duration: 1395,
        },
        {
          // Код города (iata)
          origin: 'HKT',
          // Код города (iata)
          destination: 'MOW',
          // Дата и время вылета обратно
          date: '11:20',
          // Массив кодов (iata) городов с пересадками
          stops: ['HKG'],
          // Общее время перелёта в минутах
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
