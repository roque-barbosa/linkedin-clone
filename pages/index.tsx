import type { NextPage } from 'next'
import Body from '../components/Body/Body'
import Feed from '../components/Feed/Feed'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import Widgets from '../components/Widgets/Widgets'

const Home: NextPage = () => {
  return (
    <div className=''>
      {/* Header */}
      <Header />

      {/* App Body */}
      <Body />
    </div>
  )
}

export default Home
