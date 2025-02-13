import { Link } from 'react-router-dom';

import Search from "@components/Search.jsx";

const Home = () => {
  return (
    <>
      <section className="ontainer mx-auto sm:w-full md:w-3/4 lg:w-1/2 mt-24">
        <h1 className="text-h1 font-bold leading-tight px-4">
          <span className="block text-gray-200">Hello there</span> How can we help?
        </h1>

        <Link to="/messages" className="bg-gray-700 flex justify-between items-center rounded border border-primary p-4 mt-4">
          <p className="text-sm font-semibold">
            Send us a message
            <span className="block text-gray-300 font-normal">We typically reply within a day</span>
          </p>
          <i className="icon-send text-primary" />
        </Link>
      </section>

      <Search />
    </>
  );
};

export default Home;
