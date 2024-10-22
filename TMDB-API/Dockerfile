# IMAGEM BASE NODE
FROM node:18-alpine

# DIRETÓRIO DE TRABALHO DENTRO DO CONTAINER
WORKDIR /app

# COPIA ARQUIVO JSON
COPY package*.json ./

RUN npm install

COPY . .

# BUILD
RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev"]