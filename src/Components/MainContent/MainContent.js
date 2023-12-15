import InvoiceDetails from '../InvoiceDetails/InvoiceDetails'
import FilterButton from '../FilterButton/FilterButton'
import RangeSelector from '../RangeSelector/RangeSelector'
import SummaryCard from '../SummaryCard/SummaryCard'
import './MainContent.scss'

const MainContent = () => (
  <section className='main-content'>
    <SummaryCard />
    <div className='controls'>
      <RangeSelector />
      <FilterButton />
    </div>
    <InvoiceDetails />
  </section>
)

export default MainContent
