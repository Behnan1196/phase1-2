// app/page.tsx
'use client'; // Mark as client component
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

import { useState } from 'react';

interface Student {
  id: string;
  name: string;
}

export default function HomePage() {
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
  
  // Sample student data - replace with your actual data source
  const students: Student[] = [
    { id: '1', name: 'Öğrenci 1' },
    { id: '2', name: 'Öğrenci 2' },
    { id: '3', name: 'Öğrenci 5' },
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
          <label htmlFor="student-select" className="mr-2">Öğrenci:</label>
          <select 
            id="student-select"
            value={selectedStudentId || ''}
            onChange={handleStudentChange}
            className="text-black p-2 rounded"
          >
            <option value="">Bir öğrenci seçin</option>
            {students.map((student) => (
              <option key={student.id} value={student.id}>
                {student.name}
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* Main Resizable Panels */}
      <ResizablePanelGroup direction="horizontal" className="flex-1">
        {/* Left Section (Vertical Split) */}
        <ResizablePanel defaultSize={11} minSize={10} maxSize={40}>
          <ResizablePanelGroup direction="vertical">
            {/* Top Left Panel */}
            <ResizablePanel defaultSize={50} minSize={30}>
              <div className="h-full p-4 bg-muted/50">
                <h2 className="text-lg font-medium mb-4">Chat</h2>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Navigation or primary content
                  </p>
                </div>
              </div>
            </ResizablePanel>

            <ResizableHandle withHandle />

            {/* Bottom Left Panel */}
            <ResizablePanel defaultSize={20} minSize={10}>
              <div className="h-full p-4 bg-muted/20">
                <h2 className="text-lg font-medium mb-4">Video</h2>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Secondary content or tools
                  </p>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Right Section with iFrame */}
        <ResizablePanel defaultSize={75}>
          <div className="h-full w-full">
            <iframe 
              src={`https://www.adesso.live/ABC/?studentId=${selectedStudentId}`}
              className="w-full h-full border-none"
              title="Content Frame"
            />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}