const shopData = {
  name: "Old Town Barber",
  hours: "Ma-Za: 9:00 - 18:00",
  services: [
    { id: 1, name: "Knipbeurt", price: 25, duration: 30 },
    { id: 2, name: "Baard trimmen", price: 15, duration: 15 },
    { id: 3, name: "Knip + Baard", price: 35, duration: 45 },
    { id: 4, name: "Haar wassen", price: 10, duration: 15 }
  ]
};

const ShopInfo = () => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold">{shopData.name}</h2>
      <p className="text-gray-500 mb-4">{shopData.hours}</p>

      <ul className="space-y-2">
        {shopData.services.map(service => (
          <li
            key={service.id}
            className="flex justify-between border-b pb-1"
          >
            <span>{service.name}</span>
            <span>€{service.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopInfo;
