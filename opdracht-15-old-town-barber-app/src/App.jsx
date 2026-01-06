import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ShopInfo from "./components/ShopInfo";
import UserProfile from "./components/UserProfile";
import { getUserProfile } from "./utils/localStorage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUserProfile());
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <UserProfile onSave={setUser} />
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Old Town Barber</h1>

      <div className="grid grid-cols-2 gap-6">
        <ShopInfo />
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
