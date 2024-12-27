export default function ProfilePage({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Profile</h1>
      <hr />
      <p>Profile Page{params.id}</p>
    </div>
  );
}
