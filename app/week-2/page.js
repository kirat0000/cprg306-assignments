import StudentInfo from "./student-info";
export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-10">
        <div className="max-w-4xl mx-auto rounded-lg shadow-lg bg-white p-6">
            <h1 className="text-3xl font-bold text-gray-800 border-b pb-4">Shopping List</h1>
            <StudentInfo />
        </div>
    </main>
);
    return (
      <main className="min-h-screen">

        <h1>Shopping List</h1>
        <StudentInfo/>
      </main>
    );
  }
