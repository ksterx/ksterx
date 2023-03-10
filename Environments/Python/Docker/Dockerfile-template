FROM baseImageYouWantToUse

LABEL maintainer="ksterx <kostonerx@gmail.com>"

# Change the arguments to your needs
ARG USER_NAME=ksterx
ARG ENV_NAME=env_name
ARG PYTHON_VERSION=3.10

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8
ENV TZ=Asia/Tokyo

# Set timezone as $TZ
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Install apt packages
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    git \
    make \
    sudo

# Add user as sudoer
RUN useradd --create-home ${USER_NAME} \
    && gpasswd -a ${USER_NAME} sudo \
    && echo "%sudo ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers \
    && chown -R ${USER_NAME}:${USER_NAME} /opt/conda
USER ${USER_NAME}
WORKDIR /home/${USER_NAME}
RUN echo "set completion-ignore-case on" >> /home/${USER_NAME}/.inputrc

# Set up environment
ENV PATH "/home/${USER_NAME}/.local/bin:$PATH"
ENV PATH /opt/conda/envs/${ENV_NAME}/bin:$PATH
RUN pip install -U -q pip \
    && conda update -n base -c defaults -q conda \
    && conda create -n ${ENV_NAME} -y -q python=${PYTHON_VERSION} \
    && conda init bash\
    && echo "conda activate ${ENV_NAME}" >> /home/${USER_NAME}/.bashrc \
    && . /home/${USER_NAME}/.bashrc
