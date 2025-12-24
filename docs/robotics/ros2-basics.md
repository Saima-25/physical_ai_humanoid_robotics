---
sidebar_position: 2
---

# ROS2 Basics

An introduction to the Robot Operating System 2 (ROS2), covering its architecture, concepts, and basic usage.

## What is ROS2?

ROS2 is the next generation of the Robot Operating System, designed to provide a flexible framework for writing robot software. Unlike traditional operating systems, ROS2 is not an actual OS but rather a middleware framework that provides services designed for a heterogeneous computer cluster.

## Key Concepts

### Nodes
A node is an executable that uses ROS2 to communicate with other nodes. Nodes are the fundamental building blocks of a ROS2 system. They contain the actual code that performs computations and interacts with the world.

### Packages
Packages are the software containers in ROS2. They contain libraries, executables, scripts, or other files necessary for a specific functionality. Packages are the primary means of organizing and distributing ROS2 software.

### Workspaces
A workspace is a directory where you modify, build, and install ROS2 packages. The standard workflow involves creating a workspace, adding packages to it, and building the packages.

## Architecture

ROS2 uses a distributed architecture where nodes can run on different machines and communicate over a network. This allows for:

- **Scalability**: Systems can grow by adding more nodes
- **Flexibility**: Different nodes can run on different hardware
- **Maintainability**: Components can be developed and tested independently

## Installation

ROS2 can be installed on various platforms including Ubuntu, Windows, and macOS. For humanoid robotics development, we recommend using Ubuntu 22.04 LTS with the latest ROS2 Humble Hawksbill distribution.

## Core Tools

### ros2 command
The primary command-line interface for ROS2 operations, including:
- `ros2 run`: Run a node
- `ros2 topic`: Work with topics
- `ros2 service`: Work with services
- `ros2 node`: Work with nodes
- `ros2 pkg`: Work with packages

### rviz2
A 3D visualization tool for displaying robot state, sensor data, and other information in a graphical format.

## Safety Considerations

When working with ROS2 in humanoid robotics:
- Always test in simulation before running on real hardware
- Implement proper safety monitors and emergency stops
- Use appropriate access controls and network security
- Follow best practices for real-time performance

## Next Steps

Continue with [Nodes, Topics, and Services](./nodes-topics-services.md) to learn about the communication patterns in ROS2.