// 3차 (PASS)
// 시간 복잡도 O(N)으로 줄임
// Map을 만들기 위해 reduce 작업이 오래걸린 것으로 판단

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const inorderValueIndexMap = {};
  for (let index = 0; index < inorder.length; index++) {
    inorderValueIndexMap[inorder[index]] = index;
  }

  return buildSubTree(0, inorder.length, 0, postorder.length);

  function buildSubTree(
    inorderStart,
    inorderEnd,
    postorderStart,
    postorderEnd
  ) {
    if (postorderStart === postorderEnd) {
      return null;
    }
    if (postorderStart + 1 === postorderEnd) {
      return new TreeNode(postorder[postorderStart]);
    }

    const parentValue = postorder[postorderEnd - 1];
    const parentInorderIndex = inorderValueIndexMap[parentValue];
    const parentPostOrderIndex = parentInorderIndex - inorderStart;
    const leftNode = buildSubTree(
      inorderStart,
      parentInorderIndex + 1,
      postorderStart,
      postorderStart + parentPostOrderIndex
    );
    const rightNode = buildSubTree(
      parentInorderIndex + 1,
      inorderEnd,
      postorderStart + parentPostOrderIndex,
      postorderEnd - 1
    );

    return new TreeNode(parentValue, leftNode, rightNode);
  }
};

// 2차 (PASS)
// 시간복잡도 O(N)으로 줄이려고 하였으나 10배 늘어나고 공간복잡도가 절반으로 줄어듬

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const inorderValueIndexMap = inorder.reduce(
    (map, value, index) => ({ ...map, [value]: index }),
    {}
  );

  return buildSubTree(0, inorder.length, 0, postorder.length);

  function buildSubTree(
    inorderStart,
    inorderEnd,
    postorderStart,
    postorderEnd
  ) {
    if (postorderStart === postorderEnd) {
      return null;
    }
    if (postorderStart + 1 === postorderEnd) {
      return new TreeNode(postorder[postorderStart]);
    }

    const parentValue = postorder[postorderEnd - 1];
    const parentInorderIndex = inorderValueIndexMap[parentValue];
    const parentPostOrderIndex = parentInorderIndex - inorderStart;
    const leftNode = buildSubTree(
      inorderStart,
      parentInorderIndex + 1,
      postorderStart,
      postorderStart + parentPostOrderIndex
    );
    const rightNode = buildSubTree(
      parentInorderIndex + 1,
      inorderEnd,
      postorderStart + parentPostOrderIndex,
      postorderEnd - 1
    );

    return new TreeNode(parentValue, leftNode, rightNode);
  }
};

// 1차 (PASS)
// 시간복잡도 O(N^2)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (inorder.length === 0) {
    return null;
  }
  if (inorder.length === 1) {
    return new TreeNode(inorder[0]);
  }

  const parentVal = postorder[postorder.length - 1];
  const parentIndex = inorder.findIndex((val) => val === parentVal);
  const leftNode = buildTree(
    inorder.slice(0, parentIndex),
    postorder.slice(0, parentIndex)
  );
  const rightNode = buildTree(
    inorder.slice(parentIndex + 1),
    postorder.slice(parentIndex, postorder.length - 1)
  );

  return new TreeNode(parentVal, leftNode, rightNode);
};
