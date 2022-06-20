import Header from '../components/Header';
import Card from '../components/Card';
import Title from '../components/Title';

const WorldPage = ({allCountriesData}) => {
  return (
    <div className="world-page-container">
      <div>
        <Header />
        <Title />
        <Card allCountriesData={allCountriesData} />
      </div>
  </div>

  );
};

export default WorldPage;