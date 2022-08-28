import React, { Fragment } from 'react';
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import { Container } from 'react-bootstrap';
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <main className='py-3'>
          <Container>
            <Routes>

              <Route path='/' element={<HomeScreen />} />
              <Route path='product/:id' element={<ProductScreen />} />
            </Routes>

          </Container>
        </main>
        <Footer />

      </Fragment>

    </Router >
  )
}

export default App