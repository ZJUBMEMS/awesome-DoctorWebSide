# awesome-DoctorWebSide

## Introduction

Awesome-DoctorWebSide is born for dentist, developed for efficient working. It is deployed on the Tencent Cloud Server,  and is connected to the database which is deployed on the LeanCloud Server.



## Features

- **Design for website**: dentists can diagnose the illness and send the diagnosis message back to the database.

## Usage

If you want to apply this project into your project, just replace the leancloud id and put the file into your website.

- In the ***information.js*** and ***index.js*** file:

```js
var APP_ID = yourappid;
var APP_KEY = yourappkey;
```

Where yourappid and yourappkey are replaced by your leancloud app_id and your leancloud app_key.



- Notice that database table consists :

  name phone birthday help addition pic1 pic2 pic3 pic4 pic5 pic6 pic7 pic8 

  you can design your own database and revise the code which is relation to LeanCloud.



## Technique Support

- **jQuery**

- **LeanCloud API**

- **TencentCloud**
