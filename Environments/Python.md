## Anaconda

#### Create a new environment

```bash
conda create -n <env name> python=<version>
```

#### Activate the environment

```bash
conda activate <env name>
```

#### Install packages

```bash
conda install <package>
```

#### Deactivate the environment

```bash
conda deactivate
```

#### Create an environment from a file

```bash
conda env create -f <file>
```

#### Export an environment to a file

```bash
conda env export -f <file>
```

---

## Libraries

#### Scientific Computing

- numpy
- scipy

#### Deep Learning

- PyTorch
- TensorFlow
- pytorch-lightning
- torchinfo
- torch-tb-profiler

#### Reinforcement Learning

- stable-baselines3[mpi]
- imitation

#### Hyperparameter Optimization

- optuna
