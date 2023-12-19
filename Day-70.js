class Trie {
	root = {};
	insert(word) {
		let head = this.root;
		for (const char of word) {
			head[char] = head[char] || {};
			head = head[char];
		}
		head["*"] = true;
	}
	search(word) {
		let head = this.root;
		for (const char of word) {
			if (!head[char]) return false;
			head = head[char];
		}
		return head.hasOwnProperty("*");
	}
	startsWith(prefix) {
		let head = this.root;
		for (const char of prefix) {
			if (!head[char]) return false;
			head = head[char];
		}
		return true;
	}
}
