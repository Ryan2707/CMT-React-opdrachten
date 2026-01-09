import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ShopInfo from "./components/ShopInfo";
import UserProfile from "./components/UserProfile";
import BookingForm from "./components/BookingForm";
import BookingsList from "./components/BookingsList";

import { getUserProfile, getAppointments } from "./utils/localStorage";

function App() {
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);


  useEffect(() => {
    setUser(getUserProfile());
    setAppointments(getAppointments());
  }, []);

 
  useEffect(() => {
    if (appointments.length === 0) return;

    const now = new Date();

    appointments.forEach((appointment) => {
      const appointmentTime = new Date(
        `${appointment.date} ${appointment.time}`
      );

      const diffInMinutes =
        (appointmentTime - now) / 1000 / 60;

      if (diffInMinutes > 0 && diffInMinutes <= 15) {
        toast.info(
          `⏰ Reminder: ${appointment.serviceName} om ${appointment.time}`
        );
      }
    });
  }, [appointments]);

  
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
        {/* LEFT */}
        <div className="space-y-6">
          <ShopInfo />
          <BookingForm setAppointments={setAppointments} />
        </div>

        {/* RIGHT */}
        <BookingsList appointments={appointments} />
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
