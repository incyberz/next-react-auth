import Head from "next/head";
import Login from "./auth/login";
import Dashboard from "./dashboard";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
// require("dotenv").config();

export default function Home() {
  const [user] = useAuthState(auth);
  const tech = [
    "OAuth",
    "Firebase",
    "Firebase-Auth",
    "Firebase-Hooks",
    "Next.JS v.13",
  ];
  return (
    <div>
      <Head>
        <title>React Auth</title>
        <meta
          name="description"
          content="My Next JS Learning about React Authentication"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2 className="text-2xl mt-10">React Authentication by InSho</h2>
        <p className="italic text-xs mb-2">This project using:</p>
        <ul className="flex gap-2 flex-wrap text-xs">
          {tech.map((item, index) => (
            <li
              key={index}
              className="bg-blue-800 text-white/90 rounded-full px-3 py-1"
            >
              {item}
            </li>
          ))}
        </ul>
        {user ? <Dashboard /> : <Login />}
      </main>
    </div>
  );
}
