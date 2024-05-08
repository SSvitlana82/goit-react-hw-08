import DocumentTitle from "../../components/DocumentTitle";

const HomePage = () => {
  return (
    <div>
      <DocumentTitle>Home</DocumentTitle>

      <div>
        <h1>
          PHONEBOOK{" "}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
