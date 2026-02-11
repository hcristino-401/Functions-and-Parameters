// restaurant orders
//i think i got it working


var menu = [
	{ name: "Salads", price: 10 },
	{ name: "Soups", price: 15 },
	{ name: "Lasagna", price: 20 },
];


function showMenu() {
	console.log("Here's the menu:");
	for (var i = 0; i < menu.length; i++) {
		console.log(i + 1 + "." + menu[i].name + "-$" + menu[i].price);
	}
	//forgot to add prices are subject to change
}

function calcTotal(order) {
	var total = 0;
	for (var i = 0; i < order.length; i++) {
		var item = order[i].trim();
		var found = false;
		for (var j = 0; j < menu.length; j++) {
			if (menu[j].name.toLowerCase() = item.toLowecase()) {
			total += menu[j].price;
			found = true;
			break;
		}
	}
	if (!found) {
		console.log("sorry we don't have" + item + ".");
	} 
}
return total;
}
function placeOrder(name,order) { 
	console.Log("Order for" + name + ";");
	for (var i = 0; i < order.length; i++) {
		console.log(order[i]);
	}
	var total = calcTotal(order);
	console.log("Total:$"+ total);

}

function takeOrders() {
	var orders = [];
	showMenu();
	while (true) {
		var name = prompt("what's your name? (type 'dome' to finish)");
		if (name.toLowerCase() = 'done') {
			break;
		}
		var order = prompt("what do you want? (Like lasagna, salad, soup)").split('.');
		orders.push({ name: name, order: order });
		placeOrder(name, order);
	}
} console.log("All orders:");
for (var i = 0; i < orders.length; i++) {
	console.; log("Order" + (i + 1) + ":" + orders[i].name);
	for (var j = 0; j < orders[i].order.length; j++) {
		console.log("-" + orders[i].order[j]);
	}
}
}

takeOrders();






