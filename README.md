# Questionnaire Builder App

**Overview**
This project is an API for the Questionnaire Builder app. It allows creating, editing, and deleting questionnaires, as well as saving user responses to these questionnaires. The backend is built using Node.js, Express, and MongoDB for data storage.

**Technologies**

- Node.js — for server-side logic.
- Express — for handling HTTP requests.
- MongoDB — for storing data about questions, questionnaires, and responses.
- Joi — for server-side data validation.
- Mongoose — for MongoDB interaction.

**Installation**

1. Clone the repository:
   git clone <https://github.com/yaStigma/Questionnaire-Builder-App-Backend.git>
2. Navigate to the project folder:
   cd <Questionnaire-Builder-App-Backend>
3. Install dependencies:
   npm install
4. Set up environment variables
   Create a .env file in the root of the project and add the necessary environment variables. Example:
   PORT=3000
   MONGODB_USER=your_MONGODB_USER
   MONGODB_PASSWORD=your_MONGODB_PASSWORD
   MONGODB_URL=your_MONGODB_URL
   MONGODB_DB=your_MONGODB_DB
5. Run the server:
   npm run dev
   The server will now be available at http://localhost:3000.

**API Routes**

1. Questionnaires

- Create a Questionnaire
  POST /api/questionnaires/

Description: Creates a new questionnaire.
Request Body:
{
"name": "Questionnaire 1",
"description": "Description of the questionnaire",
"questions": [
{
"text": "What is your name?",
"type": "text"
},
{
"text": "What is your age?",
"type": "single",
"options": ["18-25", "26-35", "36-45"]
}
]
}
Response:
{
"\_id": "unique-questionnaire-id",
"name": "Questionnaire 1",
"description": "Description of the questionnaire",
"questions": [...],
"createdAt": "2025-03-25T00:00:00Z"
}

- Get All Questionnaires
  GET /api/questionnaires/

Description: Retrieve a list of all questionnaires.
Response:
[
{
"\_id": "unique-questionnaire-id",
"name": "Questionnaire 1",
"description": "Description of the questionnaire",
"questions": [...],
"createdAt": "2025-03-25T00:00:00Z"
},
...
]

- Get a Questionnaire by ID
  GET /api/questionnaires/:\_id

Description: Get details of a specific questionnaire.
Response:
{
"\_id": "unique-questionnaire-id",
"name": "Questionnaire 1",
"description": "Description of the questionnaire",
"questions": [...],
"createdAt": "2025-03-25T00:00:00Z"
}

- Update a Questionnaire
  PUT /api/questionnaires/:\_id

Description: Update a specific questionnaire by ID.
Request Body:
{
"name": "Updated Questionnaire",
"description": "New description of the questionnaire"
}
Response:
{
"\_id": "unique-questionnaire-id",
"name": "Updated Questionnaire",
"description": "New description of the questionnaire",
"questions": [...],
"updatedAt": "2025-03-25T00:00:00Z"
}

- Delete a Questionnaire
  DELETE /api/questionnaires/:\_id

Description: Delete a questionnaire by ID.
Response:
{
"message": "Questionnaire deleted successfully"
} 2. Answers

- Save Answers
  POST /api/answers/

Description: Save user answers to a questionnaire.
Request Body:
{
"questionnaireId": "unique-questionnaire-id",
"answers": {
"question1": "John Doe",
"question2": ["18-25"]
},
"timeSpent": 120
}
Response:
{
"\_id": "unique-answer-id",
"questionnaireId": "unique-questionnaire-id",
"answers": {
"question1": "John Doe",
"question2": ["18-25"]
},
"timeSpent": 120,
"submittedAt": "2025-03-25T00:00:00Z"
}

**Database**

The project uses MongoDB for storing data about questionnaires and answers. To install and run MongoDB, refer to the official documentation.

Databases are automatically created when the project is run for the first time.

**Author**

- Author: Yenakiieva Tanya.
- Contact Information: email: yastigma@gmail.com, telegram: yastigma.
- GitHub: https://github.com/yaStigma
