import "./App.css"
import {Container} from "./components/index"
import {Header,Hero,Footer,MostPopular,GamingLibrary} from "./Sections/index"

const App = () => {
    return(
        <>
         <Header text = "this is header"  />
         <Container>
            <Hero/>
            <MostPopular/>
            <GamingLibrary/>
         </Container>
         <Footer/>
        </>
    )
}

export default App