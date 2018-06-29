function makeGrid() {

 const designCanvas = $('#pixelCanvas');
 const gridHeight = $('#inputHeight').val();
 const gridWidth = $('#inputWidth').val();

 designCanvas.children().remove()


let i = 0;
while (i < gridHeight) {
 designCanvas.append('<tr></tr>');
 i++;
}



const tableRows = $('tr');

for(let x = 0; x < gridWidth; x++){
	tableRows.append('<td></td>');
}

const tableCell = designCanvas.find('td');

// this is to change the color when a user clicks on it

tableCell.click(function(){
	//to select color inputed
	var color;
	color = $("#colorPicker").val();
	$(this).attr('bgcolor', color);
});

}

//when size is created
var createSize;

createSize = $('input[type = "submit"]')

createSize.click(function(event) {
	event.preventDefault();
	makeGrid();
});

