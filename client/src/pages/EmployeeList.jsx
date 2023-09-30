import React from 'react';
import Sidebar from '../components/Sidebar';
import BottomInput from '../components/BottomInput';
import EmployeeTable from '../components/EmployeeTable';

function EmployeeList() {
  return (
    <div className=" flex h-screen"> {/* Adjust left margin to accommodate the sidebar */}
        <Sidebar />
        <div className='flex-grow'>
            {/* <div className="h-screen overflow-hidden">
                <div className="overflow-x-auto max-h-[calc(100vh-64px)]">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead className='sticky top-0 bg-white'>
                        <tr>
                            <th className="px-4 py-2">Header 1</th>
                            <th className="px-4 py-2">Header 2</th>
                            <th className="px-4 py-2">Header 3</th>
                        </tr>
                        </thead> 
                        <tbody>
                        <tr>
                            <td className="border px-4 py-2">Row 1, Cell 1</td>
                            <td className="border px-4 py-2">Row 1, Cell 2</td>
                            <td className="border px-4 py-2">Row 1, Cell 3</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Row 2, Cell 1</td>
                            <td className="border px-4 py-2">Row 2, Cell 2</td>
                            <td className="border px-4 py-2">Row 2, Cell 3</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Row 1, Cell 1</td>
                            <td className="border px-4 py-2">Row 1, Cell 2</td>
                            <td className="border px-4 py-2">Row 1, Cell 3</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Row 2, Cell 1</td>
                            <td className="border px-4 py-2">Row 2, Cell 2</td>
                            <td className="border px-4 py-2">Row 2, Cell 3</td>
                        </tr><tr>
                            <td className="border px-4 py-2">Row 1, Cell 1</td>
                            <td className="border px-4 py-2">Row 1, Cell 2</td>
                            <td className="border px-4 py-2">Row 1, Cell 3</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Row 2, Cell 1</td>
                            <td className="border px-4 py-2">Row 2, Cell 2</td>
                            <td className="border px-4 py-2">Row 2, Cell 3</td>
                        </tr><tr>
                            <td className="border px-4 py-2">Row 1, Cell 1</td>
                            <td className="border px-4 py-2">Row 1, Cell 2</td>
                            <td className="border px-4 py-2">Row 1, Cell 3</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Row 2, Cell 1</td>
                            <td className="border px-4 py-2">Row 2, Cell 2</td>
                            <td className="border px-4 py-2">Row 2, Cell 3</td>
                        </tr><tr>
                            <td className="border px-4 py-2">Row 1, Cell 1</td>
                            <td className="border px-4 py-2">Row 1, Cell 2</td>
                            <td className="border px-4 py-2">Row 1, Cell 3</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Row 2, Cell 1</td>
                            <td className="border px-4 py-2">Row 2, Cell 2</td>
                            <td className="border px-4 py-2">Row 2, Cell 3</td>
                        </tr><tr>
                            <td className="border px-4 py-2">Row 1, Cell 1</td>
                            <td className="border px-4 py-2">Row 1, Cell 2</td>
                            <td className="border px-4 py-2">Row 1, Cell 3</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Row 2, Cell 1</td>
                            <td className="border px-4 py-2">Row 2, Cell 2</td>
                            <td className="border px-4 py-2">Row 2, Cell 3</td>
                        </tr><tr>
                            <td className="border px-4 py-2">Row 1, Cell 1</td>
                            <td className="border px-4 py-2">Row 1, Cell 2</td>
                            <td className="border px-4 py-2">Row 1, Cell 3</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Row 2, Cell 1</td>
                            <td className="border px-4 py-2">Row 2, Cell 2</td>
                            <td className="border px-4 py-2">Row 2, Cell 3</td>
                        </tr><tr>
                            <td className="border px-4 py-2">Row 1, Cell 1</td>
                            <td className="border px-4 py-2">Row 1, Cell 2</td>
                            <td className="border px-4 py-2">Row 1, Cell 3</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Row 2, Cell 1</td>
                            <td className="border px-4 py-2">Row 2, Cell 2</td>
                            <td className="border px-4 py-2">Row 2, Cell 3</td>
                        </tr><tr>
                            <td className="border px-4 py-2">Row 1, Cell 1</td>
                            <td className="border px-4 py-2">Row 1, Cell 2</td>
                            <td className="border px-4 py-2">Row 1, Cell 3</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Row 2, Cell 1</td>
                            <td className="border px-4 py-2">Row 2, Cell 2</td>
                            <td className="border px-4 py-2">Row 2, Cell 3</td>
                        </tr><tr>
                            <td className="border px-4 py-2">Row 1, Cell 1</td>
                            <td className="border px-4 py-2">Row 1, Cell 2</td>
                            <td className="border px-4 py-2">Row 1, Cell 3</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Row 2, Cell 1</td>
                            <td className="border px-4 py-2">Row 2, Cell 2</td>
                            <td className="border px-4 py-2">Row 2, Cell 3</td>
                        </tr><tr>
                            <td className="border px-4 py-2">Row 1, Cell 1</td>
                            <td className="border px-4 py-2">Row 1, Cell 2</td>
                            <td className="border px-4 py-2">Row 1, Cell 3</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Row 2, Cell 1</td>
                            <td className="border px-4 py-2">Row 2, Cell 2</td>
                            <td className="border px-4 py-2">Row 2, Cell 3</td>
                        </tr><tr>
                            <td className="border px-4 py-2">Row 1, Cell 1</td>
                            <td className="border px-4 py-2">Row 1, Cell 2</td>
                            <td className="border px-4 py-2">Row 1, Cell 3</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Row 2, Cell 1</td>
                            <td className="border px-4 py-2">Row 2, Cell 2</td>
                            <td className="border px-4 py-2">Row 2, Cell 3</td>
                        </tr><tr>
                            <td className="border px-4 py-2">Row 1, Cell 1</td>
                            <td className="border px-4 py-2">Row 1, Cell 2</td>
                            <td className="border px-4 py-2">Row 1, Cell 3</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Row 2, Cell 1</td>
                            <td className="border px-4 py-2">Row 2, Cell 2</td>
                            <td className="border px-4 py-2">Row 2, Cell 3</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div> */}

            <EmployeeTable />
            <BottomInput />

        </div>

    </div>
  );
}

export default EmployeeList;
