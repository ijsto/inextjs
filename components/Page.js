import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

const Page = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <div style={{ maxWidth: "90%", margin: "0 auto", padding: "1rem 0" }}>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Page;
