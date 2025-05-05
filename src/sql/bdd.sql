CREATE TABLE animals 
(
    id INT PRIMARY KEY AUTOINCREMENT 
    firstname TEXT 
    age BIGINT
    breed TEXT
    pet_type TEXT 
    city TEXT
    zipcode BIGINT
    pet_description TEXT
    created_at DATETIME
    updated_at DATETIME
)

CREATE TABLE volunteers
(
    id INT PRIMARY KEY AUTOINCREMENT 
    firstname TEXT 
    mail TEXT
    city TEXT
    zipcode BIGINT
    available_at DATETIME
    created_at DATETIME
    updated_at DATETIME
)

CREATE TABLE petting_date
(
    animals_id INT FOREIGN KEY 
    volunteer_id INT FOREIGN KEY 
    petting_date DATETIME
    duration BIGINT
    created_at DATETIME
    updated_at DATETIME
)