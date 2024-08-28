import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';

const Results = () => {
  const location = useLocation();
  const [data, setData] = useState(location.state.data);
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      setIsLoading(true);
      if (data) {
        try {
          const response = await axios.post('http://localhost:5000/search', data, {
            headers: { 'Content-Type': 'application/json' },
          });
          setResults(response.data.vacation_spots);
        } catch (error) {
          console.error('Error fetching results:', error);
          setResults([{ name: "API Error", description: "There was an error fetching your request. Please try again." }]);
        } finally {
          setIsLoading(false);
        }
      }
    };
      

    fetchData();
  }, [data]);

  return (
    <>
      <div className="mt-[115px] mx-5 lg:mx-20  ">
        {isLoading ? (
          <>
            <h2 className="text-2xl font-bold mb-5 animate-pulse text-slate-800 text-center m-5">
              Parsing Results....
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 sm:m-0 lg:m-5">
              {Array(6).fill(<Loader />)}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-5 text-slate-300 text-center m-5">
              Here are Your Results ;)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 sm:m-0 lg:m-5">
              {results ? (
                results.map((result, index) => (
                  <div
                key={index}
                className={`bg-slate-300 bg-opacity-50 hover:bg-opacity-90 backdrop-blur-[12px] rounded-md shadow-md overflow-hidden m-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-slate-100`}
            >
                <div className="p-5 pb-3">
                    <a href={result.link} target="_blank">
                        <h5 className="text-xl font-bold mb-3 text-slate-900">{result.name}</h5>
                        <p className="text-gray-700 text-sm mb-2">
                        <span className="text-slate-800 font-bold">Description: </span>
                        {result.description}
                        </p>
                        {result.travel ? (
                        <p className="text-gray-700 text-sm mb-2">
                            <span className="text-slate-800 font-bold">Travel: </span>
                            {result.travel}
                        </p>
                        ) : (
                        <> </>
                        )}
                        {result.stay ? (
                        <p className="text-gray-700 text-sm mb-2">
                            <span className="text-slate-800 font-bold">Stay Options: </span>
                            {result.stay}
                        </p>
                        ) : (
                        <> </>
                        )}
                        {result.budget ? (
                        <>
                            <p className="text-gray-700 text-sm mb-2">
                            <span className="text-slate-800 font-bold">Budget (est.): </span>
                            {result.budget}
                            </p>
                        </>
                        ) : (
                        <> </>
                        )}
                    </a>
                    
                </div>
            </div>
                ))
              ) : (
                <p className="text-xl font-semibold text-slate-800">No results found.</p>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Results;