import React, { useContext } from 'react';                  // Importing React and useContext hook
import { ListingContext } from '../context/ListingContext'; // Importing ListingContext to manage shared state

// Navbar component: renders a navigation bar with logo, and functional tabs and login/signup options
const Navbar = () => {
  const { setListing } = useContext(ListingContext); // Accessing setListing from the ListingContext to update shared listing state

  return (
    <div style={styles.navbar}>    {/* Main container for the navbar */}
      <div style={styles.logodiv}> {/* Logo container with logo image */}
        <img 
          src="https://cdn.icon-icons.com/icons2/2699/PNG/512/airbnb_logo_icon_170606.png" 
          alt="logo" 
          style={styles.logo} 
        />
      </div>
      <div style={styles.tabs}>                                                            {/* Navigation tabs: Home, Experiences, and Online */}
        <div style={styles.tab} onClick={() => setListing("")}>Home</div>                  {/* Clicking on 'Home' sets the listing state to empty; shocasing all items */}
        <div style={styles.tab} onClick={() => setListing("Experience")}>Experiences</div> {/* Clicking on 'Experiences' updates the listing state */}
        <div style={styles.tab} onClick={() => setListing("Online")}>Online</div>          {/* Clicking on 'Online' updates the listing state */}
      </div>
      <div style={styles.menu}>                 {/* Menu section with Login and Signup options */}
        <div style={styles.login}>Login</div>   {/* Login button */}
        <div style={styles.signup}>Signup</div> {/* Signup button */}
      </div>
    </div>
  );
};

// Styles object to define the layout and design of the navbar
const styles = {
  navbar: {
    display: 'flex',               // Use flexbox for positioning
    justifyContent: 'center',      // Center align navbar content
    flexWrap: 'wrap',              // Allow wrapping for responsive design
    gap: '50px',                   // Add space between logo, tabs, and menu
    padding: '20px',               // Add padding around the navbar
  },
  logodiv: {
    display: 'flex',               // Use flexbox for positioning the logo
    justifyContent: 'left',        // Align the logo to the left
    padding: '5px',                // Padding around the logo container
  },
  tabs: {
    display: 'flex',               // Use flexbox to align the navigation tabs horizontally
    justifyContent: 'center',      // Center the tabs in the navbar
  },
  menu: {
    display: 'flex',               // Use flexbox to position the login and signup buttons
    justifyContent: 'center',      // Center the menu items
  },
  logo: {
    height: '70px',                // Set a fixed height for the logo
    width: 'auto',                 // Maintain aspect ratio of the logo
  },
  tab: {
    margin: '25px 20px 25px 20px', // Margin around each tab for spacing
    fontSize: '20px',              // Font size for the tab text
    fontWeight: 'bold',            // Make tab text bold
    cursor: 'pointer',             // Display pointer cursor to indicate the tab is clickable
  },
  login: {
    margin: '15px 5px 25px 20px',  // Margin around the login button
    padding: '10px',               // Padding inside the login button
    border: '2px solid salmon',    // Border around the button with a salmon color
    borderRadius: '8px',           // Rounded corners for the button
    color: 'white',                // Text color inside the button
    backgroundColor: 'salmon',     // Background color of the login button
    fontSize: '18px',              // Font size for the login text
    cursor: 'pointer',             // Pointer cursor on hover
  },
  signup: {
    margin: '15px 0px 25px 5px',   // Margin around the signup button
    padding: '10px',               // Padding inside the signup button
    border: '2px solid salmon',    // Border around the button with a salmon color
    borderRadius: '8px',           // Rounded corners for the button
    color: 'salmon',               // Text color inside the signup button
    fontSize: '18px',              // Font size for the signup text
    cursor: 'pointer',             // Pointer cursor on hover
  },
};

export default Navbar; // Export the Navbar component for use in other parts of the application