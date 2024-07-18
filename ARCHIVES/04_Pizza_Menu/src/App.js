const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const App = () => {
  return (
    <div className="flex w-screen min-h-screen flex-col items-center justify-center">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="w-full text-center text-gray-700 text-2xl bg-gray-50 p-2 mb-10">
      Navy Foods
    </header>
  );
};

const Pizza = () => {
  return (
    <div className="Pizza flex flex-col items-center justify-center border-2 rounded-xl shadow-md  hover:shadow-2xl">
      <div className="img-wrapper ">
      <img className=" w-96 rounded-xl scale-95 hover:scale-100 cursor-pointer duration-500"   src="pizzas/focaccia.jpg"></img>
      </div>
      <div    className="text-wrapper p-2">
      <h1     className=" text-2xl text-orange-600  "   >Focaccia </h1>
      <h3     className=" text-xl text-gray-500"   >$22.3</h3>
      <h2     className=" text-xl  text-gray-800 "   >Bread with italian olive oil and rosemary</h2>
      <button className="from-orange-500 to-orange-600  bg-gradient-to-r  text-white rounded-md border-2 border-orange-600 p-2 hover:shadow-md hover:shadow-orange-500"      >Order Now </button>
      </div>
    </div>
  );
};

const Menu = () => {
  return <div className="pizzaContainer grid grid-cols-2 gap-12">

  <Pizza />
  <Pizza />
  </div>
  
  ;
};

const Footer = () => {
  return (
    <footer className="w-full text-center text-gray-700 bg-gray-50 p-2 mt-10 text-xl">
      We're open
    </footer>
  );
};

export default App;
