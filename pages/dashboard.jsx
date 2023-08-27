import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);

  const handleSignOut = () => {
    let y = confirm("Sign Out?");
    if (y) {
      auth.signOut();
    }
  };

  if (loading) return <h1>Loading ...</h1>;
  if (user) {
    return (
      <div className="mt-10 border border-black/50 p-4 rounded-lg">
        <h1 className="text-3xl">System Dashboard</h1>
        <h1 className="mb-2 mt-4">Welcome back {user.displayName}!</h1>
        <button
          className="text-white bg-red-800 px-3 py-2 rounded-lg hover:bg-red-600"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    );
  }
}
