'use strict';
const LinkedList = require('./linkedlist');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const testt = new LinkedList()
testt.addToHead(0)
numbers.forEach(val => testt.addToTail(val))
testt.getNthNode(6).next = testt.getNthNode(3)
//Complete this algo

const isLoop = (linkedlist) => {
  // console.log(linkedlist)

  if (!linkedlist.head || !linkedlist.head.next) {
    return false
  }
  let nodeMap = {}
  let currentNode = linkedlist.head
  while (currentNode.next) {
    if (nodeMap[currentNode.next.value]) {
      return currentNode
    } else {
      nodeMap[currentNode.value] = currentNode.value

    }
    currentNode = currentNode.next
  }
  return false


};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
isLoop(testt)

module.exports = isLoop