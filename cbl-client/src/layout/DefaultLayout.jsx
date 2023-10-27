import Footer from '../components/Footer';

const DefaultLayout = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;