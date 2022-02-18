import { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import HousesView from "../views/HousesView.vue";
import HouseView from "../views/HouseView.vue";
import AddHouseView from "../views/AddHouseView.vue";

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/houses",
    name: "Houses",
    component: HousesView,
  },
  {
    path: "/house/:id",
    props: true,
    name: "House",
    component: HouseView,
  },
  {
    path: "/create",
    name: "Create",
    component: AddHouseView,
  },
];

export default routes;
