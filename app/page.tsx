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

      {/* Typography */}
      <div>
        <h1 className="text-3xl">Titre 1</h1>
        <h2 className="text-2xl">Titre 2</h2>
        <h3 className="text-xl">Titre 3</h3>
        <p className="text-base italic underline decoration-red-500 decoration-double underline-offset-4">A regular paragraph</p>
        <p className="text-sm truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className="text-xs note">A little note</p>
      </div>
    </main>
  );
}
