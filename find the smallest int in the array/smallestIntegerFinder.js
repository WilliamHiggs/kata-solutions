class SmallestIntegerFinder {
  findSmallestInt(args) {
    this.args = args; 
    
    return this.args.sort((a,b) => a - b).shift();
  }
}
