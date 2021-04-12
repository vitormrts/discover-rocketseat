# jobs-calc-app
a simple project that calculates your labor price.

# Discover Rocketseat
> Discover is a marathon developed by the technology company Rocketseat, in which each marathon is created a new project.

<p align="center">
    <img src=https://img.shields.io/github/languages/code-size/vitormrts/discover-rocket-seat?style=for-the-badge hspace="2" vspace="20"/>
    <img src=https://img.shields.io/github/license/vitormrts/discover-rocket-seat?style=for-the-badge hspace="2" vspace="20"/>
    <img src=https://img.shields.io/github/issues/vitormrts/discover-rocket-seat?style=for-the-badge hspace="2" vspace="20"/>
</p> 

## 🎥 Demo
<div align="center">
    <img src="public/demo/signup.png" hspace="20" vspace="10" width="60%"/> 
</div>

<div align="center">
    <img src="public/demo/success.png" hspace="20" vspace="10" width="60%"/> 
</div>

<div align="center">
    <img src="public/demo/signin.png" hspace="20" vspace="10" width="60%"/> 
</div>

<div align="center">
    <img src="public/demo/dashboard.png" hspace="20" vspace="10" width="60%"/> 
</div>

<div align="center">
    <img src="public/demo/error_email.png" hspace="20" vspace="10" width="60%"/> 
</div>

<div align="center">
    <img src="public/demo/error_field.png" hspace="20" vspace="10" width="60%"/> 
</div>

<div align="center">
    <img src="public/demo/error_login.png" hspace="20" vspace="10" width="60%"/> 
</div>

## 🚀 Technologies
* ✔️ HTML
* ✔️ CSS 
* ✔️ PHP
* ✔️ MySQL

## ℹ️ How To Use
### 1. Getting Started
To modify (locally) this project, you will need [PHP](https://www.php.net/downloads.php) and [MySQL](https://www.mysql.com/downloads/) installed on your computer.

### 2. Configuring Your Database
With these tools in hand, it is necessary to create a database. To do this, follow the steps below:
```sh
# Open your MySQL
$ mysql -u root -p

# Create a database
mysql> CREATE DATABASE name_of_database DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

# Change to created database
mysql> USE name_of_database

# Create user table
mysql> CREATE TABLE IF NOT EXISTS user (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
) DEFAULT CHARSET = utf8;
```

After this, you will need to connect the database by changing the data in [db_config.php](https://github.com/vitormrts/authentication-system/blob/master/app/config/db_config.php).

### 3. Cloning And Runnig The Project

```sh
# Clone this repository in a location where the local server can run it.
$ git clone https://github.com/vitormrts/authentication-system

# Go to the repository cloned
$ cd authentication-system
```

Done! Now you can open the app.

## 🤝 Contributing

To contributing to this project, follow the steps bellow.

1. Fork the Project;
2. Create your Feature Branch (`git checkout -b new-branch`)
3. Commit your Changes (`git commit -m 'DESCRIPTION OF CHANGES'`)
4. Push to the Branch (`git push origin new-branch`)
5. Open a Pull Request

## 📝 License
This project is under the MIT license. See the [LICENSE](https://github.com/vitormrts/authentication-system/blob/master/LICENSE) file for more details.

---

<p align="center">Made with ❤️ by <strong>Vitor Martins ✌ </p>


