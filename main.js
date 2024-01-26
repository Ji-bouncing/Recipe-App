
document.querySelector('#getDish').addEventListener('click',fetchDish)

function fetchDish(){
  const dish = document.querySelector('#inputValue').value.toLowerCase()
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`
  fetch(url)
  .then(res => res.json())
  .then( data => {
    console.log(data.meals)
    data.meals.forEach( obj => {
      document.querySelector('img').src = obj.strMealThumb
      document.querySelector('#DishName').innerText = obj.strMeal
      document.querySelector('h3').innerText = obj.strArea
      document.querySelector('section').style.display = 'block'
      document.querySelector('img').style.display = 'block'
      //create a list of ingredients
         

     document.querySelector('#putRecipe').innerText = obj.strInstructions
     localStorage.setItem('Food',obj.strMeal)
     if(!localStorage.getItem('Food')){
       localStorage.setItem('obj.strMeal')
     }else{
            let food = localStorage.getItem('Food')
  localStorage.setItem('food') + ' ; ' + obj.strMeal
     }

    })

  })
  .catch( err => {
    console.log(`Error ${err}`)
  });
}
