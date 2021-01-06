Function = countWords()
{
    var text = document.getElementById("inputTextField").value;
    var numWords=0;
    for (var i=0; l < text.length; i++ )
    {
      var currentCharacter= text[i];
      if (currentCharacter == "")
      {    
      numWords += 1; 
      } 
    } 
    numWords += 1;
    document.getElementById("numWordsOutput").innerHTML = numWords + "words";
}