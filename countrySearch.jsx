import React, { useState, useEffect } from "react";
import axios from "axios";

// API Configuration
const api = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

function CountrySearch() {
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [countries, setCountries] = useState([]); // Stores all countries
  const [filteredCountries, setFilteredCountries] = useState([]); // Filtered and displayed countries
  const [searchTerm, setSearchTerm] = useState(""); // Search input value
  const [region, setRegion] = useState("All"); // Selected region filter

  // Fetch all country data when the component loads
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await api.get(
          "/all?fields=name,population,region,capital,flags"
        );
        setCountries(response.data);
        setFilteredCountries(response.data); // Default to all countries
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  // Handle search functionality
  const handleSearch = () => {
    const searchResults = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(searchResults);
  };

  // Handle ascending sort
  const handleSortAsc = () => {
    const sorted = [...filteredCountries].sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
    setFilteredCountries(sorted);
  };

  // Handle descending sort
  const handleSortDesc = () => {
    const sorted = [...filteredCountries].sort((a, b) =>
      b.name.common.localeCompare(a.name.common)
    );
    setFilteredCountries(sorted);
  };

  // Handle region filter
  const handleRegionChange = (selectedRegion) => {
    setRegion(selectedRegion);
    if (selectedRegion === "All") {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter(
        (country) => country.region === selectedRegion
      );
      setFilteredCountries(filtered);
    }
  };

  return (
    <>
      <div className="p-6">
        {/* Search and Filter Controls */}
        <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by country name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {/* ASC Button */}
          <button
            onClick={handleSortAsc}
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
          >
            ASC
          </button>

          {/* DESC Button */}
          <button
            onClick={handleSortDesc}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition"
          >
            DESC
          </button>

          {/* Dropdown for Continents */}
          <select
            value={region}
            onChange={(e) => handleRegionChange(e.target.value)}
            className="w-full md:w-auto p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        {/* Display Country Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCountries.map((country) => (
            <div
              key={country.name.common}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-105"
            >
              {/* Country Flag */}
              <img
                src={country.flags.png}
                alt={`${country.name.common} flag`}
                className="w-full h-40 object-cover"
              />
              {/* Country Details */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {country.name.common}
                </h3>
                <p className="text-sm text-gray-600">
                  <strong>Population:</strong>{" "}
                  {country.population.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Region:</strong> {country.region}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Capital:</strong>{" "}
                  {country.capital ? country.capital.join(", ") : "N/A"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CountrySearch;
