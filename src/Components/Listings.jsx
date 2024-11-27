import React from 'react';               // Importing React
import ListingCard from './ListingCard'; // Importing ListingCard to render each listing

// Listings component: Displays a list of property listings using the ListingCard component
const Listings = ({ data }) => {
  return (
    <div style={styles.center}>                    {/* Container to center the listings */}
      <div style={styles.listings}>                {/* Grid container for all listings */}
        {data.map((listing, index) => (            // Maps over the listing array
          <ListingCard key={index} {...listing} /> // Renders a MovieItem for each movie, spreading movie properties as props
        ))}
      </div>
    </div>
  );
};

// Styles object: Defines the layout and design of the Listings component
const styles = {
  center: {
    display: 'flex',                                             // Use flexbox for centering the listings container
    justifyContent: 'center',                                    // Horizontally center the listings container
    padding: '20px',                                             // Padding around the listings container
  },
  listings: {
    display: 'grid',                                             // Use CSS Grid to layout the individual listing cards
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', // Automatically adjust the number of columns based on available space; each column has a minimum width of 200px
    width: '100%',                                               // Ensure listings container spans the full width of the parent container
    maxWidth: '1000px',                                          // Limit the maximum width of the listings container to 1000px
    gap: '30px',                                                 // Add spacing between individual listing cards
  },
};

export default Listings; // Export the Listings component for use in other parts of the application