import { useContext, useEffect } from 'react'
import DataphoneIcon from '../../IconComponents/DataphoneIcon/DataphoneIcon'
import LinkIcon from '../../IconComponents/LinkIcon/LinkIcon'
import MasterCardIcon from '../../IconComponents/MasterCardIcon/MasterCardIcon'
import VisaIcon from '../../IconComponents/VisaIcon/VisaIcon'
import './InvoiceDetails.scss'
import InvoicesContext from '../../Context/InvoicesContext'

const InvoiceDetails = () => {
  const { invoices, range, getInvoices } = useContext(InvoicesContext)

  useEffect(() => {
    getInvoices()
  }, [])

  const renderSwitch = (param) => {
    switch (param) {
      case '4':
        return <VisaIcon />
      case '5':
        return <MasterCardIcon />
      default:
        return ''
    }
  }

  return (
    <section className='invoice-details'>
      <h1>Tus ventas de {range}</h1>
      <table className='invoices'>
        <thead>
          <tr>
            <th>Transacción</th>
            <th>Fecha y hora</th>
            <th>Método de pago</th>
            <th>ID transacción Bold</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {
            invoices.map(invoice => (
              <tr key={invoice.id}>
                <td invoice-label='Transacción'>
                  <span className='transaction-type'>

                    {
                      invoice.tipoTransaccion === 'datafono'
                        ? <DataphoneIcon />
                        : <LinkIcon />
                    }

                    {invoice.transaccion}
                  </span>
                </td>
                <td invoice-label='Fecha y hora'>
                  {invoice.fechaHora}
                </td>
                <td invoice-label='Método de pago'>
                  <span className='card-type'>
                    {renderSwitch(invoice.metodoPago.charAt(0))}
                    {invoice.metodoPago}
                  </span>
                </td>
                <td invoice-label='ID transacción Bold'>
                  {invoice.IDTransaccion}
                </td>
                <td invoice-label='Monto'>
                  <span pattern='^\$\d{1,3}(,\d{3})*(\.\d+)?$'>
                    {`$${invoice.monto.toFixed(2)}`}
                  </span>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  )
}

export default InvoiceDetails
