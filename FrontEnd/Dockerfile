# Here we set up the build for the NGINX container, we simply open the http port and specify the ENTRYPOINT command
# For adding https, we would also need to expose 443, but in this project we did not so it is commented
# Docker compose handles all the cross platform persistence via volumes so we don't need to worry about
#   copying over any of the actual code files for the frontend.

FROM nginx:1.15.2-alpine

EXPOSE 80
#EXPOSE 443

ENTRYPOINT ["nginx","-g","daemon off;"]
