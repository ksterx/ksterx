#!/bin/bash

log_dir=$SLURM_LOG_DIR
if [ "$#" -eq 1 ]; then
    file_to_tail=$(ls -t ${log_dir}/$1_*.log | head -n 1)
else
    file_to_tail=$(ls -t ${log_dir}/*.log | head -n 1)
fi
echo "=============================================================="
echo "$file_to_tail"
echo "--------------------------------------------------------------"
tail -n 60 -f "$file_to_tail"
