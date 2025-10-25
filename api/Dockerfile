FROM node:18-alpine
RUN addgroup -S nodegrp && adduser -S nodeusr -G nodegrp
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
USER nodeusr
EXPOSE 3000
CMD ["npm", "start"]
