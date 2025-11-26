import Search from "./Search";
import CardInfo from "./CardInfo";

export default function Home() {
  return (
    <section className="p-4 bg-yellow-100 rounded shadow-md space-y-4">
      <Search placeholder="Search Pokemon..." />
      <CardInfo />
    </section>
  );
}
