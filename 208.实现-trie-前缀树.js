/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */

var TrieNode = function (char, isEnd) {
  this.char = char;
  this.child = {};
  this.isEnd = isEnd;
}

var Trie = function () {
  this.root = new TrieNode('', false);
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word, node) {
  if (!word) {
    return
  }
  node = node || this.root;
  let isEnd = word.length === 1;
  if (node.child[word[0]]) {
    isEnd ? node.child[word[0]].isEnd = true : null;
  } else {
    node.child[word[0]] = new TrieNode(word[0], isEnd);
  }
  if (isEnd) return
  this.insert(word.slice(1), node.child[word[0]]);
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word, node) {
  if (!word) {
    return false
  }
  node = node || this.root;
  let isEnd = word.length === 1;
  if (node.child[word[0]]) {
    if (isEnd) {
      return node.child[word[0]].isEnd
    } else {
      return this.search(word.slice(1), node.child[word[0]])
    }
  } else {
    return false
  }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix, node) {
  if (!prefix) return false;
  node = node || this.root;
  let isEnd = prefix.length === 1;
  if (node.child[prefix[0]]) {
    if (isEnd) return true
    return this.startsWith(prefix.slice(1), node.child[prefix[0]])
  } else {
    return false
  }
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

let trie = new Trie();

trie.insert("apple");
console.log(trie);

trie.search('apple');
trie.search('app');
trie.startsWith('app');
trie.insert('app');
trie.search('app');