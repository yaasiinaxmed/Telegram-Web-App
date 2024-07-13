import Header from './components/Header';
import Content from './components/Content';
import Navigations from './components/Navigations';

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg">
      <Header />
      <Content />
      <Navigations />
    </div>
  );
};

export default Home;
