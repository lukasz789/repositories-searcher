import UserContextProvider from "./store/user-context";
import Form from "./components/Form";
import Repositories from "./components/Repositories";

function App() {
  return (
    <UserContextProvider>
      <Form />
      <Repositories />
    </UserContextProvider>
  );
}

export default App;
