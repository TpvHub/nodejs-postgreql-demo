# setup env
create ```.env.development``` and ```.env.production``` file with content:

```
DB_HOST='localhost'
DB_PORT='5432'
DB_USERNAME='postgres'
DB_PASSWORD='123123'
DB_NAME='postgres-demo'
```


# install
```yarn install```

# run development mode
```yarn start```

# run production on local
```yarn prod:local```

# run production on server
```yarn prod:server```