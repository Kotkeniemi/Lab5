function setup() {
	loadJSON("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Mercedes-Benz_SLS_AMG_%28C_197%29_%E2%80%93_Frontansicht_ge%C3%B6ffnet%2C_10._August_2011%2C_D%C3%BCsseldorf.jpg/800px-Mercedes-Benz_SLS_AMG_%28C_197%29_%E2%80%93_Frontansicht_ge%C3%B6ffnet%2C_10._August_2011%2C_D%C3%BCsseldorf.jpg,", gotData,'jsonp');

}
function gotData(data){
	println(data);
}
function draw() {

}
