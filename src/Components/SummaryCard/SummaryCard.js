import InfoCircle from '../../IconComponents/InfoCircle/InfoCircle'
import './SummaryCard.scss'

const SummaryCard = () => (
  <section className='summary-card'>
    <div id='header'>
      <h1>Total de ventas de septiembre</h1>
      <InfoCircle />
    </div>
    <div id='content'>
      <h2>$1'560.000</h2>
      <span className='interval'>Septiembre, 2020</span>
    </div>
  </section>
)

export default SummaryCard
