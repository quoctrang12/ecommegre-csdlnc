# Copyright 2020 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# [START cloudrun_helloworld_dockerfile]
# [START run_helloworld_dockerfile]

# Use the official lightweight Node.js image.
# https://hub.docker.com/_/node

FROM node:18-slim

ENV PORT=8080
ENV DB_URI = mongodb+srv://quoctrang12:trang12345@cluster0.cckksgh.mongodb.net/ecommegre?retryWrites=true&w=majority

ENV URL_BACKEND_SERVER = http://localhost:4009

ENV URL_FRONTEND_SERVER = http://localhost:3000

ENV JWT_ACCESS_KEY = sneaker_access_key

ENV JWT_REFRESH_KEY = sneaker_refress_key

ENV JWT_MAIL_SECRET_KEY = sneaker_send_mail_secret_key

ENV EMAIL_NAME = waipayttt@gmail.com

ENV EMAIL_APP_PASSWORD = topdbhxirluagiqx

ENV REGION_API = https://vapi.vnappmob.com/api

ENV CLOUDINARY_NAME = dmmjl1hfp

ENV CLOUDINARY_KEY = 726137768828792

ENV CLOUDINARY_SECRET = gHZCxmQhuY0FPTBUodVKsJ1_huE

ENV GHN_TOKEN = d5c64caf-ea9c-11ed-a281-3aa62a37e0a5

ENV GHN_REGION_API = https://online-gateway.ghn.vn/shiip/public-api/master-data

ENV GHN_SERVICE_API = https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order

ENV GHN_SHOP_ID = 4097196


# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
# If you add a package-lock.json, speed your build by switching to 'npm ci'.
# RUN npm ci --only=production
RUN npm install --only=production

# Copy local code to the container image.
COPY . ./

# Run the web service on container startup.
CMD [ "node", "index.js" ]

# [END run_helloworld_dockerfile]
# [END cloudrun_helloworld_dockerfile]