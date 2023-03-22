const cardArray = [

    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
   
    {
        name: 'fries',
        img: 'images/fries.png',
    },

    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
   
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },

    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },

    {
        name: 'pizza',
        img: 'images/pizza.png',
    },

    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
   
    {
        name: 'fries',
        img: 'images/fries.png',
    },

    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
   
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },

    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },

    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
]


// get them in a random orger


//console.log(cardArray)


//sort array elements randomly

cardArray.sort(()=>0.5 -Math.random())
//console.log(cardArray)

const girdDisplay =  document.querySelector('#grid')

const resultDislplay = document.querySelector('#result')


// Create another array 46:47

let cardsChosen =[]// this can be "const" because we not change the array, only push elements into it 
//console.log(girdDisplay)

let cardsChosenIds=[] // use 'let' be caus we want  it to be an empty array

const cardsWon=[] // how many matches we have


function createBoard(){
  //create an element for each object in array //

  for (let i = 0; i< cardArray.length; i++){ //counting starts at index zero and stops at nine

    const card  = document.createElement('img') //35:43

    card.setAttribute('src', 'images/blank.png') //35:59  
    card.setAttribute('data-id', i) //35:59 
    //console.log(card,i)
    card.addEventListener('click',flipCard)
    //girdDisplay.append(card)
    girdDisplay.appendChild(card)
 
  }



}

createBoard()

//function that checks for match

function checkMatch(){

    ///document.querySelectorAll('#grid img')// this will select all img TAG within id grid 

    const cards = document.querySelectorAll('img') //since this is a small project, just specifiying all id TAG img is enough

    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    console.log(cards)
    console.log('check for match!')//50:08

    if (optionOneId  == optionTwoId){ // Ciri put a layer to destiguish a card being chosen twice
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
    }


    if ((cardsChosen[0] == cardsChosen[1]) &&(optionOneId  != optionTwoId)){

        alert('you found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')  //55:53
        cards[optionOneId].removeEventListener('click',flipCard) //56:17 this removes the ability to click on the card
        cards[optionTwoId].removeEventListener('click',flipCard)

        cardsWon.push(cardsChosen)// if match, cardsChosen will be pushed to cards Won
    } else {

        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry Try again!')
        
    }

    resultDislplay.textContent = cardsWon.length// textContent in lieu of innerHTML
    cardsChosen =[] //cards chosen are reset to empty after 2 cards are checked for matching
    cardsChosenIds =[]

    if (cardsWon.length == cardArray.length/2){

        resultDislplay.innerHTML = 'PANALO!! you found them all!'
    }
}



//function that flips a card when we click it

function flipCard(){
    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    console.log(cardArray[cardId].name)// 45:49 
    cardsChosen.push(cardArray[cardId].name)//47:14
    cardsChosenIds.push (cardId) //53.31
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    console.log('clicked', cardId)
    console.log(cardsChosen)
    this.setAttribute('src', cardArray[cardId].img)

    if (cardsChosen.length ===2){

        setTimeout(checkMatch,500)
    }

}