<div align="center">
🧩 Mini Matchkin API & Frontend
A full-stack matching engine for clients and consultants, featuring OTP-based login, JWT authentication, and a scoring-based matching algorithm.

🌐 Live Frontend Demo https://mini-matchkin-api.netlify.app/  |  🟢 Live Backend API

</div>

_____________________________________________________________________________________________________________________________


✨ Features
OTP-based email login (no password needed)

JWT authentication & role-based access (client/consultant)

MongoDB schemas: User, ClientProfile, ConsultantProfile

Matching endpoint: /api/match returns top 3 consultants based on skill/domain overlap, with score & explanation

Aesthetic frontend for easy, interactive testing

Postman collection included for API testing

___________________________________________________________________________________________________________________________________________


🛠️ Tech Stack
Layer	Tech
Backend	Node.js, Express.js
Database	MongoDB Atlas
Auth	OTP via email, JWT
Frontend	HTML, CSS, JavaScript
Deploy	Render (backend), Netlify (frontend)
___________________________________________________________________________________________________________________________________________


🚀 Getting Started (Local Setup)
1. Clone the Repository


git clone https://github.com/<your-username>/mini-matchkin-api.git

cd mini-matchkin-api

2. Install Dependencies

npm install

3. Set Up Environment Variables

Create a .env file in the root directory:

text

MONGO_URI=your_mongo_connection_string

JWT_SECRET=matchkin_secret_123

EMAIL_USER=your_gmail@gmail.com

EMAIL_PASS=your_gmail_app_password

4. Start the Backend

npm start

Backend runs at http://localhost:5000

5. Run the Frontend

Open index.html in your browser, or use the live demo.

___________________________________________________________________________________________________________________________________________


🌐 API Endpoints
Endpoint	Method	Description
/api/auth/request-otp	POST	Request OTP for login/signup
/api/auth/verify-otp	POST	Verify OTP and receive JWT
/api/profiles/client	POST	Create/update client profile
/api/profiles/consultant	POST	Create/update consultant profile
/api/match	POST	Match top consultants for a project
___________________________________________________________________________________________________________________________________________


🖥️ How to Use (Frontend)
1. Request OTP:
Enter your email, select your role, and click Request OTP.

2. Verify OTP:
Enter the OTP sent to your email and click Verify OTP.

3. Create Profile:
Paste the relevant JSON (see below) and click Create/Update Profile.

4. Match Consultants:
Paste your project requirements and click Find Match.

___________________________________________________________________________________________________________________________________________


🎯 Example Data

Open steps to run for Example data

___________________________________________________________________________________________________________________________________________


📬 Postman Collection
Find the exported Postman collection in the /postman or /docs folder.

Import into Postman to test all endpoints easily.
___________________________________________________________________________________________________________________________________________


👤 Author

Name: Amal Nair

Email: amalnair242@gmail.com

<div align="center">
Enjoy using Mini Matchkin! If you have questions, check the instructions above or contact the author.

</div>
