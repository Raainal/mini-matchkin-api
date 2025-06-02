Mini Matchkin API & Frontend
A simple, full-stack matching engine for clients and consultants, featuring OTP-based login, JWT authentication, and a scoring-based matching algorithm.
Live demo and API are available for instant testing!

🚀 Live Demo
Frontend: https://mini-matchkin-api.netlify.app/

Backend API: https://mini-matchkin-api.onrender.com/

📝 Features
OTP-based email login (no password needed)

JWT authentication and role-based access (client/consultant)

MongoDB schemas: User, ClientProfile, ConsultantProfile

Matching endpoint: /api/match returns top 3 consultants based on skill/domain overlap, with score and explanation

Minimal, aesthetic frontend for easy testing

Postman collection included for API testing

📦 Tech Stack
Backend: Node.js, Express.js

Database: MongoDB Atlas (cloud)

Authentication: OTP via email, JWT tokens

Frontend: HTML, CSS, JavaScript (vanilla)

Deployment: Render (backend), Netlify (frontend)

🛠️ How to Run Locally
1. Clone the Repository
bash
git clone https://github.com/<your-username>/mini-matchkin-api.git
cd mini-matchkin-api
2. Install Dependencies
bash
npm install
3. Set Up Environment Variables
Create a .env file in the root directory with:

text
MONGO_URI=your_mongo_connection_string
JWT_SECRET=matchkin_secret_123
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
4. Start the Backend
bash
npm start
Backend runs on http://localhost:5000 by default.

5. Run the Frontend
Open index.html in your browser, or use the live demo.

🌐 API Endpoints
Endpoint	Method	Description
/api/auth/request-otp	POST	Request OTP for login/signup
/api/auth/verify-otp	POST	Verify OTP and receive JWT
/api/profiles/client	POST	Create/update client profile
/api/profiles/consultant	POST	Create/update consultant profile
/api/match	POST	Match top consultants for a project
🖥️ How to Use (Frontend)
1. Request OTP:
Enter your email, select your role, and click “Request OTP”.

2. Verify OTP:
Enter the OTP sent to your email and click “Verify OTP”.

3. Create Profile:
Paste the relevant JSON (see below) and click “Create/Update Profile”.

4. Match Consultants:
Paste your project requirements and click “Find Match”.

Example Data:

Client Profile

json
{
  "fullName": "John Client",
  "company": "Tech Corp",
  "projectHistory": [
    {
      "title": "E-commerce Platform",
      "description": "Built online marketplace",
      "domain": "E-commerce"
    }
  ]
}
Consultant Profile

json
{
  "fullName": "Alice Consultant",
  "skills": ["Node.js", "MongoDB", "API Design"],
  "domains": ["E-commerce", "Healthcare"],
  "experience": 5,
  "availability": true
}
Match Consultants

json
{
  "skills": ["Node.js", "MongoDB"],
  "domain": "E-commerce",
  "timeline": "3 months"
}
📬 Postman Collection
Find the exported Postman collection in the /postman or /docs folder of this repo.

Import into Postman to test all endpoints easily.


👤 Author
Name: Amal Nair
Email: amalnair242@gmail.com 

Enjoy using Mini Matchkin! If you have questions, check the instructions above or contact the author.
