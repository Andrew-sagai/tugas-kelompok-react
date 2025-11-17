import Evolution from "./Evolution";
import TypeEffect from "./TypeEffect";
import Logo from "./Logo";

export default function CardInfo() {
  return (
    <div className="p-4 bg-white rounded shadow-md space-y-3">
      <h3 className="font-semibold text-lg">Card Info</h3>

      <Evolution evo="Pikachu → Raichu" />
      <TypeEffect type="Electric" />
      <Logo text="Pokeball Icon" />
    </div>
  );
}
