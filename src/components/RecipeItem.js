import React from 'react'

const RecipeItem = (props) => (
    <div className="col-sm-3 mt-4">
        <div className="card">
        <a href={props.href}>
            <img className="card-img-top img-fluid" src={props.img} alt="" />
            </a>
            <div className="card-body">
                <h5 className="card-title mark-text">{props.title}</h5>
                <p className="card-text">
                    <strong>Ingredients: </strong><span className="mark-text">{props.ingredients}</span>
                </p>
            </div>
           
        </div>
    </div>
)

export default RecipeItem;