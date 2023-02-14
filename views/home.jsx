const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
        <main>
        <h1>HOME</h1>
              <div>
              <img src= "/images/sandwiches.jpg"   alt="Avocados Bananas Tomato Toast"/>
              </div>
              <div>
                Photo by <a href="https://unsplash.com/@ellaolsson">Ella Olsson</a> on <a href="https://unsplash.com/s/photos/free-food">Unsplash</a>
              </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>

          </main>
      </Def>
    )
  }
  

module.exports = home