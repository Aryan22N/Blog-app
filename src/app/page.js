import CardList from "../components/cardList/CardList";
import CategoryList from "../components/categoryList/CategoryList";
import Featured from "../components/featured/Featured";
import Menu from "../components/menu/Menu";

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex gap-6">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
