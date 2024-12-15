import React, { useState, useEffect, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getCountryIndData } from "../api/postApi";

function CountryDetails() {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryIndData(countryName);
        console.log("API Response:", res.data);

        const countryData = Array.isArray(res.data) ? res.data[0] : res.data;

        if (countryData) {
          setCountry(countryData);
        } else {
          setError("Country not found.");
        }
      } catch (err) {
        console.error("Error fetching country data:", err);
        setError("Failed to load country data.");
      }
    });
  }, [countryName]);

  if (isPending) {
    return <h1 className="text-white text-center mt-20">Loading...</h1>;
  }

  if (error) {
    return <p className="text-red-500 text-center mt-20">{error}</p>;
  }

  if (!country) {
    return <p className="text-white text-center mt-20">Country not found!</p>;
  }

  const { flags, name, population, region, capital } = country;

  return (
    
    <div className="bg-black min-h-screen text-white flex justify-center items-center p-10">
      <div className="max-w-6xl max-h-5xl bg-gray-800 rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row w-full h-full">
        {/* Flag Section */}
        <div className="md:w-1/2">
          {flags?.png || flags?.svg ? (
            <img
              src={flags.png || flags.svg}
              alt={`${name?.common || "Country"} flag`}
              className="w-full h-full object-cover p-2 "
            />
          ) : (
            <p className="text-center text-gray-400">Flag not available</p>
          )}
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 p-6 flex flex-col justify-center border-l border-gray-500 ">
          <h1 className="text-4xl font-bold mb-4">{name?.common || "N/A"}</h1>
          <p className="text-sm text-gray-300 mb-2">
            <strong>Population:</strong> {population?.toLocaleString() || "N/A"}
          </p>
          <p className="text-sm text-gray-300 mb-2">
            <strong>Region:</strong> {region || "N/A"}
          </p>
          <p className="text-sm text-gray-300">
            <strong>Capital:</strong> {capital?.length > 0 ? capital.join(", ") : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
