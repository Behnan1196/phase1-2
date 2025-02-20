// app/page.tsx
'use client'; // Mark as client component

import { useState } from 'react';

interface Student {
  id: string;
  name: string;
}

export default function HomePage() {
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
  
  // Sample student data - replace with your actual data source
  const students: Student[] = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '789', name: 'Bob Johnson' },
  ];

  const handleStudentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const studentId = event.target.value;
    setSelectedStudentId(studentId || null);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="max-w-7xl mx-auto">
          <label htmlFor="student-select" className="mr-2">Students:</label>
          <select 
            id="student-select"
            value={selectedStudentId || ''}
            onChange={handleStudentChange}
            className="text-black p-2 rounded"
          >
            <option value="">Select a student</option>
            {students.map((student) => (
              <option key={student.id} value={student.id}>
                {student.name}
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Section */}
        <div className="w-1/4 bg-gray-100 p-4 resize-x overflow-auto min-w-[200px]">
          <h2 className="text-xl font-bold mb-4">Left Section</h2>
          {/* Add left panel content here */}
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col">
          {selectedStudentId && (
            <iframe
              src={`https://www.adesso.live/ABC/?studentId=${selectedStudentId}`}
              className="w-full h-full border-none"
              title="Student Content"
            />
          )}
        </div>
      </div>
    </div>
  );
}