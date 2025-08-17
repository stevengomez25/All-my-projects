function OrderItemRow({ item, onRemove }) {
  return (
    <tr className="border-b hover:bg-gray-50 transition-colors">
      <td className="px-4 py-2 text-gray-800">{item.name}</td>
      <td className="px-4 py-2 text-gray-500">{item.code}</td>
      <td className="px-4 py-2">{item.presentation}</td>
      <td className="px-4 py-2">{item.unit}</td>
      <td className="px-4 py-2 text-blue-600 font-medium">${item.cost}</td>
      <td className="px-4 py-2">{item.quantity}</td>
      <td className="px-4 py-2 text-blue-600 font-semibold">${item.total}</td>
      <td className="px-4 py-2">
        <button
          onClick={onRemove}
          className="px-3 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors"
        >
          Remove
        </button>
      </td>
    </tr>
  );
}

export default OrderItemRow;
