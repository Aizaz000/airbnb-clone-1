import React, { useState, useContext } from 'react';        // Importing React and necessary React hooks
import { ListingContext } from '../context/ListingContext'; // Importing the ListingContext for shared state

// SearchBar component: renders a search bar with functional input and search button
const SearchBar = () => {
  const [search, setSearch] = useState("");          // State to hold the search input value
  const { setListing } = useContext(ListingContext); // Accessing the setListing function from ListingContext

  // Function to handle search button click
  const handleSearch = () => {
    setListing(search); // Update the shared listing state with the current search input value
  };

  return (
    <div style={styles.bar}>
      <input
        type="text"                                 // Input field for the search query
        style={styles.input}                        // Applying custom styles to the input
        placeholder="Search for a location..."      // Placeholder text when input is empty
        value={search}                              // Bind the input value to the state
        onChange={(e) => setSearch(e.target.value)} // Update the state as the user types
      />
      <button style={styles.search} onClick={handleSearch}>Search</button>
    </div>
  );
};

// Styles object to customize the appearance of the search bar and input elements
const styles = {
  bar: {
    display: 'flex',          // Use flexbox to align items
    justifyContent: 'center', // Center align the content
    padding: '20px',          // Add padding around the container
    gap: '20px',              // Add space between the input and button
  },
  input: {
    width: '600px',           // Set a specific width for the input
    minWidth: '100px',        // Set a minimum width for responsiveness
    padding: '10px',          // Padding inside the input field
    border: '1px solid #ccc', // Light gray border color
    borderRadius: '8px',      // Rounded corners for the input
    fontSize: '16px',         // Font size for the input text
    textAlign: 'left',        // Align text to the left inside the input
    cursor: 'text',           // Display a text cursor inside the input
  },
  search: {
    width: '190px',           // Set a specific width for the search button
    minWidth: '100px',        // Set a minimum width for responsiveness
    padding: '10px',          // Padding inside the button
    border: '1px solid #ccc', // Light gray border color
    borderRadius: '8px',      // Rounded corners for the button
    fontSize: '16px',         // Font size for the button text
    textAlign: 'center',      // Center align the text inside the button
    cursor: 'pointer',        // Display a pointer cursor on hover to indicate it is clickable
  },
}

export default SearchBar; // Export the SearchBar component for use in other parts of the application