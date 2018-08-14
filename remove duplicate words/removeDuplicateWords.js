const removeDuplicateWords = s => s.split(' ').filter((element,index,self) => index == self.indexOf(element)).join(' ');
