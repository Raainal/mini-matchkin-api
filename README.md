<div align="center">
🧩 Mini Matchkin API & Frontend
A simple, full-stack matching engine for clients and consultants, featuring OTP-based login, JWT authentication, and a scoring-based matching algorithm.

🌐 Live Frontend Demo  |  🟢 Live Backend API

</div>
✨ Features
🔑 OTP-based email login (no password needed)

🛡️ JWT authentication & role-based access (client/consultant)

🗃️ MongoDB schemas: User, ClientProfile, ConsultantProfile

🔍 Matching endpoint: /api/match returns top 3 consultants based on skill/domain overlap, with score & explanation

🎨 Aesthetic frontend for easy, interactive testing

📬 Postman collection included for API testing

🛠️ Tech Stack
Layer	Tech
Backend	Node.js, Express.js
Database	MongoDB Atlas
Auth	OTP via email, JWT
Frontend	HTML, CSS, JavaScript
Deploy	Render (backend), Netlify (frontend)
🚀 Getting Started (Local Setup)
Clone the Repository

bash
git clone https://github.com/<your-username>/mini-matchkin-api.git
cd mini-matchkin-api
Install Dependencies

bash
npm install
Set Up Environment Variables

Create a .env file in the root directory:

text
MONGO_URI=your_mongo_connection_string
JWT_SECRET=matchkin_secret_123
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
Start the Backend

bash
npm start
Backend runs at http://localhost:5000

Run the Frontend

Open index.html in your browser, or use the live demo.

🌐 API Endpoints
Endpoint	Method	Description
/api/auth/request-otp	POST	Request OTP for login/signup
/api/auth/verify-otp	POST	Verify OTP and receive JWT
/api/profiles/client	POST	Create/update client profile
/api/profiles/consultant	POST	Create/update consultant profile
/api/match	POST	Match top consultants for a project
🖥️ How to Use (Frontend)
Request OTP:
Enter your email, select your role, and click Request OTP.

Verify OTP:
Enter the OTP sent to your email and click Verify OTP.

Create Profile:
Paste the relevant JSON (see below) and click Create/Update Profile.

Match Consultants:
Paste your project requirements and click Find Match.

🎯 Example Data
<details> <summary><strong>Client Profile</strong></summary>
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
</details> <details> <summary><strong>Consultant Profile</strong></summary>
json
{
  "fullName": "Alice Consultant",
  "skills": ["Node.js", "MongoDB", "API Design"],
  "domains": ["E-commerce", "Healthcare"],
  "experience": 5,
  "availability": true
}
</details> <details> <summary><strong>Match Consultants</strong></summary>
json
{
  "skills": ["Node.js", "MongoDB"],
  "domain": "E-commerce",
  "timeline": "3 months"
}
</details>
📬 Postman Collection
Find the exported Postman collection in the /postman or /docs folder.

Import into Postman to test all endpoints easily.

📹 Video Walkthrough
Google Drive Video Link
(Replace with your actual video link)

👤 Author
Name: Amal Nair
Email: amalnair242@gmail.com 

<div align="center">
Enjoy using Mini Matchkin! If you have questions, check the instructions above or contact the author.

</div>
