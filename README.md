Steps to run application locally: 
1. Run command 'npm install'
2. Create database named 'online_retailer'
3. Run 'npm start'

Api endpoints: 
host: https://online-retailer.onrender.com (live)
      http://localhost:3001 (local)

1. Order place: {host}/api/order
     method: POST
2. Order update: {host}/api/order/:id
    method: PUT
3. Order status update: {host}/api/order/:id
    method: PATCH
4. Order delete: {host}/api/order/:id
    method: DELETE
5. Order get: {host}/api/order/:id
    method: GET
