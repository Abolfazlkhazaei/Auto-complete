let $ = document;
let autocompleteWrapper = $.querySelector(".search-input");
let searchInputElem = $.querySelector("input")
let autocompleteBox = $.querySelector(".autocom-box");


searchInputElem.addEventListener("keyup" , ()=>{
    let searchValue = searchInputElem.value;


    if(searchValue){
        autocompleteWrapper.classList.add("active");


        let filterWords = suggestions.filter(function(word){
          return  word.toLocaleLowerCase().startsWith(searchValue.toLocaleLowerCase())
        })
        suggestionWordsGenerator(filterWords)

        console.log(filterWords);
    }else{
        autocompleteWrapper.classList.remove("active")
    }
})


function suggestionWordsGenerator (wordsArray){     
   let listItemArray =  wordsArray.map((word)=>{
        return '<li>' + word + '</li>'
    })

    let customListItem;
    if(!listItemArray.length){
    customListItem =  '<li>' + searchInputElem.value + '</li>'
    }else{
        customListItem = listItemArray.join('')
    }

    autocompleteBox.innerHTML = customListItem
    select()
}

function select(){
    let allListItems = autocompleteBox.querySelectorAll('li');
    allListItems.forEach(function (wordItem){
        wordItem.addEventListener('click',function(event){
            searchInputElem.value = event.target.textContent

            autocompleteWrapper.classList.remove("active")
        })
    })
}