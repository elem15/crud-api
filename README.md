# crud-api

**Инструкция для CRUD-API.**

Установка.

Введите в терминале: git clone https://github.com/elem15/crud-api.git
Перейдите в папку crud-api: cd crud-api
Переключитесь в ветку разработки: git checkout crud-api
Установите зависимости: npm i

Использование.

Запустите программу в режиме разработки: npm run start:dev или в стандартном режиме: npm run start:prod
Запустите http клиент, например Postman (отдельная программа) или Thunder (модуль для VS-Code).
Выберите тип запроса, CRUD-API поддерживает 4 типа запросов: get, post, put, delete.
Для запроса get доступно два URL-пути: 
1. /api/users/ (http://localhost:3500/api/users/) – при первом запуске вернет пустой массив, после добавления пользователей – весь список; 
2. /api/users/id-пользователя (http://localhost:3500/api/users/66ec7f20-ee67-11ec-9305-c787f724a9b1) - вернет объект  пользователя с четырьмя обязательными полями. После корректного запроса пользователя придет ответ с кодом 200. В случае некорректного ID – код 400, при неправильном URL – код 404. 
Post запрос имеет один путь:  /api/users (http://localhost:3500/api/users/). Выбираем body запроса в формате raw. Контент формируется в формате JSON и содержит 3 обязательных поля, например: {"username": "Petya", "age": 25, "hobbies": ["runninig", "swimming"]}. Поля должны иметь соответствующий тип данных: строка, число, массив строк. После корректного создания пользователя, придет ответ с кодом 201, в случае некорректного объекта пользователя – код 400, при отсутствии такого пользователя или неправильном URL – код 404. 
Put запрос имеет один путь:  /api/users/id—пользователя (http://localhost:3500/api/users/66ec7f20-ee67-11ec-9305-c787f724a9b1). Выбираем body запроса в формате raw. Контент формируется в формате JSON и содержит 3 обязательных поля, например: {"username": "Petya","age": 25, "hobbies": ["runninig", "swimming"]}. Поля должны иметь соответствующий тип данных: строка, число, массив строк. Существующий ID копируем из ответа на запрос GET. После корректного создания пользователя придет ответ с кодом 200, в случае некорректного объекта пользователя или не правильного формата ID – код 400, при отсутствии такого пользователя или неправильном URL – код 404. 
Delete запрос имеет один путь:  /api/users/id-пользователя (http://localhost:3500/api/users/66ec7f20-ee67-11ec-9305-c787f724a9b1). Существующий ID копируем из ответа за запрос GET. После корректного удаления пользователя придет ответ с кодом 204, в случае неправильного формата ID – код 400, при отсутствии такого пользователя или неправильном URL – код 404. 
В случае ошибки в программе сервера или сбоя базы данных, на любой запрос может прийти ответ с кодом 500.

Для выхода из программы используйте комбинацию клавиш Ctrl-C.

Для тестирования продуктовой версии прогрммы, сгенерированной в папку dist, используйте команду npm test. Должно произойти 3 тестовых сценария, один положительный(все запросы правильные и получают соответствующие ответы), два негативных с неправильными запросами и правильной обрработкой. 