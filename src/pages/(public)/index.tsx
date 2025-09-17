import ProductCard from "./_components/ProductCard";
import GreetingHomePage from "./_components/GreetingHomePage";

export default function Component() {
  return (
    <div className="">
      <div className="py-2">
        <GreetingHomePage />
      </div>
      <div>
        <ProductCard />
      </div>
    </div>
  )
}
