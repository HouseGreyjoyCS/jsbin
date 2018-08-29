
const realDb = require('../db.js');

const binController = {}

binController.addBin = (req, res, next) => {
    console.log('user is trying to add a bin, these are their cookies: ', req.cookies);
    console.log('and this is their body: ', req.body);
    if (!req.body || !req.body.name) return res.status(500).json({ error: 'Must send new bin name.' });


    // get the req.cookie (put cookieparser in the middleware before this
    // query the database to see if the cookie is attached to an active session

    let query = "SELECT * FROM sessions WHERE session_id="+req.cookies['ssid']+";" //change "3" to req.cookies['ssid']
    // // console.log('realDb: ', realDb.connect);
    let qProm = realDb.one(query);
    let result;
    qProm.then((data) => {
        console.log('found session data for this user: ', data);
        result = data;
        let columns = '("bin_name", "created_date", "admin")'
        let binDataString = "($1, $2, $3)"
        let query = "INSERT INTO bins "+columns+" VALUES "+binDataString;
        let binData = [req.body.name, 'now()', data.session_id];
        console.log('add bin query: ', query, binData);

        realDb.query(query, binData).then((result) => {
            console.log('Add bin successful!');
            return res.json({ success: 'successfully created' });
        })
        .catch((err) => {
            console.log('error inserting bin')
            console.error(err);
            return res.send(err);
        })
        
    })
    .catch((err) => {
        console.log('error querying for session_id')
        console.error(err);
        return res.send(err);
    })
    // //query the database to find the user attached to the active session attached to the cookie and store their username

    // console.log(query, []);
    // dbReal.query(query, [])


    // VALUES ('req.body.name', Date.now(), thisUser, [], bcrypt(req.body.password), Date.now(), null);
    // db.create(req.body.name); //replace with thing that actually adds bin in the database
}

binController.getBin = (req, res, next) => {
  console.log('user is trying to access the bin!');

  //this is where you put the routing for the bins!

  console.log(req.params);

  
  
  
  
  if (req.params.name.split('.')[req.params.name.split('.').length - 1] === 'js'  || 
  req.params.name.split('.')[req.params.name.split('.').length - 1] === 'map' ||
  req.params.name.split('.')[req.params.name.split('.').length - 1] === 'css') {
    
    return next('route');
  }
  
  //they're looking for the actual bin data, instead of peripheral data about the bin, which comes second.
  let foundDB = db.findOne(req.params.name)
  if (foundDB) {
        console.log('users session id: ', req.cookies);
        //find the user's session id from their cookies, check to make sure its active
        //find their username, check to see that they are authorized to see the bin they're requesting
    if(/*IF FOUNDDB USERS INCLUDES THE USER (which you get from the session cookie in their browser) */ true){
      //ddReal.any('SELECT * FROM BINS WHERE name=$1', req.body.name)
      res.sendFile(path.resolve(__dirname, '../build/bin/index.html'));
    } else {
      //res.sendStatus UNAUTHORIZED FOR THIS BIN!!!!!!!!!!
    }
  } else {
    res.sendStatus(404).json({ error: 'This bin does not exist!!!' });
  }
}

module.exports = binController;