import { useState } from "react";
import './styles.css';

function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar");

  function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    const length = 12;
    let newPassword = "";

    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }

    setPassword(newPassword);
    setCopyText("Copiar");
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password);
    setCopyText("Copiado!");
  }

  return (
    <div className="App">
      <h1>Gerador de senhas</h1>
      <button className="generate-button" onClick={generate}>Gerar!</button>
      <button className="copy-button" onClick={copyToClipboard}>{copyText}</button>
      <div className="password">{password}</div>
    </div>
  );
}

export default App;