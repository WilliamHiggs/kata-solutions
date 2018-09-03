function DNAtoRNA(dna) {
  return dna.split('').map(x => x === "T" ? "U" : x).join('');
};

//refactor

const DNAtoRNA = dna => dna.split('T').join('U');
