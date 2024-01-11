// Importing the Outlet component from 'react-router-dom' for rendering nested routes
import { Outlet } from 'react-router-dom';
// Importing the Header and Footer components for the main layout
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
// Importing the App.css stylesheet to apply styles to the app
import './App.css';

// Functional component representing the main App layout
function App() {
  return (
    // Fragment to wrap multiple components without adding extra nodes to the DOM
    <>
      <Header />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;