/**
 * @param {string} pattern
 * @return {number[]}
 */
function getPatternNextIndex(pattern) {
  const nextIndex = [-1];

  let patternIndex = 0;
  let prevMatchIndex = -1;

  while (patternIndex < pattern.length) {
    if (prevMatchIndex === -1 || pattern[patternIndex] === pattern[prevMatchIndex]) {
      if (pattern[++patternIndex] === pattern[++prevMatchIndex]) {
        nextIndex[patternIndex] = nextIndex[prevMatchIndex];
      } else {
        nextIndex[patternIndex] = prevMatchIndex;
      }
      // nextIndex[++patternIndex] = ++prevMatchIndex;
    } else {
      prevMatchIndex = nextIndex[prevMatchIndex];
    }
  }

  return nextIndex;
}

/**
 * KMP 字符匹配算法
 * @param {string} text
 * @param {string} pattern
 * @return {number}
 */
export default function knuthMorrisPratt(text, pattern) {
  let textIndex = 0;
  let patternIndex = 0;

  const patternNextIndex = getPatternNextIndex(pattern);

  while (textIndex < text.length && patternIndex < pattern.length) {
    if (patternIndex === -1 || text[textIndex] === pattern[patternIndex]) {
      textIndex++;
      patternIndex++;
    } else {
      patternIndex = patternNextIndex[patternIndex];
    }
  }

  if (patternIndex === pattern.length) {
    return textIndex - patternIndex;
  } else {
    return -1;
  }
}
