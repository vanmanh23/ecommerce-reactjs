import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useOptimizedScrollMenu } from "../../hooks/useOptimizedScrollMenu";

export default function Component() {
  const { showTopMenu, showBottomMenu } = useOptimizedScrollMenu(100, 800, 1000);
  console.log("top: ", showTopMenu);
  console.log("bottom: ", showBottomMenu);
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}
