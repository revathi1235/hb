
import './home.css'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Featured from '../../components/Featured/Featured'
import PropertyList from '../../components/PropertyList/PropertyList'
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties'
import MailList from '../../components/MailList/MailList'
import Footer from '../../components/Footer/Footer'

// import AdminRole from '../../Admin/AdminRole'
function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
       <Featured/>
       <h1 className="homeTitle">Browse by property type</h1>
       <PropertyList/>
       <h1 className="homeTitle">Home guest Love</h1>
       <FeaturedProperties/>
       <MailList/>
       <Footer/>
     
       {/* <AdminRole/> */}
      </div>
      </div>
  )
}

export default Home