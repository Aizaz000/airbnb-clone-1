# Airbnb Clone Application

## Project Description

This project is an Airbnb-inspired web application that demonstrates a simplified version of the Airbnb platform. It includes features such as browsing property categories, filtering listings based on user inputs, and showcasing a responsive design. The application is built using **React**, and state management is handled with React's **Context API**. The project is designed for educational purposes, showcasing modular component-based architecture and dynamic filtering functionality.

### Key Features:
- **Navbar and SearchBar:** Easy navigation and keyword search for listings.
- **Categories:** Browse listings by predefined property categories.
- **Dynamic Listings:** Display of filtered listings based on user input.
- **Responsive Footer:** Informative sections about support, community, hosting, and company details, along with social media links.
- **Context API:** Centralized state management for seamless sharing of the `listing` filter across components.

---

## Setup Instructions

### Prerequisites:
1. Ensure **Node.js** (v16 or later) is installed on your system.
2. Install a package manager such as **npm** or **yarn**.

### Steps to Run the Project:
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Aizaz000/airbnb-clone-1
   cd <repository_directory>
   ```

2. **Install Depenencies**:
    ```bash
    npm install
    ```

3. **Run the Application**:
    ```bash
    npm start
    ```

---

## Assumptions and Design Descions

### Assumptions
1. Mock Data: The listings are mock data hardcoded into the App.js file, representing sample properties available for browsing.

2. Filtering Logic: Listings are filtered based on their title or category matching the user's search input.

3. Styling: Inline styles are used for components to maintain simplicity and readability.

4. Responsive Design: The footer and components are designed with basic responsiveness for various screen sizes, using flex and other CSS properties.

### Design Descions
1. Context API: The ListingContext was chosen to manage the listing state globally, making it accessible to all components without the need for prop drilling.

2. Component Structure: Each feature (Navbar, SearchBar, Categories, Listings, Footer) is modularized for reusability and maintainability.

3. Dynamic Data Rendering: The Listings component dynamically updates based on filtered data provided by the App component.

4. Footer Content: Social media links are embedded with clickable icons that navigate to corresponding external pages in a new tab.

5. Sample Listings: Two sample listings under the "Beachfront" category are included for demonstration purposes.

---

## Project Structure
src/
├── Components/
│ ├── Categories.jsx
│ ├── Footer.jsx
│ ├── Listings.jsx
│ ├── Navbar.jsx
│ ├── SearchBar.jsx
├── context/
│ └── ListingContext.js
│ ├── App.js
│ ├── index.js
│ ├── index.css
│ ├── reportWebVitals.js
