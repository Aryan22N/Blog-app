import Pagination from "../components/pagination/Pagination";
import CardList from "../components/cardList/CardList";
import CategoryList from "../components/categoryList/CategoryList";
import Featured from "../components/featured/Featured";
import Menu from "../components/menu/Menu";

export default async function Home({ searchParams }) {
  const resolvedSearchParams = await searchParams; //searchParam async rakhna padega time lagata hai lode hone mai
  const page = Number(resolvedSearchParams.page) || 1;
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex gap-6">
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
