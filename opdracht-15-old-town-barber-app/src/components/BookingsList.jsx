const BookingsList = ({ appointments }) => {
  const sorted = [...appointments].sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`);
    const dateB = new Date(`${b.date} ${b.time}`);
    return dateA - dateB;
  });

  const totalPrice = sorted.reduce(
    (sum, a) => sum + a.price,
    0
  );

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">
        Mijn afspraken ({sorted.length})
      </h2>

      {sorted.length === 0 && (
        <p className="text-gray-500">Nog geen afspraken geboekt</p>
      )}

      <ul className="space-y-3">
        {sorted.map(a => (
          <li key={a.id} className="flex justify-between border-b pb-2">
            <div>
              <p className="font-medium">{a.serviceName}</p>
              <p className="text-sm text-gray-500">
                📅 {a.date} – ⏰ {a.time}
              </p>
            </div>
            <span>€{a.price}</span>
          </li>
        ))}
      </ul>

      {sorted.length > 0 && (
        <div className="mt-4 pt-4 border-t font-semibold flex justify-between">
          <span>Totaal</span>
          <span>€{totalPrice}</span>
        </div>
      )}
    </div>
  );
};

export default BookingsList;
