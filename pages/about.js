export const About = () => {
  return (
    <div className="content">
      <h1>About Page</h1>
      <p>
        NextJS is a framework that makes it easy to create Universal web apps in
        React.
      </p>
      <p>
        With Next.js, React pages are automatically rendered on both client and
        server side, without the hassle of setting up dependancies like webpack
        or babel and with automatic routing.{" "}
      </p>
      <p>
        This is a simple starter project intended as a base for any other iJS
        starter boilerplate/starter projects.
      </p>
      <h2>Get Started in (3 minutes)</h2>
      <ul>
        <li>
          1. Clone the the{" "}
          <a href="https://github.com/ijsto/inextjs">starter repo</a>
          <p>
            <code>git clone git@github.com:ijsto/inextjs.git</code>
          </p>
        </li>
        <li>
          2. Enter the directory
          <p>
            <code>cd inextjs</code>
          </p>
        </li>
        <li>
          3. Install project dependencies
          <p>
            <code>npm install</code> or <code>npm i</code>
          </p>
        </li>
        <li>
          To run the project locally:
          <p>
            <code>npm run dev</code>
          </p>
        </li>
        <li>
          Starter project is live at:{" "}
          <a href="http://localhost:3000">http://localhost:3000</a>
        </li>
      </ul>

      <h2>The starter is now ready - have fun!</h2>
      <style jsx>{`
        * {
          line-height: 1.5;
        }
        code {
          padding: 0.2em 0.4em;
          margin: 0;
          font-size: 85%;
          background-color: rgba(27, 31, 35, 0.05);
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
};

export default About;
