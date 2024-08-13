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
      //   // Код авиакомпании (iata)
      //   carrier: string
      //   // Массив перелётов.
      //   // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
      //   segments: [
      //     {
      //       // Код города (iata)
      //       origin: string
      //       // Код города (iata)
      //       destination: string
      //       // Дата и время вылета туда
      //       date: string
      //       // Массив кодов (iata) городов с пересадками
      //       stops: string[]
      //       // Общее время перелёта в минутах
      //       duration: number
      //     },
      //     {
      //       // Код города (iata)
      //       origin: string
      //       // Код города (iata)
      //       destination: string
      //       // Дата и время вылета обратно
      //       date: string
      //       // Массив кодов (iata) городов с пересадками
      //       stops: string[]
      //       // Общее время перелёта в минутах
      //       duration: number
      //     }
      //   ]
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
