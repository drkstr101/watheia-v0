# FROM cypress/included:3.8.0 as e2e

# # "root"
# RUN whoami
# # uid=0(root) gid=0(root) groups=0(root)
# # meaning root
# RUN id

# # there is a built-in user "node" that comes from the very base Docker Node image
# # move test runner binary folder to the non-root's user home directory
# RUN mv /root/.cache /home/node/. && \
#   chown -R node:node /home/node/.cache

# USER node
# # show user effective id and group - it should be non-zero
# # meaning the current user "node" is not root
# RUN id

# WORKDIR /workspace
# COPY . .

# ENV PATH=/workspace/node_modules/.bin:${PATH}
# RUN yarn install
# RUN nx run screenplay:e2e

FROM nginx:stable-alpine

COPY dist/cypress /usr/share/nginx/html
