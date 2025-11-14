import Gen1 from "./Gen1";
import Gen2 from "./Gen2";
import Gen3 from "./Gen3";
import Gen4 from "./Gen4";

export default function Generations() {
  return (
    <div className="p-4 bg-blue-50 rounded">
      <h2 className="font-semibold text-lg mb-3">Generations</h2>

      <div className="grid grid-cols-2 gap-3">
        <Gen1 name="Generation 1" />
        <Gen2 name="Generation 2" />
        <Gen3 name="Generation 3" />
        <Gen4 name="Generation 4" />
      </div>
    </div>
  );
}
