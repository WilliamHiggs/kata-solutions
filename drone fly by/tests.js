Test.describe("Example tests",_=>{
Test.assertEquals(flyBy('xxxxxx', '====T'), 'ooooox');
Test.assertEquals(flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx'); 
Test.assertEquals(flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx'); 
})
