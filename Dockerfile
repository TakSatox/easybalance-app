FROM node:latest

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app
COPY . .

RUN npm install

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000

ENTRYPOINT ["npm", "run", "dev"]




# Use it in production when "Tanuki" pull request is merged into plugin main branch
# link: https://github.com/wavezync/nuxt-vue3-google-signin/pull/25

# RUN npm run build

# ENTRYPOINT ["node", ".output/server/index.mjs"]