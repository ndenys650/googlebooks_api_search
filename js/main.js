// HTML

// Input search bar
// button to submit search
// 



function bookLook(){

	var cards = document.getElementById("cards")
	var userSearch = document.getElementById("userSearch").value
	$.ajax({
		url: `https://www.googleapis.com/books/v1/volumes?q=${userSearch}`,
		type: "GET",
		dataType: "JSON",
		success: function(data){
			// console.log(data)
			var items = data.items
			// console.log(items)
			for(var i = 0; i < 3; i++){
				var tites = items[i].volumeInfo.title
				var subs = items[i].searchInfo.textSnippet
				var imgs = items[i].volumeInfo.imageLinks.smallThumbnail
				var abouts = items[i].volumeInfo.publishedDate
				// console.log(items[i].volumeInfo.title)
				cards.innerHTML += 
				`<div class="card">
				<img class="card-img-top" src="${imgs}" alt="Card image cap">
		        <div class="card-body">
		          <h4 class="card-title">${tites}</h4>
		          <p class="card-text">${subs}</p>
		        </div>
		        <div class="card-footer">
		          <small class="text-muted">${abouts}</small>
		        </div>`
			}
		}
	})
}

document.getElementById("runSearch").addEventListener("click", bookLook)
