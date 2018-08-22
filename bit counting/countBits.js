var countBits = n => n.toString(2).split('').reduce((a,b)=>a+(b == "1"), 0);
