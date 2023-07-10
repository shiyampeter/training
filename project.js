const { createClient } = require("@commercetools/sdk-client")

const { createRequestBuilder, features } = require("@commercetools/api-request-builder")

const { createAuthMiddlewareForClientCredentialsFlow } = require("@commercetools/sdk-middleware-auth")

const { createHttpMiddleware } = require("@commercetools/sdk-middleware-http")

//const { SdkAuth } = require("@commercetools/sdk-auth")

const fetch = require("node-fetch")

require("dotenv").config()

console.log("Getting started with commercetools Nodejs SDK");

const {

CTP_CLIENT_ID,

CTP_CLIENT_SECRET,

CTP_PROJECT_KEY,

CTP_API_URL,

CTP_AUTH_URL,

CTP_SCOPES

} = process.env;

const projectKey = CTP_PROJECT_KEY

// Create a httpMiddleware for the your project AUTH URL

const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({

host: CTP_AUTH_URL,

projectKey,

credentials: {

clientId: CTP_CLIENT_ID,

clientSecret: CTP_CLIENT_SECRET,

},

scopes: [CTP_SCOPES],

fetch,

})

// Create a httpMiddleware for the your project API URL

const httpMiddleware = createHttpMiddleware({

host: CTP_API_URL,

fetch,

})

// Create a client using authMiddleware and httpMiddleware

const client = createClient({

middlewares: [authMiddleware, httpMiddleware],

})


// Create a request builder for the project

const projectService = createRequestBuilder({ projectKey }).project;

// Create a request to get project information

const createGetProjectRequest = {

uri: projectService.build(),

method: "GET",

};

// (async () => {

// try {

// // Use the `client.execute` method to send a message from this app

// await client.execute(createGetProjectRequest)

// .then(data => {

// console.log("Project information — ->", data);

// })

// .catch(error => {

// console.log("ERROR — ->", error);

// })

// } catch (error) {

// console.log("ERROR — ->", error);

// }

// //console.log("Got project information");

// })()

const productOptions = {

    projectKey,
    
    customServices: {
    
    products: {
    
    type: "products",
    
    endpoint: "/products",
    
    features: [features.query, features.queryOne, features.create, features.update, features.del, features.search],
    
    },
    
    },
    
    }
    
    const requestBuilderProduct = createRequestBuilder(productOptions)
    
    // const uriProduct = requestBuilderProduct.products.build() // product list
    
    // // Create a request to get Product information
    
    // const createGetProductRequest = {
    
    // uri: uriProduct,
    
    // method: "GET",
    
    // };
    
    // (async () => {
    
    // try {
    
    // // Use the `client.execute` method to send a message from this app
    
    // await client.execute(createGetProductRequest)
    
    // .then(data => {
    
    // //console.log("Product info — ->", data.body.masterData.current.name.en);
    
    // // console.log("Product info — ->", data.body.results);
    
    // console.log("Product info — ->", data.body.results[0]);
    
    // })
    
    // .catch(error => {
    
    // console.log("ERROR — ->", error);
    
    // })
    
    // } catch (error) {
    
    // console.log("ERROR — ->", error);
    
    // }
    
    // console.log("\n …………………….\n");
    
    // })()



//     const uriProduct = requestBuilderProduct.products.byId("4934cce2-3205-494f-8f1d-68b520296901").build() // product by ID

// // Create a request to get Product information

// const createGetProductRequest = {

// uri: uriProduct,

// method: "GET",

// };

// (async () => {

// try {

// // Use the `client.execute` method to send a message from this app

// await client.execute(createGetProductRequest)

// .then(data => {

// console.log("Product info — ->", data.body);

// })

// .catch(error => {

// console.log("ERROR — ->", error);

// })

// } catch (error) {

// console.log("ERROR — ->", error);

// }

// console.log("\n …………………….\n");

// })()


const customerCustomTypeOptions = {

    projectKey,
    
    customServices: {
    
    customers: {
    
    type: "customers",
    
    endpoint: "/customers",
    
    features: [features.query, features.queryOne, features.create],
    
    },
    
    },
    
    }
    
    const requestBuilderType = createRequestBuilder(customerCustomTypeOptions)
    
    const uriType = requestBuilderType.customers.build();
    
    const data = {
    
    "customerNumber": "1000000001",
    
    "email": "ShrihariOm1@example.com",
    
    "firstName": "Hari",
    
    "lastName": "Om",
    
    "password": "secret123",
    
    // "custom": {
    
    // "type": {
    
    // "key": "customer-preferredShoeSize",
    
    // "typeId": "type"
    
    // },
    
    // "fields": {
    
    // "preferredShoeSize": {
    
    // "en": "40"
    
    // }
    
    // }
    
    // }
    
    }
    
    // Create a request to get Product information
    
    const createCustomCustomerRequest = {
    
    uri: uriType,
    
    method: "POST",
    
    body: data
    
    };
    
    (async () => {
    
    try {
    
    // Use the `client.execute` method to send a message from this app
    
    await client.execute(createCustomCustomerRequest)
    
    .then(data => {
    
    //console.log("Product info — ->", data.body.masterData.current.name.en);
    
    console.log("New Custom customer info — ->", data);
    
    // console.log(" \n Custom field — ->", data.body.customer.custom);
    
    })
    
    .catch(error => {
    
    console.log("ERROR — ->", error);
    
    })
    
    } catch (error) {
    
    console.log("ERROR — ->", error);
    
    }
    
    console.log("\n …………………….\n");
    
    })()