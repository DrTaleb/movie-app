import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="dark dark:bg-black">
      <Outlet />
    </div>
  );
}

export default App;
