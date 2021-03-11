# Smart Expense Manager


# How to run and install UI and Backend Project:
You need to have node and npm installed on your machine to run UI project. Also you need to have angular and ionic framework installed.
To install node: https://nodejs.org/en/download/
To Install Angular Cli: https://cli.angular.io/
To install Ionic : https://ionicframework.com/docs/cli
Steps to run the project:
1. Checkout Project from my Repo and go to folder UI.
2. run "npm install" command on your cmd by going into UI folder.
3. run "ionic serve" from cmd once all the node modules installed.
4. you should see local server started on 8100 port unless that port is in use.
5. Go to browser and type "http://localhost:8100"

# How to run Backend project:
You need to have gradle installed on your machine and tomcat also.
Gradle: https://ionicframework.com/docs/cli
Tomcat: https://tomcat.apache.org/download-80.cgi
Mysql: https://dev.mysql.com/downloads/installer/

1. Create below tables in your local database on mysql. 
CREATE TABLE `expense` (
  `expenseId` int(11) NOT NULL AUTO_INCREMENT,
  `itemName` varchar(45) DEFAULT NULL,
  `itemDescription` varchar(45) DEFAULT NULL,
  `amount` double DEFAULT '0',
  `location` varchar(45) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `transactionDate` varchar(45) DEFAULT NULL,
  `expenseCategory` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`expenseId`),
  KEY `userId_idx` (`userId`),
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `user` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `user` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `expenselimit` double DEFAULT '100',
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

2. Make sure mysql server is running on 3306
3. Checkout project and go to folder backend and look for file: Context.xml
In this file I am storing DB connection details for JDNI to create db channel for my queries. Change below line to match it to your DB setup.
 url="jdbc:mysql://localhost:3306/smartexpense?useSSL=false"
 4. run command "gradle clean build", this should generate war file in your /build/libs folder. File Name:smartapi.war
 5. Deploy it on tomcat as root "smart" on 8080 port since UI is looking for "http://localhost:8080/smart" url for making REST Calls.
 
 
 # References used 
 1] https://www.udemy.com/course/angular-tutorial/
 2] https://www.youtube.com/watch?v=DgWlNAudNlg&t=3s
 3] https://www.youtube.com/watch?v=NF_nnoA0aXM
 4]https://www.youtube.com/watch?v=r2ga-iXS5i4
 5] https://www.youtube.com/watch?v=tyZjicNtbyk
 6] https://ionicframework.com/docs/v3/


# Postman Script

You can find the Postman script [here](https://github.com/nilaynarlawar/Smart-Expense-Manager/blob/master/ExpenseAPI.postman_collection.json)

 


