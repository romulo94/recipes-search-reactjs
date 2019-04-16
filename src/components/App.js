import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: '',
      recipes: recipes.results
    };
    this.searchStringInRecipe =this.searchStringInRecipe.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.markText = this.markText.bind(this)
  }

  searchStringInRecipe = (string) => {
    
    const regex = new RegExp(`${string}`,"gi")
    let results = [];
    this.recipes.forEach((rec)=>{
      if(rec.title.match(regex) || rec.ingredients.match(regex)) results.push(rec);
    })
    this.setState({recipes:results},function () {
      this.markText(string,regex)
    })
  }
  
  handleChange = (e) => {
    this.setState({searchString:e.target.value})
    this.searchStringInRecipe(e.target.value)
  }

  markText = (string,regex) => {
    let text = document.querySelectorAll(".mark-text")
    text.forEach((element,index) => {
      let conteudo = element.textContent
      let firstDigit = conteudo.match(regex)
      let tam = string.length
      
      if(firstDigit !== null){
        let indx = conteudo.indexOf(...firstDigit)
        text[index].innerHTML = text[index].innerText.replace(conteudo.substring(indx,tam + indx),`<mark>${conteudo.substring(indx,tam + indx)}</mark>`)
      }
      else{
        text[index].innerHTML = text[index].innerText
      }
    });
    

  }

  render() { 
    const { recipes, searchString } = this.state
    return (
      <div className="App">
        <Navbar search={searchString} input={this.handleChange}/>
        <div className="container mt-10">
          <div className="row">
            {
              recipes.map((rec,index) => {
                return <RecipeItem 
                  key = {index}
                  href = {rec.href}
                  img = {rec.thumbnail}
                  ingredients = {rec.ingredients}
                  title = {rec.title}/>
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
