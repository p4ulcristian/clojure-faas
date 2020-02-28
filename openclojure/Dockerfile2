FROM clojure:openjdk-14-lein-2.9.1-alpine AS builder
WORKDIR /root/
COPY src src
COPY project.clj project.clj
RUN apk add --update nodejs npm
RUN npm install --only=production
RUN lein uberjar && mv target/function.jar .


FROM openjdk:14-alpine AS release
WORKDIR /root/
RUN apk update && apk add bash
#for watchdog
COPY --from=builder /root/function.jar /root/
ADD https://github.com/openfaas-incubator/of-watchdog/releases/download/0.7.6/of-watchdog /usr/bin/fwatchdog
RUN chmod +x /usr/bin/fwatchdog
ENV upstream_url="http://127.0.0.1:3000"
ENV mode="http"
ENV fprocess="java -jar function.jar"
EXPOSE 8080
HEALTHCHECK --interval=5s CMD [ -e /tmp/.lock ] || exit 1
ENV suppress_lock=true
CMD ["fwatchdog"]
