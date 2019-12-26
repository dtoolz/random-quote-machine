$(document).ready(function(){
    var randomQuote, randomNumber, randomAuthor;
      accessQuote();

    function accessQuote(){

       let quotes = ['The Way To Get Started Is To Quit Talking And Begin Doing ',
         'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.',
               'Don’t Let Yesterday Take Up Too Much Of Today. ',
               'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.'
            ];
       let authors = ['- Walt Disney', '- Winston Churchill', '- Will Rogers', '- Unknown' ];
       randomNumber = Math.floor((Math.random()*quotes.length));
       randomQuote = quotes[randomNumber];
       randomAuthor = authors[randomNumber];

       $('.my-quote').text(randomQuote);
       $('.my-author').text(randomAuthor);
    };


    $('.btn-primary').on('click', function(){
        window.open("https://twitter.com/intent/tweet?text="+randomQuote+" "+randomAuthor);
    });

    $('.btn-success').on('click', function(){
        accessQuote();
    });
   
});