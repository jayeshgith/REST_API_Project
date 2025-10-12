RESTful Post Management API
This is a simple, full-stack web application demonstrating fundamental CRUD (Create, Read, Update, Delete) operations using a RESTful architecture. The project is built with Node.js and the Express framework, utilizing EJS (Embedded JavaScript) for server-side templating to render the user interface.

🚀 Project Overview
The application provides a basic platform for users to manage a collection of temporary "posts." Since the data is stored in an in-memory array (index.js), it is reset every time the server restarts. This is ideal for focusing purely on the backend logic and REST conventions.

Key Features:
Full CRUD Functionality: Complete support for all four core data manipulation operations.

RESTful Routing: All seven standard REST routes are implemented for the /posts resource.

Dynamic Views: Utilizes EJS to dynamically generate HTML pages based on server-side data.

Custom Styling: Includes a clean, custom-designed user interface styled with pure CSS.

🛠️ Technologies Used
Backend: Node.js

Framework: Express.js

Templating Engine: EJS (Embedded JavaScript)

Styling: Custom CSS (located in public/style.css)

Utilities:

uuid: Used to generate unique IDs for each post.

method-override: Used to allow the use of PATCH and DELETE requests from standard HTML forms, as required by the RESTful standard.

