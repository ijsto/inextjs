const SingleBook = ({ query }) => {
  return (
    <div className="content">
      <h1>{query.name}</h1>
      <p>Name of the Singlebook {query.name}!</p>
      <h3>This is a dynamic page.</h3>
      <p>
        You can access parameters (params) from the URL pathname to later use in
        you business logic.
      </p>
      <p>For example - use it to fetch data.</p>

      <h3>Here is a query passed from getInitialProps</h3>
      <pre>{JSON.stringify(query)}</pre>
    </div>
  );
};

SingleBook.getInitialProps = async ({ query }) => {
  // Visit https://iJS.to to learn how to use fetch in getInitialProps

  return { query };
};

export default SingleBook;
