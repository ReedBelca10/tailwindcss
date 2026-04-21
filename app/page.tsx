import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Colors */}
      <div>
        <h1 className="bg-green-600 text-white">Hello world!</h1>
        <h1 className="border-4 border-blue-500 text-vuejs-100">Hello world!</h1>
      </div>

      {/* Customization */}
      <div>
        <h1 className="text-xs sm:text-base md:text-lg lg:text-3xl">Hello long sentence</h1>
        <h1 className="mb-4">Hello Spacing</h1>
      </div>
    </main>
  );
}
