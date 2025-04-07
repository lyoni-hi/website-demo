import "./polyfills";
import "./themeRuntime";

// meow
console.log(
    "%c lyoni",
    "font-size: 50px; color:" +
    getComputedStyle(document.body).getPropertyValue("--accent")
);
