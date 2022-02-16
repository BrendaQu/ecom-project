import './App.css';
import CarouselLanding from './components/CarouselLanding';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import NavBarDefault from './components/NavBarDefault';
import PaymentForm from './components/PaymentForm';
import ProductCards from './components/ProductCards';
import ProductList from './components/ProductList';
import RegisterForm from './components/RegisterForm';
import ShippingForm from './components/ShippingForm';

function App() {
  return (
    <div className="App">
      <NavBarDefault/>
      {/* <LoginForm /> */}
      <CarouselLanding />
      {/* <RegisterForm />
      <PaymentForm />
      <ShippingForm /> */}
      {/* <ProductList /> */}
      {/* <ProductCards /> */}
      <Footer />
    </div>
  );
}

export default App;
