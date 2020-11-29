import VueRouter from "vue-router";

import ExampleComponent from "./components/ExampleComponent";
import ExampleComponent2 from "./components/Example2";
import Bookables from "./bookables/Bookables";

const routes = [
    {
        path: "/",
        component: Bookables,
        name: "home",
    },
    {
        path: "/about",
        component: ExampleComponent2,
        name: "about",
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;