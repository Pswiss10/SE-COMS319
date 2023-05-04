// Initialize dependencies

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Product = require("./dataSchema.js");
//const { MongoClient } = require("mongodb");

app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use("/images", express.static("images"));

// Connect to the database

mongoose.connect("mongodb://127.0.0.1:27017/reactdata",
{
dbName: "reactdata",
useNewUrlParser: true,
useUnifiedTopology: true,
}
);

const port = process.env.PORT || 4000;
const host = "localhost";
//const client = new MongoClient(url);
//const db = client.db(dbName);

// Begin listening for requests and responses

app.listen(port, () => {
console.log(`App listening at http://%s:%s`, host, port);
});

app.get('/favicon.ico', (req, res) => res.status(204));

// Get all shoes

app.get("/", async (req, resp) => {

    //await client.connect();
    console.log("hello from get all method");

    // Finding all the shoes with an empty query will get every shoe

    const query = {};
    const allProducts = await Product.find(query);
   // console.log("Hello");
    //console.log(allProducts);
    resp.json(allProducts);
});
    
app.get("/:id", async (req, resp) => {
    console.log("hello from get 1 method");
    const id = Number(req.params.id);
    const query = { _id: id };
    const oneProduct = await Product.findOne(query);
    console.log(oneProduct);
    resp.send(oneProduct);
});

app.post("/insert/", async (req, res) => {
    console.log(req.body);
    const p_id = req.body._id;
    const ptitle = req.body.playerTitle;
    const pprice = req.body.price;
    const pdescription = req.body.playerDescription;
    const pimage = req.body.playerImage;
    const prate = req.body.rating.rate;
    const pcount = req.body.rating.count;
    const pposition = req.body.position;
    const pteam = req.body.team;
    const pshoeTitle = req.body.shoeTitle;
    const pshoeImage = req.body.shoeImage;
    const pfeatured = req.body.featured;


    const playerData = new Product({
        _id: p_id,
        playerTitle: ptitle,
        playerDescription: pdescription,
        position: pposition,
        team: pteam,
        playerImage: pimage,
        shoeTitle: pshoeTitle,
        price: pprice,
        shoeImage: pshoeImage,
        rating: 
        { 
            rate: prate, 
            count: pcount 
        },
        count: pcount,
        featured: pfeatured
    });

    try {
        // await formData.save();
        await Product.create(playerData);
        const messageResponse = { message: `Product ${p_id} added correctly` };
        res.send(JSON.stringify(messageResponse));
    } catch (err) {
        console.log("Error while adding a new product:" + err);
    }
});

app.delete("/delete/", async (req, res) => {
    console.log("Delete :", req.body);
    try {
    const query = { _id: req.body._id };
    await Product.deleteOne(query);
    const messageResponse = {
    message: `Product ${req.body._id} deleted correctly`,
    };
    res.send(JSON.stringify(messageResponse));
    } catch (err) {
    console.log("Error while deleting :" + req.body._id + " " + err);
    }
});


// app.put("/update/", async (req, res) => {
//     console.log("Update :", req.body);
//     try {
//     const query = { _id: req.body._id, price: req.body.price };
//     await Product.updateOne({_id: query._id},{price: query.price});
//     const messageResponse = {
//     message: `Product ${req.body._id} updated correctly`,
//     };
//     res.send(JSON.stringify(messageResponse));
//     } catch (err) {
//     console.log("Error while updating :" + req.body._id + " " + err);
//     }
// });

app.put("/update/", async (req, res) => {
    const pcount = req.body.count;
    const p_id = req.body._id;
    console.log("Put :", req.body);
    try {
        console.log("entered try");
        const query = { _id: p_id };
        console.log("id: ", query);
        const update = { count: pcount };
        console.log("update : ", update);
        //const options = { new: true };
        const updatedProduct = await Product.findOneAndUpdate({_id:p_id}, {$set:{count: pcount}}, {new:true});
        console.log(updatedProduct, "End of updatedProduct");
        res.send(JSON.stringify(updatedProduct));
    } catch (error) {
        console.log("Errored out");
        console.error(error);
        res.status(500).send(error);
    }
});

app.get("/featured/", async (req, resp) => {
    //await client.connect();
    try{
        console.log("hello from get featured method");
        const query = {featured: 1};
        const featuredProducts = await Product.find(query);
        resp.json(featuredProducts);
    } catch (error){
        console.log(error);
        alert(error);
    }
});