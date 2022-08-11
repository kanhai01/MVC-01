import "./app3.css";
import $ from "jquery";

const $square = $("#app3 div");
$square.on("click", () => {
  $square.toggleClass("active");
});
