import InvoiceDetails from '../InvoiceDetails/InvoiceDetails'
import FilterButton from '../FilterButton/FilterButton'
import RangeSelector from '../RangeSelector/RangeSelector'
import SummaryCard from '../SummaryCard/SummaryCard'

import './MainContent.scss'

import InvoicesState from '../../Context/InvoicesState'

// import transacciones from '../../scss/data'

const MainContent = () => {
  return (
    <main className='main-content'>
      <InvoicesState>
        <div className='content-header'>
          <SummaryCard />
          <div className='controls'>
            <RangeSelector />
            <FilterButton />
          </div>
        </div>
        <InvoiceDetails />
      </InvoicesState>
    </main>
  )
}

export default MainContent
