import "./App.css"
import {Header,Container,Hero} from "./components/index"

const App = () => {
    return(
        <>
         <Header text = "this is header"  />
         <Container>
            <Hero/>
         </Container>
        </>
    )
}

export default App