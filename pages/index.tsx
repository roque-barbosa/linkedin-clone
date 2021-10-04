import type { NextPage } from 'next'
import Body from '../components/Body/Body'
import Header from '../components/Header/Header'

const Home: NextPage = () => {
  return (
    <div className='
      bg-gray-100
    '>
      {/* Header */}
      <Header />

      {/* App Body */}
      <Body />
    </div>
  )
}

export default Home
