FROM openfaas/of-watchdog:0.7.6 as watchdog

FROM clojure:openjdk-14-lein-2.9.1-alpine as builder
WORKDIR /root/
COPY src src
COPY project.clj project.clj
RUN apk add --update nodejs npm
RUN npm install --only=production
RUN lein uberjar && mv target/function.jar .

FROM openjdk:14-alpine
WORKDIR /root/
RUN mkdir -p /home/app

COPY --from=builder /root/function.jar /root/
COPY --from=watchdog /fwatchdog /usr/bin/fwatchdog
RUN chmod +x /usr/bin/fwatchdog


ENV read_timeout="60"
ENV write_timeout="60"
ENV upstream_url="http://127.0.0.1:4000"
ENV mode="http"
# Populate example here - i.e. "cat", "sha512sum" or "node index.js"
ENV fprocess="java -jar function.jar"
# Set to true to see request in function logs
ENV write_debug="true"

EXPOSE 8080

HEALTHCHECK --interval=60s CMD [ -e /tmp/.lock ] || exit 1

CMD ["fwatchdog"]
