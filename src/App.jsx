

import Home from './pages/Home'
import SideBar from './components/SideBar'

function App() {

  return (
    <> 
    {/* Main Home page */}
    <div className=' max-w-[1200px] mx-auto flex gap-1 lg:px-0 px-5 justify-center'>
      <SideBar/>
      <Home/>
    </div>
    </>
  )
}

export default App
