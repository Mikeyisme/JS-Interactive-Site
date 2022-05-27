window.onload = rotate;

var indexOfPic = 0;
var StoreImages = new Array ("bookstore3.jpg","bookstore4.jpg","bookstore2.jpg","bookstore1.jpg", "bookstore5.jpg", "bookstore6.jpg");

var Descriptions = new Array ("In Person Store!", "Books", "Many Books!", "Many Many Books!", "Fun Library events", "Rent a Book or Buy a Book")

function rotate() {	
	document.getElementById("ShowStores").src = StoreImages[indexOfPic];
	document.getElementById("ShowDes").innerHTML = Descriptions[indexOfPic];
	indexOfPic++;
	
	if (indexOfPic == StoreImages.length) {
		indexOfPic = 0;
	}
	setTimeout(rotate, 2 * 2000);
}