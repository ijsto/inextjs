import Head from 'next/head';

export const Meta = () => {
  return (
    <>
      <Head>
        <title>iJS.to - Modern Javascript Courses</title>

        <link rel="shortcut icon" href="/static/favicon.png" />
        <link rel="stylesheet" type="text/css" href="/static/global.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <style jsx global>{`
        @font-face {
          font-family: 'Comfortaa';
          src: url('/static/font/Comfortaa-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: 'Boogaloo';
          src: url('/static/font/Boogaloo-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        h1,
        h2,
        h3,
        h4 {
          font-family: 'Boogaloo', sans-serif;
        }

        body {
          min-height: 100vh;
          padding-top: 64px;
          position: relative;
        }

        p {
          margin: 1em auto;
        }

        * {
          font-family: 'Comfortaa', sans-serif;
          box-sizing: border-box;
          color: #776677;
          margin: 0;
          padding: 0;
          transition: 0.3s all;
        }

        a:hover {
          color: orange;
        }

        .content {
          padding: 2em 3em;
        }
      `}</style>
    </>
  );
};

export default Meta;
