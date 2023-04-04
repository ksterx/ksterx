FROM nvcr.io/nvidia/pytorch:23.02-py3

LABEL maintainer="ksterx <kostonerx@gmail.com>"

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8
ENV TZ=Asia/Tokyo

# Set timezone as $TZ
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime \
    && echo ${TZ} > /etc/timezone

# Install apt packages
RUN apt-get update \
    && apt-get install -y --no-install-recommends  \
    build-essential \
    curl \
    git \
    sudo \
    vim \
    wget \
    xvfb \
    xorg-dev \
    ffmpeg \
    swig \
    python-opengl \
    cmake

RUN echo "set completion-ignore-case on" >> ${HOME}/.inputrc

COPY requirements.txt /tmp/requirements.txt
RUN pip install -U -q pip \
    && pip install -U -q -r /tmp/requirements.txt

CMD ["/bin/bash"]
