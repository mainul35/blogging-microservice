## Authorization server
### How to play around:
#### Start the DB server
- Start the database server with docker-compose:
Go to ``infra/`` directory and run the `docker-compose.yaml` file 
- Replace the Host address with your own IP address:
Go to ``src/main/resources/application.yml`` and check the datasource section. Replace the IP address in the `url` 
line with your own IP address
```
---
  datasource:
    driver-class-name: org.postgresql.Driver
    url: jdbc:postgresql://192.168.1.102:32221/article_user_db?sslmode=disable
    username: postgres
    password: postgres
---
```
- Import the postman collection in your postman application
- Start the application in your local. If the database service is up and running and accepting connections,
application should start automatically on port 9000
- Initialize the database with seed data
In postman collection, there is a request ``initialize``. Accessing this endpoint will initialize your db service with 
some default roles.
- Create users: ``/auth/create-user`` endpoint will allow you to create a user.
- Create client: ``/client/create`` endpoint will allow you to register a client. Change the body according to your convenience. 
Hit the API, and it will populate database with a client record. Let's proceed forward with the provided example client: `oauthdebugger`
-  In browser, navigate to the `oauthdebugger` domain (https://oauthdebugger.com).
The page will appear like this:
![oauthdebugger-homepage](01-oauthdebugger-homepage.png)

Make sure to replace the clientId value with oauthdebugger.
Let's use PKCE, which will rqequire a ``code_verifier``. This ``code_verifier`` allows the authorization server to verify the request origin 
and send the code to that specific origin.

- At the bottom, before sending the request, select `Response mode (required)` to be `form_post`. See screenshot below.
![form_post example](02-form_post example.png)
  - Once you have sent the request, the application will take you to the Login page of the authorization-server application.
  - In login page, provide your seed data as login credentials or choose to login with GitHub and google.
![oauth-login-page](03-oauth-login-page.png)
  - On a successful authentication and authorization, it will take us to the redirect uri that we registered in our authorization server. On this page we can find a new authorization code responded from the server.
![code-flow-success](04-code-flow-success.png)
  - Now, with this `authorization_code`, and `code_verifier` if we make a POST request to the `/oauth2/token` endpoint to get access token.
    - Make sure to select `Basic Auth` in the `Authorization` tab of postman.
    ![basic_auth](05-basic_auth.png)
    - Under ``Body`` tab, select `x-www-form-urlencoded` and put your `grant_type`, `client_id`, `redirect_uri`, latest `code_verifier` and `code` values.
    To understand the purpose of ``code_verifier``, follow this article: [Enhanced security with PKCE](https://mainul35.medium.com/oauth2-with-spring-part-5-securing-your-spring-boot-application-with-pkce-for-enhanced-security-d8025cd08769)
    ![img.png](06-x-www-urlencoded.png)
    - Once submitted, we can get the access token, refresh token and other necessary information