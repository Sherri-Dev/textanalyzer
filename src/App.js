import Header from "./components/Header";
import Text_Form from "./components/Text_Form";
import { useState } from "react";
import Alert from "./components/Alert";
function App() {
  const [savedTheme, saveTheme] = useState(localStorage.getItem("savedTheme"));
  const [alert, setAlert] = useState(null);
  const [theme, setTheme] = useState(savedTheme ? savedTheme : "green");
  const switchTheme = (newTheme) => {
    setTheme(newTheme);
  };
  const showAlert = (type, msg, theme) => {
    setAlert({
      type: type,
      msg: msg,
      theme: theme,
    });
    // setTimeout(() => setAlert(null), 2000);
  };
  return (
    <>
      <Header
        title="Text Spy"
        theme={theme}
        switchTheme={switchTheme}
        showAlert={showAlert}
      />
      <Alert alert={alert} />
      <Text_Form theme={theme} showAlert={showAlert} />
    </>
  );
}

export default App;
