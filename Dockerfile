# stage 1 :: take node as base so we can get a pre-installed version
FROM node:20-alpine AS node

# stage 2 :: copy that onto an alpine image
FROM alpine:3.20

ENV prometheus_version=2.52.0

COPY --from=node /usr/lib /usr/lib
COPY --from=node /usr/local/lib /usr/local/lib
COPY --from=node /usr/local/include /usr/local/include
COPY --from=node /usr/local/bin /usr/local/bin

# stage 3 :: add prometheus for logging and metrics
RUN apk update && apk upgrade; \
    apk add curl
RUN curl -LO https://github.com/prometheus/prometheus/releases/download/v${prometheus_version}/prometheus-${prometheus_version}.linux-amd64.tar.gz; \
    tar -xvzf prometheus-${prometheus_version}.linux-amd64.tar.gz \
    && mkdir -p /etc/prometheus /var/lib/prometheus \
    && cp prometheus-${prometheus_version}.linux-amd64/promtool /usr/local/bin/ \
    && cp prometheus-${prometheus_version}.linux-amd64/prometheus /usr/local/bin/ \
    && cp -R prometheus-${prometheus_version}.linux-amd64/console_libraries/ /etc/prometheus/ \
    && cp -R prometheus-${prometheus_version}.linux-amd64/consoles/ /etc/prometheus/ \
    && rm -rf prometheus-${prometheus_version}.linux-amd64*

VOLUME /etc/prometheus
VOLUME /var/lib/prometheus

ADD prometheus.yml /etc/prometheus/
# https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/
# ADD conf/alert.rules /etc/prometheus/

# TODO: make this a CMD
# usr/local/bin/prometheus \ 
# --config.file /etc/prometheus/prometheus.yml \ 
# --storage.tsdb.path /var/lib/prometheus/
