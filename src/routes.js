import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import QuemSomos from './pages/QuemSomos'
import Contato from './pages/Contato'
import Erro from './pages/Erro'

function RoutesApp() {
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/QuemSomos" element={<QuemSomos />} />
        <Route path="/Contato" element={<Contato />} />
        // Página 404 personalizada
        <Route path="*" element={<Erro />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default RoutesApp