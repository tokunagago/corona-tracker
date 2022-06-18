import Card from '../components/Card';

const WorldPage = (props) => {
  return (
    <div className="top-page-container">
      <div>
        <Card getAllCountriesData={props.getAllCountriesData} allCountriesData={props.allCountriesData} />
      </div>
  </div>

  );
};

export default WorldPage;