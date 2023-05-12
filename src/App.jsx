import "./App.css";
import Main from "./components/Main/main";
import Sidebar from "./components/Aside/sidebar";
import Footer from "./components/Footer/footer";

function App() {

  return (
    <div className="h-screen max-h-screen overflow-hidden">
      <div className="flex h-[90%]">
        <Sidebar  />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
