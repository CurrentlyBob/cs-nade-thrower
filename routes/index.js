import { Router } from "express";

const router = Router();

router.get("/", function (req, res) {
  if (req.user) {
    res.redirect("/nade-throws");
  } else {
    res.render("index", { title: "Home Page" });
  }
});

export { router };
