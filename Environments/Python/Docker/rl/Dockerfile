FROM nvcr.io/nvidia/pytorch:23.02-py3

LABEL maintainer="ksterx <kostonerx@gmail.com>"

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8
ENV TZ=Asia/Tokyo

# Set timezone as $TZ
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime \
    && echo ${TZ} > /etc/timezone

# Install apt packages
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    curl \
    git \
    make \
    sudo \
    swig \
    vim \
    wget

RUN echo "set completion-ignore-case on" >> ${HOME}/.inputrc

COPY requirements.txt /tmp/requirements.txt
RUN pip install -U -q pip \
    && pip install -U -q -r /tmp/requirements.txt
