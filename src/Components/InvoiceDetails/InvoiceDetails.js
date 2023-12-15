import DataphoneIcon from '../../IconComponents/DataphoneIcon/DataphoneIcon'
import LinkIcon from '../../IconComponents/LinkIcon/LinkIcon'
import MasterCardIcon from '../../IconComponents/MasterCardIcon/MasterCardIcon'
import VisaIcon from '../../IconComponents/VisaIcon/VisaIcon'
import './InvoiceDetails.scss'

const InvoiceDetails = () => (
  <section className='invoice-details'>
    <h1>Tus ventas de septiembre</h1>
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
        <tr>
          <td invoice-label='Transacción'>
            <span className='transaction-type'>
              <DataphoneIcon />
              Cobro exitoso
            </span>
          </td>
          <td>06/06/2020 - 17:15:10</td>
          <td>
            <span className='card-type'>
              <MasterCardIcon />
              **** **** **** 7711
            </span>
          </td>
          <td>GZEN23784UBV2</td>
          <td>$25000</td>
        </tr>
        <tr>
          <td>
            <span className='transaction-type'>
              <LinkIcon />
              Cobro exitoso
            </span>
          </td>
          <td>06/06/2020 - 17:15:10</td>
          <td>
            <span className='card-type'>
              <VisaIcon />
              **** **** **** 7711
            </span>
          </td>
          <td>GZEN23784UBV2</td>
          <td>$25000</td>
        </tr>
        <tr>
          <td>Cobro exitoso</td>
          <td>06/06/2020 - 17:15:10</td>
          <td>**** **** **** 7711</td>
          <td>GZEN23784UBV2</td>
          <td>$25000</td>
        </tr>
        <tr>
          <td>Cobro exitoso</td>
          <td>06/06/2020 - 17:15:10</td>
          <td>**** **** **** 7711</td>
          <td>GZEN23784UBV2</td>
          <td>$25000</td>
        </tr>
        <tr>
          <td>Cobro exitoso</td>
          <td>06/06/2020 - 17:15:10</td>
          <td>**** **** **** 7711</td>
          <td>GZEN23784UBV2</td>
          <td>$25000</td>
        </tr>
        <tr>
          <td>Cobro exitoso</td>
          <td>06/06/2020 - 17:15:10</td>
          <td>**** **** **** 7711</td>
          <td>GZEN23784UBV2</td>
          <td>$25000</td>
        </tr>
      </tbody>
    </table>
  </section>
)

export default InvoiceDetails
