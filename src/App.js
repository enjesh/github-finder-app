
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import User from './pages/User'
import NotFound from './pages/NotFound'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import { GithubContextProvider } from "./components/context/github/GithubContext"


function App() {
  return (
   <GithubContextProvider>
     <Router>
     <div className="App">
     <Navigation />
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/user/:login" element={<User/>} />
        <Route exact path="/notfound" element={<NotFound/>} />
        <Route exact path="/*" element={<NotFound/>} />
        </Routes>
        <Footer />
     </div>
     </Router>
     </GithubContextProvider>

  );
}

export default App;
