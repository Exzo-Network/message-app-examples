#!/bin/sh

# Script to run solt and generate standard-json files for Etherscan verification.

solFiles=(
  message/apps/examples/MsgExampleBasic
  message/apps/examples/MsgExampleBasicTransfer
  message/apps/examples/MsgExampleInOrder
)

run_solt_write() {
  for f in "${solFiles[@]}"; do
    solt write contracts/$f.sol --npm --runs 800
  done
}
