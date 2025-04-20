import Header from "./compontus/Header";
import Footer from "./compontus/Footer";
import { Outlet } from "react-router";

function First() {
  return (
	<div>
	  <Header />
	  <Outlet />
	</div>
  )
}
export default First
