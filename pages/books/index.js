import Link from 'next/link';

const Books = ({ query }) => {
  return (
    <div className="content">
      <p>The link below is a dynamic NextJS link.</p>

      <h1>Books Catalogue</h1>

      <p>
        <Link href="/b/everybody-writes">
          <a>1. Everybody Writes</a>
        </Link>
      </p>
    </div>
  );
};

Books.getInitialProps = async ({ query }) => {
  // Visit https://iJS.to to learn how to use fetch in getInitialProps

  return { query };
};

export default Books;
