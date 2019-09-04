export default () => (
  <>
    <div className="content">
      <h1>My First NextJS page</h1>
      <div>We did it with iJS.to!</div>

      <a href="https://ijs.to/" target="_blank">
        <h2>Visit iJS.to</h2>
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
