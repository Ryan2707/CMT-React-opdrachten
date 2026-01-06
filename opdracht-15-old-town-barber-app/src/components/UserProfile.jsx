import { useState } from "react";
import { toast } from "react-toastify";
import { setUserProfile } from "../utils/localStorage";

const UserProfile = ({ initialData, onSave }) => {
  const [name, setName] = useState(initialData?.name || "");
  const [email, setEmail] = useState(initialData?.email || "");
  const [phone, setPhone] = useState(initialData?.phone || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      toast.error("Naam en email zijn verplicht");
      return;
    }

    const profile = { name, email, phone };
    setUserProfile(profile);
    toast.success("Profiel opgeslagen");
    onSave(profile);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Profiel</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          placeholder="Naam *"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="Email *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="Telefoon (optioneel)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button className="w-full bg-black text-white py-2 rounded">
          Opslaan
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
