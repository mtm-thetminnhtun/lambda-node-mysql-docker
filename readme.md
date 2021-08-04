# Lambda Node.js Mysql Docker

## Installation
  
- Create MySQL using docker (optional)
```sh
cd db
docker-compose up -d --build
```
- Setup env
```sh
cp .env.example .env
```
- Setup Database `.env`
```
DB_HOST=localhost
DB_NAME=lambda_node_mysql_docker
DB_USER=db_user
DB_PASSWORD=root
DB_PORT=3306
```
- Import dummy data `db.sql`
- Install Dependcies
```sh
npm run deploy
```
After deploy you will see `API` routes
```
GET  | http://localhost:3000/dev/todos
POST | http://localhost:3000/dev/todos
```

## Testing

**HTTP**
- Route - [GET] http://localhost:3000/dev/todos
- Result
```json
[
    {
        "id": 1,
        "title": "Go shop"
    },
    {
        "id": 2,
        "title": "Buy Egg"
    }
]
```
- Route - [POST] http://localhost:3000/dev/todos
- Result
```json
{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 8,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0
}
```

**CLI**

- List
```sh
npm run api:list
```

- Add
```sh
npm run api:add
```