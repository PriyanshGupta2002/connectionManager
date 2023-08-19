
## Getting Started

First install the node modules by running 

npm install

Setup your env file in root of your folder
### To generate the NEXTAUTH_SECRET run command openssl rand -base64 32
- MONGO_URI = <your_mongoDb_connection_string>
- NEXTAUTH_URL="<Your_website_base_url>"
- NEXTAUTH_SECRET= <your_secret>
- BASE_URL = <your_base_url>
- NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=<your_cloudinary_name>

#### run command npm run dev to start development server.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


# Deploy on verel 
- Login/Register using github.
- Import the github repositry you want to deploy.
- After deployment setup environment variables.
- Redeploy the project and you should see the website up and running.

