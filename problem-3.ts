const countWordOccurrences = (
  givenSentence: string,
  givenWord: string
): number => {
  const words = givenSentence.toLowerCase().split(" ");
  return words.filter((word) => word === givenWord.toLowerCase()).length;
};

console.log(countWordOccurrences("I love typescript", "typescript"));
