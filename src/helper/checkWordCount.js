function checkWordCount(sentence) {
    const words = sentence.split(" ");
    if (words.length > 3) {
        return words.slice(0, 3).join(" ");
    }
    return sentence;
}

export { checkWordCount };
