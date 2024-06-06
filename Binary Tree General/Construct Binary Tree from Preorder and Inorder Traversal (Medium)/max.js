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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const inorderValueIndexMap = {};
  for (let index = 0; index < inorder.length; index++) {
    inorderValueIndexMap[inorder[index]] = index;
  }

  return buildSubTree(0, preorder.length, 0, inorder.length);

  function buildSubTree(preorderStart, preorderEnd, inorderStart, inorderEnd) {
    if (preorderStart === preorderEnd) {
      return null;
    }
    if (preorderStart + 1 === preorderEnd) {
      return new TreeNode(preorder[preorderStart]);
    }

    const parentValue = preorder[preorderStart];
    const parentInorderIndex = inorderValueIndexMap[parentValue];
    const parentPreorderIndex = parentInorderIndex - inorderStart;
    const leftNode = buildSubTree(
      preorderStart + 1,
      preorderStart + 1 + parentPreorderIndex,
      inorderStart,
      parentInorderIndex
    );
    const rightNode = buildSubTree(
      preorderStart + 1 + parentPreorderIndex,
      preorderEnd,
      parentInorderIndex + 1,
      inorderEnd
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const inorderValueIndexMap = inorder.reduce(
    (map, value, index) => ({ ...map, [value]: index }),
    {}
  );

  return buildSubTree(0, preorder.length, 0, inorder.length);

  function buildSubTree(preorderStart, preorderEnd, inorderStart, inorderEnd) {
    if (preorderStart === preorderEnd) {
      return null;
    }
    if (preorderStart + 1 === preorderEnd) {
      return new TreeNode(preorder[preorderStart]);
    }

    const parentValue = preorder[preorderStart];
    const parentInorderIndex = inorderValueIndexMap[parentValue];
    const parentPreorderIndex = parentInorderIndex - inorderStart;
    const leftNode = buildSubTree(
      preorderStart + 1,
      preorderStart + 1 + parentPreorderIndex,
      inorderStart,
      parentInorderIndex
    );
    const rightNode = buildSubTree(
      preorderStart + 1 + parentPreorderIndex,
      preorderEnd,
      parentInorderIndex + 1,
      inorderEnd
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) {
    return null;
  }
  if (preorder.length === 1) {
    return new TreeNode(preorder[0], null, null);
  }

  const parentVal = preorder[0];
  const parentIndex = inorder.findIndex((val) => val === parentVal);
  const leftNode = buildTree(
    preorder.slice(1, parentIndex + 1),
    inorder.slice(0, parentIndex)
  );
  const rightNode = buildTree(
    preorder.slice(parentIndex + 1),
    inorder.slice(parentIndex + 1)
  );

  return new TreeNode(parentVal, leftNode, rightNode);
};
