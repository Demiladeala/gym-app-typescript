import Navbar from '@/scenes/navbar'
import Home from '@/scenes/home'
import Assets from '@/scenes/assets'
import OurSessions from '@/scenes/ourSessions'
import Contact from '@/scenes/contact'
import Footer from '@/scenes/footer'
import { useEffect, useState } from 'react'
import { SelectedPage } from '@/shared/types';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
    );
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY === 0){
          setIsTopOfPage(true);
          setSelectedPage(SelectedPage.Home);
        }
        if (window.scrollY !== 0) setIsTopOfPage(false)
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
      isTopOfPage ={isTopOfPage} 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} 
      />
      <Home
      setSelectedPage={setSelectedPage}  
      />
      <Assets 
      setSelectedPage={setSelectedPage}
      />
      <OurSessions
      setSelectedPage={setSelectedPage}
      />
      <Contact
      setSelectedPage={setSelectedPage}
      />
      <Footer
      />
    </div>
  )
}

export default App
