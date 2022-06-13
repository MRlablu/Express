const express = require('express')
const morgan = require('morgan')
const app = express()

app.set('view engine', 'ejs')


app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))

app.use(express.json())


app.get('/about',(req,res)=>{
    res.render('pages/about',{title: 'EJS is Too much Awesome Template Engine'})
})


app.get('/help',(req,res)=>{
    res.render('pages/help')
})

app.get('/got', (req, res) => {
    res.send('<h1>Working with templete Engine</h1>')
})

app.get('/', (req, res) => {
    let post = {
        title: 'Hridoy Hasan',
        body: 'Human Body',
        published: true
    }

    let posts = [
        { title: 'Title One', author: 'Hridoy' },
        { title: 'Title Two', author: 'Hasan' },
        { title: 'Title Three', author: 'Habib' },
        { title: 'Title Four', author: 'Hamid' },

    ]
    res.render('pages/index', { title: 'EJS is Too much Awesome Template Engine', post, posts })
})



const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);

})

// ......8.1-8.9.......//