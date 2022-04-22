var card;
(function (card) {
    card[card["king"] = 0] = "king";
    card[card["queen"] = 1] = "queen";
    card[card["diamond"] = 2] = "diamond";
})(card || (card = {}));
var mycard = card.diamond;
var asd = card[0];
console.log(mycard);
console.log(asd);
