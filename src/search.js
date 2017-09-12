module.exports = function(){
	let a = 555;
	const b = 666;
	console.log('this is a search function!!!');
	function * gen(){
		yield 777;
		return 123;
	}
	var g = gen();
	g.next();
}