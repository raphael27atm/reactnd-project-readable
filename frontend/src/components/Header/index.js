import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({categories}) => {
  return (
    <div>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Readable</h1>
        <p className="lead">Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.</p>
      </div>
      <div className="card-deck mb-3 text-center">
        {categories.map(category=>(
          <div className="card mb-4 box-shadow category-card" key={category.name}>
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">{category.name}</h4>
            </div>
            <div className="card-body">
                <p>{category.description}</p>                                        
                <Link to={`/${category.path}`}>
                    <button type="button" className="btn btn-lg btn-block btn-outline-primary">View details</button>
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Header
