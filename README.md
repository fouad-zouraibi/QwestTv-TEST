# QwestTv-TEST
Overview

This is a full-stack project that combines a Node.js back-end with TypeScript and a React.js front-end. It's designed to showcase a simple but functional application for creating, managing, and downloading files. The back-end handles the file creation and management, while the front-end offers a user-friendly interface for users to interact with the files.
Back-end Features (Node.js with TypeScript)

    File Creation Route:
        A route to create a file by specifying the file type (csv, xml, or excel) and the desired file name.
        The route fetches data from a mock API, specifically, JSONPlaceholder.
        The data is then populated into the file as per the requested type (csv, xml, or excel).

    File Listing Route:
        A route to retrieve and list all the files that have been created by users.

    File Download Route:
        A route to allow users to download the files they've created.

    File Deletion Route:
        A route to enable users to delete files that are no longer needed.

Front-end Features (React.js)

    File Management Page:
        Displays a list of all existing files.
        Provides options to either download or delete files.
    File Creation Form:
        A user-friendly form for creating new files.
        Users can specify the file type (csv, xml, or excel) and the desired file name.

Getting Started

Instructions on how to get your project up and running are included in the installation guide.
Usage

Describe how the project can be used. Provide information about how to use the back-end routes and interact with the front-end user interface.
Technologies Used

    Node.js
    TypeScript
    React.js
    Express.js
    Axios
    fs (File System)
    csv-writer
    xmlbuilder
    ExcelJS

Project Structure

Briefly explain the structure of your project, including the key folders and files.
Examples

Include usage examples and screenshots to demonstrate how to use the application and its features.
Contributing

Explain how other developers can contribute to your project, including information about how to submit issues and pull requests.
License

Specify the license under which the project is released, and include a link to the license file.
Acknowledgments

Optionally, you can give credit to people, libraries, or resources that have helped you along the way.
Author

Provide your name and contact information for any inquiries.

Feel free to customize this presentation according to your project's specific details and requirements.
