import React from 'react';
import CountryFact from '../api/CountryData';
function About() {
  return (
    <>
      <div className="p-8 bg-black gap-4 ">
        <div className="mb-6 ">
          <h1 className="text-3xl font-semibold text-white text-center">Here are the Interesting Facts <br /> We're proud of</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map Method  */}
          {CountryFact.map((country) => {
            const { id, countryName, capital, population, interestingFact } = country
            return (

              <div id="card-1" className="card bg-gray-950 text-white p-6 rounded-3xl shadow-3xl to-transparent border-slate-950" key={id}>
                <p className="card-title text-xl font-bold">{countryName}</p>
                <p>
                  <span className="card-description">{capital}</span>
                </p>
                <p>
                  <span className="card-population">{population}</span>
                </p>
                <p>
                  <span className="card-Interestingfact">{interestingFact}</span>
                </p>
              </div>

            )
          })}


        </div>
      </div>
    </>
  );
}

export default About;
