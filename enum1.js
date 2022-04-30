var color;
(function (color) {
    color[color["red"] = 1] = "red";
    color[color["blue"] = 2] = "blue";
    color[color["yellow"] = 3] = "yellow";
})(color || (color = {}));
;
var background = color.blue;
console.log(background);
