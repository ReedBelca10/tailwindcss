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

      {/* Spaces & Sizing */}
      <div>
        <div className=" p-1 font-bold text-white bg-red-500">Padding</div>
        <div className="m-4 font-bold text-white bg-blue-500">Margin</div>

        <div className="flex min-h-screen">
          <div className="w-1/5 bg-green-500">Sidebar</div>
          <div className="w-4/5 h-32 bg-gray-500">Main content</div>
        </div>
      </div>

      {/* Flex */}
      <div className="Parent">
        <div>Header</div>
        <div className="flex flex-row">
          <div className="basis-3/4">Main content</div>
          <div className="basis-1/4">
            <div className="flex justify-end">Sidebar</div>
            <div className="flex justify-end">Menu</div>
          </div>
        </div>
      </div>

      {/* Grids */}
      <div className="h-screen text-white Parent bg-slate-900">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-1">
            <div className="p-6 rounded-lg bg-sky-500">First column</div>
            <div className="p-6 rounded-lg bg-sky-500">Second column</div>
            <div className="p-6 rounded-lg bg-sky-500">Third column</div>
            <div className="col-span-2 p-6 rounded-lg bg-sky-900">Fourth column</div>
            <div className="p-6 rounded-lg bg-sky-500">Fifth column</div>
            <div className="p-6 rounded-lg bg-sky-500">Sixth column</div>
          </div>
          <hr/>
          <div className="grid grid-flow-col grid-rows-4 gap-4">
            <div className="row-span-2 p-6 rounded-lg bg-sky-500">01</div>
            <div className="col-span-2 p-6 rounded-lg bg-sky-500">02</div>
            <div className="p-6 rounded-lg bg-sky-500">03</div>
            <div className="p-6 rounded-lg bg-sky-500">04</div>
            <div className="p-6 rounded-lg bg-sky-500">05</div>
            <div className="p-6 rounded-lg bg-sky-500">06</div>
          </div>
        </div>

        {/* Layouts */}
        <div className="container px-2 columns-3">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo doloribus dolore natus deleniti in, unde laboriosam labore, rerum, modi dolores alias repudiandae. At veniam dicta velit vel, exercitationem consequuntur alias!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos velit, ratione adipisci cupiditate dolorum culpa, perspiciatis ea facilis tenetur assumenda possimus voluptas sint illo autem id ipsa? Expedita, est fugiat?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium fugit error sed nemo amet corporis nulla molestias? Ut ipsam veritatis velit vero itaque atque reprehenderit fugit. Similique eum voluptatibus atque.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo doloribus dolore natus deleniti in, unde laboriosam labore, rerum, modi dolores alias repudiandae. At veniam dicta velit vel, exercitationem consequuntur alias!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos velit, ratione adipisci cupiditate dolorum culpa, perspiciatis ea facilis tenetur assumenda possimus voluptas sint illo autem id ipsa? Expedita, est fugiat?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium fugit error sed nemo amet corporis nulla molestias? Ut ipsam veritatis velit vero itaque atque reprehenderit fugit. Similique eum voluptatibus atque.</p>
        </div>
      </div>

      {/* Borders */}
      <div className="h-screen mt-12 text-white Parent bg-blue-900">
        <header className="w-full border-4">Header</header>
      </div>

      {/* Effects & Filters */}
      <div className="h-screen p-4 Parent">
        <div className="inline-block p-4 bg-white text-gray-900 border rounded-lg shadow-md shadow-cyan-500 blur hover:blur-none">
          <img src="https://pixabay.com/images/download/arturo_anez-insects-9650481_1920.jpg" className="w-64 mb-4"/>
          <h1 className="text-2xl font-bold">Effects & Filters</h1>
          <p className='mb-4'>This is my effects and filters example.</p>
          <button className="px-3 py-2 rounded-lg cursor-pointer bg-blue-500 text-white shadow-md shadow-cyan-500/50 hover:bg-blue-700 transition duration-300">
            Say Hello
          </button>
        </div>
      </div>

      {/* Animations & Transitions */}
      <div className="h-screen p-4 Parent">
        <div className="inline-block p-4 bg-white text-gray-900 border rounded-lg shadow-md shadow-cyan-500 transition-transform duration-300 hover:scale-105">
          <img src="https://pixabay.com/images/download/arturo_anez-insects-9650481_1920.jpg" className="w-64 mb-4"/>
          <h1 className="text-2xl font-bold">Animations & Transitions</h1>
          <p className='mb-4'>This is my animations and transitions example.</p>
          <button className="px-3 py-2 rounded-lg cursor-pointer bg-blue-500 text-white shadow-md shadow-cyan-500/50 hover:bg-blue-700 transition duration-300">
            Say Hello
          </button>
        </div>
      </div>
    </main>
  );
}
