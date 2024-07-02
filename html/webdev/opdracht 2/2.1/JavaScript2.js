        function processSentence() {
            let sentence = document.getElementById('sentenceInput').value;

            let wordsArray = sentence.split(" ");

            wordsArray.forEach(word => console.log(word));

            console.log("Number of words in the sentence: " + wordsArray.length);

            let outputElement = document.getElementById('output');
            outputElement.innerHTML = "Words:<br>";
            wordsArray.forEach(word => {
                outputElement.innerHTML += word + "<br>";
            });
            outputElement.innerHTML += "<br>Total words in the sentence: " + wordsArray.length;
        }