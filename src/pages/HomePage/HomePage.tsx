
import { useEffect, useRef } from "react"
import Button from "../../components/Button/Button"
import Navbar from "../../components/Navbar/Navbar"
import PlaneOutliner from "../../components/SVGs/PlaneOutliner"
import './HomePage.css'
import { Link } from "react-router-dom"

const HomePage = () => {

  const pageRef = useRef<HTMLElement | null>(null)
  const headingRef = useRef<HTMLDivElement | null>(null);

  useEffect( () => {

    const transitionTimeout = setTimeout( () => {
      pageRef.current?.classList.add('pageLoad')
    }, 500)

    const textTTimeout = setTimeout( () => {

      headingRef.current?.childNodes.forEach( h1 => {

        if( h1 instanceof Element) {
          h1.classList.add('textFadeRight')
        }
      })

    },800)


    return () => {
      clearTimeout(transitionTimeout)
      clearTimeout(textTTimeout)
      
      pageRef.current?.classList.remove('pageLoad')
      headingRef.current?.childNodes.forEach( h1 => {

        if( h1 instanceof Element) {
          h1.classList.remove('textFadeRight')
        }
      })
    }
    
  }, [])


  return (
    <div >
        <header>
            <Navbar />
        </header>
        
        <section ref = {pageRef} className="homepage--container" > 

            <div className="content--container">

              <div ref={headingRef} className="main--heading">
                  <h1  className="home--heading">Design Smarter.</h1>
                  <h1  className="home--heading">Design Better.</h1>
              </div> 

              <Button classnames=" btn--dashboard "><Link to = "/dashboard">Dashboard</Link></Button>
            </div>
            <div className="plane--container">
              <PlaneOutliner />
            </div> 

        </section> 
    </div>
  )
}

export default HomePage