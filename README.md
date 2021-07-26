# Multi Vault UI 

For testing a multi vault UI. we have the React code and html in a static nginx server. THere is also a configuration for custom paths towards different vault servers.

This allows for the development of a browser only client, and routing to multiple backend apis without cross site scriptitng issues.

# Usage

To start up : 

docker compose up -d --build
docker compose ps
docker compose exec nginx bash
docker compose exec vault-01 sh
docker compose exec vault-02 sh
docker compose stop
docker compose kill
docker compose rm

To reload nginx conf: 

docker compose exec nginx nginx -s reload
