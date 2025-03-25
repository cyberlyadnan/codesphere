import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="min-w-full mx-auto p-4">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        EditorPanel OutputPanel
      </div>
      </div>
    </div>
  );
}
