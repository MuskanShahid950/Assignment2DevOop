const express= require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('Dockerise image deployed on heroku');
});
app.get('/hello', (req, res) => {
    res.send('Hello fromDockerise image deployed on heroku');
});
app.listen(3001, ()=>{
    console.log("Backend server running on port 3001")
    
})
