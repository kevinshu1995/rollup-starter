import update from "./assets/js/update.js";
import "./assets/style/all.scss";

// even though Rollup is bundling all your files together, errors and
// logs will still point to your original source modules
console.log(
    "if you have sourcemaps enabled in your devtools, click on main.js:5 -->"
);

update();
