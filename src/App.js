import { AllRoutes } from "./routes";
import GlobalStyles from "./styles/GlobalStyles";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <AllRoutes />
      <GlobalStyles />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
