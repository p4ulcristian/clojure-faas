FROM openfaas/of-watchdog:0.7.6 as watchdog


FROM clojure:openjdk-14-lein-2.9.1-alpine as builder
WORKDIR /root/
COPY src src
COPY project.clj project.clj
RUN apk add --update nodejs npm
RUN npm install --only=production
RUN lein uberjar && mv target/function.jar .


FROM alpine:3.11
WORKDIR /root/
RUN mkdir -p /home/app
COPY --from=builder /root/function.jar /root/
COPY --from=watchdog /fwatchdog /usr/bin/fwatchdog
RUN chmod +x /usr/bin/fwatchdog
RUN apk add --update openjdk8-jre


ENV read_timeout="1800"
ENV write_timeout="1800"
ENV upstream_url="http://127.0.0.1:4000"
ENV mode="http"
ENV fprocess="java -jar function.jar"
ENV write_debug="true"
EXPOSE 8080
HEALTHCHECK --interval=5s CMD [ -e /tmp/.lock ] || exit 1
CMD ["fwatchdog"]
