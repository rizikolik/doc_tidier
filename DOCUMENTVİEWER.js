let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end. ';

let overusedWords = ['really', 'very', 'basically' ];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];
let storyWords=story.split(' ');
//console.log(storyWords.length);
let betterWords=
    storyWords.filter(word=> {//because of ı forget thıs return here ı was gonna get mad !and also ı had to place  "!" to the begging of unnecarraywords.
      return    !unnecessaryWords.includes(word)    
})
//console.log(betterWords.length);
/*console.log(storyWords.filter(word=>{
   return overusedWords.includes(word)
 }).length);          >this is my solution to the count of   overusedWords in the document.but codecacademy choosed another way.below ı made theır way.  */

let reallycount=0;
let verycount=0;
let basicallycount=0;
for(word of storyWords){
  if(word==='really'){
    reallycount +=1;
  }else if(word==='very'){
    verycount +=1;
  }else if(word==='basically'){
    basicallycount +=1;
  }
  
}
/*console.log(" number of really :"+ reallycount);
console.log(" number of very :"+ verycount);
console.log(" number of basically :" +basicallycount);*/


let sentences = 0;
 //ı couldnt find the solution of thıs part.
storyWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences+=1;
  }
});
//console.log(sentences)  
console.log('number of words in the documents is : '+ storyWords.length);
console.log('number of sentences  in the documents is : '+ sentences);
console.log('number of really  is : '+reallycount );
console.log('number of very   is : '+ verycount );
console.log('number of basically is : '+ basicallycount );
console.log(betterWords.join(' '));
// my extras ;


  

