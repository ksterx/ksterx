# Python

---

## 1. Anaconda/Miniconda

**Create a new environment**

```bash
conda create -n <env name> python=<version>
```

**Activate the environment**

```bash
conda activate <env name>
```

**Install packages**

```bash
conda install <package>
```

**Deactivate the environment**

```bash
conda deactivate
```

**Create an environment from a file**

```bash
conda env create -f <file>
```

**Export an environment to a file**

```bash
conda env export -f <file>
```

## 2. Libraries

#### Scientific Computing

- numpy
- scipy

#### Deep Learning

- PyTorch
- pytorch-lightning
- scikit-learn
- TensorFlow
- torchinfo
- torch-tb-profiler

#### Reinforcement Learning

- imitation
- stable-baselines3[all]
- "ray[air]"
- gym

#### Hyperparameter Optimization

- optuna
- hydra

#### Utilities

- black
- flake8
- heartrate
- isort
- line_profiler
- pytest
- pyglet

#### Analysis

- autoviz
- bokeh
- matplotlib
- pandas
- pandas-profiling
- plotly
- seaborn

#### Workflow

- kedro
- kedro-viz
- luigi
- mlflow

#### Image Processing

- ffmpeg
- opencv-python
- opencv-contrib-python
- scikit-image

#### Jupyter

- jupyter-kite
- jupyter-tensorboard
- jupyterlab
- jupyterlab-git
- jupytext
- theme-darcula
