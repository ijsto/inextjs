export const About = () => {
  return (
    <div>
      <h1>About Page</h1>

      <p>
        <a href="https://ijs.to/p/what-is-next.js" target="_blank">
          Learning how to build apps with Next.js!
        </a>
      </p>
      <p>
        This project is intended as a base for any other{" "}
        <a href="https://ijs.to" target="_blank">
          iJS.to
        </a>{" "}
        or your own starter projects to eliminate the boilerplate.
      </p>
      <h2>Get Started in 3 minutes</h2>
      <ul>
        <li>
          1. Clone the the{" "}
          <a href="https://github.com/ijsto/inextjs">starter repo</a>.<br />
          You can simple copy-paste the below line into your Terminal.
          <p>
            <code>git clone https://github.com/ijsto/inextjs.git</code>
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
            <code>yarn</code> or <code>npm install</code> or <code>npm i</code>
          </p>
        </li>
        <li>
          To run the project locally:
          <p>
            <code>yarn dev</code> or <code>npm run dev</code>
          </p>
        </li>
        <li>
          Starter project is live at:{" "}
          <a href="http://localhost:3000">http://localhost:3000</a>
        </li>

        <li>
          Live demo: <a href="http://inextjs.now.sh/">inextjs.now.sh</a>
        </li>
      </ul>

      <h2 style={{marginTop: 32}}>The starter is now ready - have fun!</h2>
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
