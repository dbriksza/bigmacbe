# bigmacbe
Backend for bigmac project

Due to small, static dataset the data is saved and accessed as a *JSON* object for efficiency in both development and usage.

The server can be ran using **npm start**

The server is hosted on *localhost:5000* by default

|endpoint|usage|return|
|--------|---------|-------------|
|GET"/"|just to test the server is running|"seems to be working"|
|POST"/ip"| the frontend will send the user's public IP in the body for reference |{{"country":the user's country},{"data":data about bigmacs from the user's country},{"randCountry":a random country to compare},{"randCountryData":data about bigmac's from a random country}}|


The server uses the following packages:
    "axios": "^0.20.0",
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "nodemon": "^2.0.4"
    
dotenv is unused as the server is not hosted anywhere and there is no need for alt-keys/ports/etc.
