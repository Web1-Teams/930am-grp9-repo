import Header from './components/Header/header';
import BestSellers from './components/BestSellers/BestSellers';
import WhyNaturalStoreA from './components/WhyNaturalStoreA/A';
import WhyNaturalStoreB from './components/WhyNaturalStoreB/B';
function Home() {
    return (
      <div classNameName="home-page">
        <Header />
        <BestSellers />
        <WhyNaturalStoreA />
        <WhyNaturalStoreB />


      </div>
    );
  }
  
  export default Home;