import { useState } from "react";
import { toast } from "react-toastify";
import { getAppointments, setAppointments } from "../utils/localStorage";

const services = [
  { id: 1, name: "Knipbeurt", price: 25 },
  { id: 2, name: "Baard trimmen", price: 15 },
  { id: 3, name: "Knip + Baard", price: 35 },
  { id: 4, name: "Haar wassen", price: 10 }
];

const times = [
  "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30",
  "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30"
];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    serviceId: "",
    date: "",
    time: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { serviceId, date, time } = formData;

    if (!serviceId || !date || !time) {
      toast.error("Vul alle velden in");
      return;
    }

    const service = services.find(
      (s) => s.id === Number(serviceId)
    );

    const newAppointment = {
      id: Date.now(),
      serviceId: service.id,
      serviceName: service.name,
      price: service.price,
      date,
      time
    };

    const existingAppointments = getAppointments();
    setAppointments([...existingAppointments, newAppointment]);

    toast.success("Afspraak geboekt 🎉");

    setFormData({
      serviceId: "",
      date: "",
      time: ""
    });
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Boek een afspraak</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* SERVICE */}
        <div>
          <label className="block font-medium mb-1">Service *</label>
          <select
            value={formData.serviceId}
            onChange={(e) =>
              setFormData(prev => ({
                ...prev,
                serviceId: e.target.value
              }))
            }
            className="w-full p-2 border rounded"
          >
            <option value="">Selecteer service</option>
            {services.map(service => (
              <option key={service.id} value={service.id}>
                {service.name} (€{service.price})
              </option>
            ))}
          </select>
        </div>

        {/* DATUM */}
        <div>
          <label className="block font-medium mb-1">Datum *</label>
          <input
            type="date"
            value={formData.date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) =>
              setFormData(prev => ({
                ...prev,
                date: e.target.value
              }))
            }
            className="w-full p-2 border rounded"
          />
        </div>

        {/* TIJD */}
        <div>
          <label className="block font-medium mb-1">Tijd *</label>
          <select
            value={formData.time}
            onChange={(e) =>
              setFormData(prev => ({
                ...prev,
                time: e.target.value
              }))
            }
            className="w-full p-2 border rounded"
          >
            <option value="">Selecteer tijd</option>
            {times.map(t => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Boek afspraak
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
