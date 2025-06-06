import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export default function List() {
  const { deals } = useSelector((state: RootState) => state.auth);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800 text-center">Available Deals</h2>
        {deals?.length === 0 || !deals ? (
          <p className="text-center text-gray-500">No deals found.</p>
        ) : (
          <ul className="space-y-3">
            {deals?.map((deal, index) => (
              <li
                key={index}
                className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition"
              >
                {deal}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}