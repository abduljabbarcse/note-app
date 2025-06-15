export default function NotesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Notes Section</h2>
      {children}
    </div>
  );
}
