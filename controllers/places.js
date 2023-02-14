const router = require ('express').Router()

router.get('/', (req, res)=> {
    console.log('controllers')

   
     
    //res.render('places/index')
let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/resturant.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/waffles.jpg'
  }]
  
    res.render('places/index', {places})
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})


module.exports = router