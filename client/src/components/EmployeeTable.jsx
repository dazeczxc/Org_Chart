import React from "react";

const EmployeeTable = () => {
  return (
    <div className="mt-9">
      <div className="overflow-x-auto max-h-[calc(100vh-100px)]">
        <div className="table-height">
          <table className="table-auto w-full">
            <thead className="sticky top-0 bg-blue-100">
              <tr>
                <th className="border px-4 py-2">Type</th>
                <th className="border px-4 py-2">New Page?</th>
                <th className="border px-4 py-2">Order</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Position</th>
                <th className="border px-4 py-2">Parent</th>
                <th className="border px-4 py-2">Image</th>

              </tr>
            </thead>
            <tbody>
              {/* Table rows go here */}
              <tr>
                <td className="border px-4 py-2">Row 1, Cell 1</td>
                <td className="border px-4 py-2">Row 1, Cell 2</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>

              </tr>
              <tr>
                <td className="border px-4 py-2">Row 2, Cell 1</td>
                <td className="border px-4 py-2">Row 2, Cell 2</td>
                <td className="border px-4 py-2">Row 2, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row 3, Cell 1</td>
                <td className="border px-4 py-2">Row 3, Cell 2</td>
                <td className="border px-4 py-2">Row 3, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row 2, Cell 1</td>
                <td className="border px-4 py-2">Row 2, Cell 2</td>
                <td className="border px-4 py-2">Row 2, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row 1, Cell 1</td>
                <td className="border px-4 py-2">Row 1, Cell 2</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row 2, Cell 1</td>
                <td className="border px-4 py-2">Row 2, Cell 2</td>
                <td className="border px-4 py-2">Row 2, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row 1, Cell 1</td>
                <td className="border px-4 py-2">Row 1, Cell 2</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row 2, Cell 1</td>
                <td className="border px-4 py-2">Row 2, Cell 2</td>
                <td className="border px-4 py-2">Row 2, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row 1, Cell 1</td>
                <td className="border px-4 py-2">Row 1, Cell 2</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row 2, Cell 1</td>
                <td className="border px-4 py-2">Row 2, Cell 2</td>
                <td className="border px-4 py-2">Row 2, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row 1, Cell 1</td>
                <td className="border px-4 py-2">Row 1, Cell 2</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row 2, Cell 1</td>
                <td className="border px-4 py-2">Row 2, Cell 2</td>
                <td className="border px-4 py-2">Row 2, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row 1, Cell 1</td>
                <td className="border px-4 py-2">Row 1, Cell 2</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row 2, Cell 1</td>
                <td className="border px-4 py-2">Row 2, Cell 2</td>
                <td className="border px-4 py-2">Row 2, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row 1, Cell 1</td>
                <td className="border px-4 py-2">Row 1, Cell 2</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row 2, Cell 1</td>
                <td className="border px-4 py-2">Row 2, Cell 2</td>
                <td className="border px-4 py-2">Row 2, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row 1, Cell 1</td>
                <td className="border px-4 py-2">Row 1, Cell 2</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row 2, Cell 1</td>
                <td className="border px-4 py-2">Row 2, Cell 2</td>
                <td className="border px-4 py-2">Row 2, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row 1, Cell 1</td>
                <td className="border px-4 py-2">Row 1, Cell 2</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row 2, Cell 1</td>
                <td className="border px-4 py-2">Row 2, Cell 2</td>
                <td className="border px-4 py-2">Row 2, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row 1, Cell 1</td>
                <td className="border px-4 py-2">Row 1, Cell 2</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row 2, Cell 1</td>
                <td className="border px-4 py-2">Row 2, Cell 2</td>
                <td className="border px-4 py-2">Row 2, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row 1, Cell 1</td>
                <td className="border px-4 py-2">Row 1, Cell 2</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row 2, Cell 1</td>
                <td className="border px-4 py-2">Row 2, Cell 2</td>
                <td className="border px-4 py-2">Row 2, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row 1, Cell 1</td>
                <td className="border px-4 py-2">Row 1, Cell 2</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Row 2, Cell 1</td>
                <td className="border px-4 py-2">Row 2, Cell 2</td>
                <td className="border px-4 py-2">Row 2, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
                <td className="border px-4 py-2">Row 1, Cell 3</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
