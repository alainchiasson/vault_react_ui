# Bulding a new UI

This experiment is to build a UI ( simple ) for an existing rest API backend. In this case, the backend is Vault. 
While vault does have a UI, it does not lend itself to being redirected behind a proxy. The proxy is needed as a more robust solution 
for COORS. In this case we have an NGINX acting a rewrite proxy for the Vault API, so all calls are relative to the same end point. 

## Start with the minimum

We are starting from the pevious like button example, so we have a simple html page and an nginx server. We need to start using compose - though we could link manually with images - as we will need 2 containers up and running. One for vault and one for nginx.

Initiely the nginx server is setup like the before - it hosts the static site off the server root.

## Web flow

notes: 

browser to Nginx
browser to vault VIA nginx. ( explain why )

## Now for the componenet

Same as before. 

Add a state - show it. 

Update the state - when and how.

