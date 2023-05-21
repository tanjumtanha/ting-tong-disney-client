import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='w-75 mx-auto p-2' style={{ backgroundColor: 'lightblue' }}>
            <h2 className='text-primary text-center'>Question Answer</h2>
            <hr />
            <div>
                <h4>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
                div
                <br />
                <div>
                    <p>Access Token: An access token is a credential that is issued by an authentication server after a user successfully authenticates. It represents the user's authorization to access specific resources or perform certain actions. Access tokens are typically short-lived and have an expiration time. They are sent with each request to the server to gain access to the protected resources.
                        Refresh Token: A refresh token is also issued by the authentication server along with the access token. Unlike access tokens, refresh tokens have a longer lifespan. They are used to obtain a new access token when the original token expires. When the access token expires, the client can send the refresh token to the authentication server to obtain a fresh access token without requiring the user to re-authenticate.</p>
                    They work By:
                    <ol>
                        <li>The user authenticates with their credentials (username/password) or through another authentication flow.</li>
                        <li>The server validates the credentials and issues an access token and a refresh token.</li>
                        <li>
                            The client stores the access token securely and includes it in the header of subsequent API requests. etc.
                        </li>
                    </ol>
                    It's essential to store access tokens and refresh tokens securely on the client-side to prevent unauthorized access. Here are some recommended:
                    <ol>
                        <li>Use to secure storage mechanisms: Store tokens in a secure storage location, such as browser memory, encrypted cookies, or HTML5 web storage</li>
                        <li>Apply token storage strategies suitable for our application: The choice of storage mechanism may depend on factors such as the sensitivity of the data, the lifespan of tokens, and compliance requirements.</li>
                    </ol>
                </div>
            </div>
            <div>
                <h4>Compare SQL and NoSQL databases?</h4>
                <p>SQL (Structured Query Language) and NoSQL (Not only SQL) databases are two different types of database management systems that have distinct characteristics and serve different purposes. Here's a comparison between the two:
                    <table className='border border-4 border-success'>
                        <thead>
                            <tr className='border border-3 border-success'>
                                <th className='text-center'>SQL</th>
                                <th className='text-center'>NoSQL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border border-2 border-success'>
                                <td>SQL databases are based on the relational model and use tables with predefined schemas to store data. They enforce a strict structure and adhere to ACID properties.</td>
                                <td> NoSQL databases use a variety of data models such as key-value, document, columnar, or graph, offering flexible schemas. They are designed to handle unstructured and semi-structured data.</td>
                            </tr>
                            <tr className='border border-2 border-success'>
                                <td>SQL databases use SQL as the standard query language to manipulate and retrieve data. SQL provides a declarative approach to specify what data to retrieve without specifying how to retrieve it.</td>
                                <td>NoSQL databases may have their own query languages, but they often lack the full expressive power of SQL. Some NoSQL databases provide query APIs or extensions to support querying capabilities.</td>
                            </tr>
                            <tr className='border border-2 border-success'>
                                <td>SQL databases require a predefined schema, where the structure of tables and relationships between them are defined in advance. Data integrity is enforced through constraints like primary keys, foreign keys, and unique constraints.</td>
                                <td>NoSQL databases allow for dynamic schema changes, which means each record can have different structures. They offer greater flexibility in evolving data models and handling changing requirements.</td>
                            </tr>
                        </tbody>
                    </table>
                </p>
            </div>
            <div>
                <h4>What is express js? What is Nest JS?</h4>
                <p>Express js: Express.js is a web application framework for Node.js. It provides a set of simple and flexible APIs for building web servers and APIs. Express.js focuses on being lightweight and allows developers to have fine-grained control over the application's structure and middleware. It provides routing, request/response handling, and middleware support, but leaves many architectural decisions up to the developer. Express.js is widely adopted and has a large ecosystem of plugins and middleware available.
                    <br />
                    Nest js:Nest.js is a web application framework built with TypeScript. It is inspired by Angular's architecture and brings its concepts to server-side development. Nest.js emphasizes the use of decorators, dependency injection, and modular architecture to build scalable and maintainable applications. It provides a structured and organized approach to building server-side applications by enforcing design patterns such as controllers, providers, modules, and middleware.
                </p>
            </div>
            <div>
                <h4>What is MongoDB aggregate and how does it work?</h4>
                <div>
                    <p>
                        In MongoDB, the aggregate method is a powerful tool for performing complex data analysis and manipulation operations on collections of documents. It allows you to process and transform data using a pipeline of stages.The aggregate method takes an array of pipeline stages as its argument. Each stage represents a specific operation that is applied to the input documents in a sequence. Here's a overview of how the aggregate method works:</p>
                        <ol>
                            <li>Matching Stage: The initial stage in the pipeline is often a $match stage, where you can filter the documents based on specified conditions.</li>
                            <li>Projection Stage: You can include a $project stage to shape the output by specifying which fields to include or exclude, or by creating new computed fields.</li>
                            <li>Sorting and Limiting: You can use stages like $sort and $limit to order the output and restrict the number of returned documents.</li>
                        </ol>
                </div>
            </div>
        </Container>
    );
};

export default Blog;