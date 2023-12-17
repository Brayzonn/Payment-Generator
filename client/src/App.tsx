import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import PaymentLink from './pages/PaymentLink';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="*" element={<Landing />}/>
          <Route path='/' element={<Landing />}/>
          <Route path='/paymentlink' element={<PaymentLink />}/>
      </Routes>
    </Router>
  )
}

export default App
