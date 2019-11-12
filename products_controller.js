module.exports = {
  create: (req, res) => {
    // res.status(200).send('hello')
    const db = req.app.get('db')
    const {name, description, price, image_url} = req.body
    db.create_product({
      name,
      description,
      price,
      image_url
    })
    .then(result => {
      res.status(201).json(result)
    }).catch(err => {
      console.log(err)
    })  
  },
  getOne: (req, res) => {
    const db = req.app.get('db')
    db.read_product(req.params.id)
    .then(result => {
      res.status(200).json(result)
    }).catch(err => {
      console.log(err)
    })  
  },
  getAll: (req, res) => {
    const db = req.app.get('db')
    db.read_products()
    .then(result => {
      res.status(200).json(result)
    }).catch(err => {
      console.log(err)
    })  
  },
  update: (req, res) => {
    console.log(req)
    const db = req.app.get('db')
    const {name, description, price, image_url} = req.body
    const {id} = req.params
    db.update_product([
      name,
      description,
      price,
      image_url,
      id
    ])
    .then(result => {
      res.status(200).send(result)
    }).catch(err => {
      console.log('broke', err)
    })
  },
  delete: (req, res) => {
    const db = req.app.get('db')
    db.delete_product(req.params.id)
    .then(result => {
      res.status(200).send(result)
    }).catch(err => {
      console.log(err)
    })
  },
}
