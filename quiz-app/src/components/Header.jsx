import logoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={logoImg} />
      <h1>React quiz</h1>
    </header>
  );
}