import Navbar from "./components/Navbar.jsx";
import Properties from "./components/Properties.jsx";
import Search from "./components/Search.jsx";
function App() {
  return (
    <div>
      <Navbar />
      <div className="px-[13%] pt-4">
        <Search />
        <Properties />
      </div>
    </div>
  );
}

export default App;
