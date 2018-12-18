function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function1 = async () => {
	await sleep(2000);
	console.log(1);
}

function2 = async () => {
	await sleep(1000);
	console.log(2);
}

function3 = () => {
	console.log('function 3');
}

function1();
console.log('called func1');
setTimeout(function3, 3000);
function2();
console.log('called func2');