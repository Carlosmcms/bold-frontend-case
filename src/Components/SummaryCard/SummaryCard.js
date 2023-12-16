import { useContext, useEffect } from 'react'
import InvoicesContext from '../../Context/InvoicesContext'
import InfoCircle from '../../IconComponents/InfoCircle/InfoCircle'
import './SummaryCard.scss'

const SummaryCard = () => {
  const { invoices, range, getInvoices } = useContext(InvoicesContext)

  useEffect(() => {
    getInvoices()
  }, [])

  const sumMonto = () => {
    let totalInvoice = 0

    for (const invoice of invoices) {
      totalInvoice += invoice.monto
    }

    return totalInvoice
  }

  return (
    <section className='summary-card'>
      <div id='header'>
        <h1>Total de ventas de {range}</h1>
        <InfoCircle />
      </div>
      <div id='content'>
        <h2>${sumMonto().toFixed(2)}</h2>
        <span className='interval'>Septiembre, 2020</span>
      </div>
    </section>
  )
}

export default SummaryCard
