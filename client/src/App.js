
import './App.css';
import { PayPalScriptProvider} from "@paypal/react-paypal-js";
import { PayPalPaymnet } from './PayPalPaymnet';

function App() {

  const initialOptions = {
    clientId: "ASzt-nLGuPeSIaEF3-ChxGjIlhk9_JO39d7m8cxOvOg8PRked5t8DCKpw-iGxQajrgB7tgSf29z0iUU_",
    currency: "USD",
    intent: "capture",
};

  return (
    <PayPalScriptProvider options={initialOptions}>
    <div className="App">
      <header className="App-header">
       Go GOA GONE
      <PayPalPaymnet/>
      </header>
    </div>
    </PayPalScriptProvider>
  );
}

export default App;
