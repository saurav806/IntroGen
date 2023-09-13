import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port =3000;
 
app.use(bodyParser.urlencoded({extended:true}));

var  name;
var  stream;
var  degree;
var  cgpa;
var  place;
var  projects;
var  tstack;
var  hobby;

function data(req,res,next){
    name = req.body["name"];
    stream = req.body["stream"];
    degree = req.body["degree"];
    cgpa = req.body["cgpa"];
    place = req.body["place"];
    projects = req.body["projects"];
    tstack = req.body["tstack"];
    hobby = req.body["hobby"];
    next();
}

app.use(data);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");

})

app.post("/submit",(req,res)=>{
    // res.sendFile(__dirname+"/submit.html");
    res.send(
    `<h1>IntroGEn - An Intro Generator</h1> Thank you for giving me the opportunity to be interviewed for this position today. <br> My name is ${name}. I'm incredibly committed to achieving my goals. <br> I am a ${stream} enthusiast, currently pursuing a ${degree} with a CGPA of ${cgpa}. My educational background includes a bachelor's degree as well as completing my 10th and 12th grades in ${place}.<br> Throughout my semesters, I've undertaken ${projects} projects that have honed the skills I've acquired. My primary tech stack involves working with ${tstack} alongside practicing data structures and algorithms. <br> And last, I love ${hobby}. <br> That concludes a brief overview of myself.
    `);

})

app.listen(port,()=>{
    console.log(`Server has started at ${port}`);
});
