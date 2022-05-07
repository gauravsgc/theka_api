const express=require('express');
const connectDB=require('./DB_connect/connection');

const app=express();
//Import routes
const PostRoute=require('./Route/Posts');
const PostRouteClient=require('./Route/PostClient');
//middleware
app.use('/',PostRoute);
app.use('/worker_search',PostRoute);
app.use('/worker_signup',PostRoute);

app.use('/',PostRouteClient);
app.use('/client',PostRouteClient);
app.use('/client_signup',PostRouteClient);

//......
connectDB();
const Port=process.env.Port||4000;

app.listen(Port,()=>

console.warn('server started')
);