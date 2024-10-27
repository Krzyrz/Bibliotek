import Kotek from './kotek';
import './stylik.css';

const HomePage = () => {
  return (
    <div className="head">
      <header className="header">
        <h1>Dzien Dobry</h1>
        <p>Stronka react</p>
      </header>
      <section className="main">
        <h2>React</h2>
        <p>React jest super!</p>
      </section>
      <footer className="stopa">
        <p>😉😉😉</p>
        <Kotek/>
      </footer>
    </div>
  );
};

export default HomePage;