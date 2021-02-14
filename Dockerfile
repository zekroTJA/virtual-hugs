FROM node:15-alpine AS build
WORKDIR /build
COPY . .
RUN npm ci
RUN npx parcel build src/index.html

FROM zekro/seiteki:latest AS final
WORKDIR /app
COPY --from=build /build/dist .
EXPOSE 80

ENV STK_ADDR=":80"
ENV STK_CACHEDURATION="720h"
ENV STK_COMPRESS="true"
ENV STK_INDEXFILE="index.html"
ENV STK_STATICDIR="/app"
ENV STK_ROUTEMODE="static"