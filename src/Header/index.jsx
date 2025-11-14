import Logo from "./Logo";
import Generations from "./Generations";

export default function Header() {
  return (
    <header className="p-4 bg-blue-100 rounded shadow-md space-y-4">
      <Logo text="Pokemon App" />

      <Generations />
    </header>
  );
}
