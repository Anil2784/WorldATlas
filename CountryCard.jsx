import React from "react";
import {Link} from 'react-router-dom'

function CountryCard({ country }) {

    const { flags, name, population, region, capital } = country;

    return (

        <>
       
        <li className="bg-black text-white shadow-lg rounded-2xl overflow-hidden border border-gray-700 transition-transform transform hover:scale-105 hover:shadow-2xl p-6 m-2">
            {/* Country Flag */}
            <img
                src={flags?.png || flags?.svg}
                alt={`${name?.common} flag`}
                className="w-full h-48 object-cover border-b border-gray-700 p-2"
            />

            {/* Country Details */}
            <div className="p-6 space-y-3">
                <h2 className="text-2xl font-bold text-white">
                    {name.common.length > 10 ? name.common.slice(0, 10) + "..." : name.common}
                </h2>

                <p className="text-sm text-gray-300">
                    <strong>Population:</strong> {population.toLocaleString()}
                </p>
                <p className="text-sm text-gray-300">
                    <strong>Region:</strong> {region}
                </p>
                <p className="text-sm text-gray-300">
                    <strong>Capital:</strong> {capital ? capital.join(", ") : "N/A"}
                </p>

                {/* Read More Button */}
                <Link to={`/countryDetails/${name.common}`}>
                <button className="mt-4 px-5 py-2 border border-blue-500 text-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition">
                    Read More
                </button>
                </Link>
            </div>
        </li>
       
        </>
    );
}

export default CountryCard;
