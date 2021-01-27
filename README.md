# RapidMovie

Movies DB web app

# Getting started

## Local development

We use `docker-compose` to manage our fleet locally. Install
[Docker](https://docs.docker.com/get-docker/) to get started.

Set environment variables:

```sh
cp .env.example .env # edit accordingly
```

Rock'n roll (will take a few mins at first, see below on how to watch the progress):

```
docker-compose up -d
```

Temporarily stop dev environment:

```
docker-compose stop
```

Resume:

```
docker-compose start
```

Resets the whole thing:

```
docker-compose down --rmi all -v
```

### Debugging, logging

First of all, see your containers running:

```
docker ps
```

To access a node directly, use one of following:

```
docker exec -it rapidmovie-backend /bin/bash
```

```
docker exec -it rapidmovie-postgres /bin/bash
```

While inside shell, see the processes:

```
$ ps -ef
```

To see the logs, use any of these:

```
docker-compose logs --tail=all -f | grep rapidmovie-backend
```

```
docker-compose logs --tail=all -f | grep rapidmovie-postgres
```
