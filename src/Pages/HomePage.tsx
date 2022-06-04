import Header from '../Components/UI/Header'
import Hero from '../Components/MainPage/Hero'
import HowItWorks from '../Components/MainPage/HowItWorks'

import TypeChoice from '../Components/MainPage/TypeChoice'
import Categories from '../Components/MainPage/Categories'
import AboutFreelancing from '../Components/MainPage/AboutFreelancing'
import Footer from '../Components/UI/Footer'



const HomePage = () => {
    return (
        <>
            <Header />
            <Hero />
            <HowItWorks />
            <Categories />
            <TypeChoice />
            <AboutFreelancing />
            <Footer />
        </>
    )
}

export default HomePage