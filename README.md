# Exercise 26.1: compiler diagnostics and optimization solution

## What is implemented

- raw `extendedDiagnostics` output is parsed into structured numeric metrics
- memory is converted from kilobytes to megabytes
- timing metrics are normalized into milliseconds
- cold and repeated builds can be compared through saved time and improvement percent
- an optimized compiler profile enables `incremental`, narrows `include`, and adds `.tsbuildinfo`

## Outcome

The exercise now models the practical workflow from the topic: inspect diagnostics, compare cold versus repeated builds, and move toward a more predictable compiler config.
