export default () => (
  <>
    <div>
      <h1>Next.js starter</h1>
      <div style={{marginBottom: 64}}>Have fun building - dynamic layout is added!</div>

      <a href="https://ijs.to/" target="_blank">
        <p>Learn code on iJS.to</p>
      </a>
      <ul>
        <li>
          <a href="https://ijs.to/courses/nextjs" target="_blank">
            NextJS
          </a>
        </li>
        <li>
          <a href="https://ijs.to/courses/react" target="_blank">
            React
          </a>
        </li>
        <li>
          <a href="https://ijs.to/courses/graphql" target="_blank">
            GraphQL
          </a>
        </li>
        <li>
          <a href="https://ijs.to/courses/" target="_blank">
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
