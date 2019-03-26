const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
	if (isNaN(maxSize)) {
		maxSize = 30;
		}
	this.maxSize = maxSize;
	this.heap = new MaxHeap();
	}

	push(data, priority) {
		if (this.size() < this.maxSize) {
			this.heap.push(data, priority);
		} else {
			throw new error('Max size exceeded');
		}
	}


	shift() {
		if (this.size() > 0) {
			return this.heap.pop();
		} else {
			throw new Error('The queue is empty');
		}
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.isEmpty(); 
	}
}

module.exports = PriorityQueue;
