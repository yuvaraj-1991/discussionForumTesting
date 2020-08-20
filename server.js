let express = require('express')

let app = express()

app.use(express.static('public'))

app.use(express.urlencoded({extended: false}))

app.get('/', function(req,res) {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet">
        <style>
        *{
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
        }
        
        nav {
            display: flex;
            justify-content: space-around;
            align-items: center;
            min-height: 8vh;
            background-color: #5D4954;
            font-family: 'Poppins', sans-serif;
        }   
        
        .logo {
            color: rgb(226, 226, 226);
            text-transform: uppercase;
            letter-spacing: 3px;
            font-size: 30px;
        }
        
        .nav-links {
            display: flex;
            justify-content: space-around;
            width: 60%;    
        }
        
        .nav-links a{
            color: rgb(226, 226, 226);
            text-decoration: none;
            letter-spacing: 3px;
            font-weight: bold;
            font-size: 14px;
        }
        
        .nav-links li{
            list-style: none;
        }
        </style>
        
        <title>Forum</title>
    </head>
    <body>
        <nav>
           <div class="logo">
               <h4>Discussion Forum</h4>
           </div>            
           <ul class="nav-links">
                <li id="home"><a href="/home"> Home </a></li>
                <li id="contact-us"><a href="/contact-us"> Contact US </a></li>
                <li id="about"><a href="/about"> About </a></li>
                <li id="sign-up"><a href="/sign-up"> Sign Up </a></li>
                <li id="log-in"><a href="/log-in"> Log In </a></li>
                <li id="search"><a href="/search"> Search </a></li>
            </ul>   
        </nav>
        <div>
            
        </div>
        <div class="image">
            <img src="https://images.unsplash.com/photo-1520627977056-c307aeb9a625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format" alt="logo" style="width: 1000px;height:500px;">
        </div>
    
        <nav class="navbar navbar-light bg-light">
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
            </form>
          </nav>       
                  
            <h3>Latest Discussions</h3>
            
            <div class="latestDiscussions" id="latestDiscussionsList">
                <p>Latest test 1</p>
                <p>Latest test 2</p>
                <p>Latest test 3</p>
                <p>Latest test 4</p>
            </div>
        
    
        <!-- All the Bootsrap plugins for JS -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    
        <script src="/browser.js"></script>
    </body>
    </html>`)
})

app.get('/home', function(req, res) {
    res.send('Welcome to Home Page')
})

app.get('/contact-us', function(req, res) {
   res.send('Welcome to Contact us Page') 
})

app.get('/about', function(req, res) {
    res.send('Welcome to About us Page')
})

app.post('/sign-up', function(req, res) {
    res.send('Enter the details to sign up')
})

app.get('/log-in', function(req, res) {
    res.send(`
                <h1>Enter your credentails</h1>
                <form action="/log-in" method="POST">
                    <label for="username">UserName</label>
                    <input type="text"> <br><br>
                    <label for="password">Password</label>
                    <input type="password">
                </form>`)
})

app.get('/search', function(req, res) {
    res.send('Enter the details to search')
})

app.listen(3000)

