import { Suspense } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import MainLoading from "./components/MainLoading";

function App() {
  return (
    <Suspense fallback={<MainLoading />}>
      <div className="dark dark:bg-black">
        <Outlet />
      </div>
    </Suspense>
  );
}

export default App;
