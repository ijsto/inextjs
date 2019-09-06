export default () => (
  <>
    <div className="content">
      <h1 className="title" style={{}}>
        My First NextJS page
      </h1>
      <div>Time to iJS.to build stuff!</div>

      <a href="https://ijs.to/" target="_blank">
        <h3 className="title">Other courses</h3>
        <h2 className="title">on iJS.to</h2>
      </a>
      <ul>
        <li>
          <a href="https://ijs.to/" target="_blank">
            NextJS
          </a>
        </li>
        <li>
          <a href="https://ijs.to/" target="_blank">
            React
          </a>
        </li>
        <li>
          <a href="https://ijs.to/" target="_blank">
            GraphQL
          </a>
        </li>
        <li>
          <a href="https://ijs.to/" target="_blank">
            and other courses
          </a>
        </li>
      </ul>
    </div>

    <style jsx>{`
      h1 {
        margin: 1em auto 0.25em;
      }
      h2 {
        margin: 0 auto 0.75em auto;
        font-size: 2.5em;
      }
      h3 {
        margin: 1em auto 0;
      }

      a {
        margin: 1em auto;
      }
      .title {
        font-family: 'Boogaloo', sans-serif;
      }
      div {
        text-align: center;
      }
      ul {
        margin: 2em;
      }
      li {
        display: inline;
        padding: 1em;
        margin-left: 2em;
      }
    `}</style>
  </>
);
