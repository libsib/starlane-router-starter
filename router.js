import { createRouter } from "starlane-router"

const root = document.getElementById("root")
if (!root) throw new Error("missing #root element")

const router = createRouter({
  root,
  routes: {
    "/": { url: "/home.html", title: "Home" },
    "/about": { url: "/about.html", title: "About" },
  },
  notFound: { url: "/404.html", title: "404 Not Found" },
})

router.start()
