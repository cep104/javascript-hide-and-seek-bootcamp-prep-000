
function getFirstSelector(selector) {
    return document.querySelector(selector);
  }
  
  function nestedTarget() {
    return document.querySelector('#nested .target');
  }
  
  function increaseRankBy(n) {
    //   console.log(n) then look in console
    var ranks = document.querySelectorAll('ul.ranked-list li');
    for (var i = 0; i < ranks.length; i++) {
      ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
    //   have to turn the number into an integer to add it to n
    }
  }
  
//   function deepestChild() {
     
//     let node = document.getElementById('grand-node');
//     let nextNode = node.children[0];
  
//     while (nextNode) {
//       node = nextNode;
//       nextNode = node.children[0];
//     }
  
//     return node;
//   }

  function deepestChild() {
    var node = document.getElementById('grand-node')
      while (node.children.length > 0) {
          
        node = node.children[0]
        console.log(node.children[0])
      }
      return node
    }

    deepestChild()

