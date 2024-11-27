import React, { createContext, useState } from 'react'; // Import React and necessary hooks from the 'react' package

// Create a new context named 'ListingContext' that will be used to share state across components
export const ListingContext = createContext();

// Define a provider component that will wrap around the components needing access to the context
export const ListingProvider = ({ children }) => {
  // Declare a state variable 'listing' with an initial value of an empty string.
  // 'setListing' is the function to update this state.
  const [listing, setListing] = useState(""); // Shared state

  return (
    // The context provider allows other components within it to access and modify the 'listing' state
    <ListingContext.Provider value={{ listing, setListing }}>
      {children} {/* The 'children' prop allows this provider to wrap any child components that need access to the context */}
    </ListingContext.Provider>
  );
};