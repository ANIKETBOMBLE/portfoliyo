import Header from "./compontus/Header";
import Footer from "./compontus/Footer";
import { Outlet } from "react-router";

function First() {
  return (
	<div>
	  <Header />
	  <Outlet />
	  <Footer />
	</div>
  )
}
export default First
