import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-12">
      <p className="mb-2 text-xs">
        To access the{" "}
        <span className="text-semibold italic">Systems Dashboard</span> please
        click on of Provider!
      </p>
      <button
        onClick={GoogleLogin}
        className="flex gap-2 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 hover:scale-110 transition"
      >
        <div className="rounded-md bg-white/90 flex items-center w-15 p-1 ">
          <FcGoogle />
        </div>{" "}
        <div>Sign In with Google</div>
      </button>
    </div>
  );
}
