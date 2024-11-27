import React from 'react'; // Importing React

// ListingCard component: Displays a listing with an image, title, rating, type, details, and pricing
const ListingCard = ({ title, type, details, pricing, rating, image }) => {
  return (
    // Main container for the listing card
    <div style={styles.card}>
      <img style={styles.image} src={image} alt="Image" /> {/* Displaying the image of the listing */}
      <div style={styles.title}>                           {/* Container for the title and rating */}
        <h3>{title}</h3>                                   {/* Displaying the title of the listing */}
        <p>{rating}</p>                                    {/* Displaying the rating */}
      </div>
      <div style={styles.details}>                         {/* Container for listing details like type, description, and pricing */}
        <p>{type}</p>                                      {/* Displaying the type of the listing (e.g., "Cabin", "Beachfront") */}
        <p>{details}</p>                                   {/* Displaying additional details or description of the listing */}
        <p>{pricing}</p>                                   {/* Displaying pricing information */}
      </div>
    </div>
  );
};

// Styles object to define the appearance and layout of the ListingCard component
const styles = {
  card: {
    height: 'auto',                  // Allow card height to adjust based on content
    width: 'auto',                   // Allow card width to adjust based on content
    maxWidth: '350px',               // Limit the maximum width of the card to 350px
    padding: '8px',                  // Padding inside the card for spacing
    border: '1px solid #ccc',        // Light gray border around the card
    borderRadius: '8px',             // Rounded corners for the card
    backgroundColor: 'snow',         // Set background color of the card to a light snow color
    fontSize: '12px',                // Set a small font size for the content
    lineHeight: '1',                 // Set line height to adjust spacing between lines (for better text density)
    cursor: 'pointer',               // Change cursor to pointer when hovering over the card (indicating interactivity)
  },
  image: {
    height: '170px',                 // Set fixed height for the image
    width: '100%',                   // Make the image width span the full width of the card
    borderRadius: '8px',             // Round the corners of the image for a smoother look
  },
  title: {
    display: 'flex',                 // Use flexbox to position title and rating side by side
    justifyContent: 'space-between', // Add space between the title and the rating
    margin: '3px',                   // Margin around the title container
  },
  details: {
    margin: '3px',                   // Margin around the details section of the card
  },
};

export default ListingCard; // Export the ListingCard component for use in other parts of the application