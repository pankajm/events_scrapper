# Events Scrapper

This is a simple events scrapper which scraps US tech events data from two website 
### 1. https://computerworld.com 
### 2. https://www.techmeme.com 
The scrapped data is then stored in mongodb. This data is exposed to client via simple get api. 


## Technologies used 
1. Node JS 
2. Express
3. MongoDB
4. Some Third party NPM libraries


## Running the app

1. Clone the project using following command - 

   *git clone https://github.com/pankajm/events_scrapper.git*

2. Once cloned to local machine, navigate to events_scrapper directory and run following command

   *git checkout master*

   *npm install* 

   This will install all the dependencies. 

3. Now You need to install mongodb on your machine so first download homebrew (for mac). Copy paste below command to install homebrew

*/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"*

now install mongodb using homebrew 

*brew install mongodb*

now we need to create one directory for mongodb to store data

*sudo mkdir -p /data/db*

and now we need to give it proper permission

*sudo chown -R `id -un` /data/db*

now we need to run mongo demon using below command 

*mongod*

4. Now run the app using below command in another tab

*node index.js* 
(You can also use nodemon if you wish.) 

### (P.S. By default the app starts on port 3000 however If the port is busy it will ask you to run the app on other port)

Now you need to call scrapEvents api from rest client (postman) or from browser to scrap events from above websites. (You can also use below curl to hit API from terminal) 

API - http://localhost:3000/api/scrapEvents

OR 

curl -X GET \
  http://localhost:3000/api/scrapEvents \
  -H 'cache-control: no-cache' \
  -H 'postman-token: a502b10b-8f3d-ff87-8ec6-cee4774daf59'
  
  
  ### The reason to give seperate API for scrapping is to improve performance. As web scrapping is slower process when there are multiple websites to scrap, its better to run it seperately with some CRON job.


## The backend is ready and running..Please clone event_scrapper_frontend repository as well to see results. 

### End 
