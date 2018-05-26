describe("Remove noise function", function(){
  it ("should remove noise strings from test string 1", function(){
  	var test1 = "h%e&·%$·llo w&%or&$l·$%d";
    Test.assertEquals(removeNoise(test1), "hello world");
  });
});
