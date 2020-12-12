import Head from "next/head";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full h-screen text-white">
      <div className="absolute bottom-0 left-0 flex items-center justify-center w-full h-full bg-gradient-to-r from-purple-700 to-pink-700">
        <div className="px-8 py-4 text-center uppercase border-2 border-white cursor-default">
          Comming soon
        </div>
      </div>
    </div>
  );
}
