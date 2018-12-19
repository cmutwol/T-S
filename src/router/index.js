import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/products/Index.vue";
import ProductsForm from "../views/products/Form.vue";
import ShowProducts from "../views/products/Show.vue";
import TrackShipping from "../views/shipping/Index.vue";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        // {
        //     path: "/",
        //     name: "home",
        //     component: Home
        // },
        {
            path: "/en-US/",
            name: "home",
            component: Home
        },
        {
            path: "/products",
            name: "products",
            component: Products
        },
        {
            path: "/products/:id",
            name: "ShowProduct",
            component: ShowProducts
        },
        {
            path: "/products/modify",
            name: "ProductsForm",
            component: ProductsForm
        },
        {
            path: "/shipping/track",
            name: "Shipping",
            component: TrackShipping
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "about" */ "../views/About.vue")
        },
        {
            path: "*",
            redirect: "/en-US",
            component: Home
            // name: "home",
            // component: Home
        },
    ]
});
