import Header from "./Components/Header/Index";
import Content from "./Components/Content/Index";
import Footer from "./Components/Footer";
import { ToDoProvider } from "./Contexts/ToDoContext";
function App() {
  return (
    <ToDoProvider>
    <section className="todoapp">
      <Header />
      <Content />
    </section>
    <Footer />
    </ToDoProvider>
  );
}

export default App;
