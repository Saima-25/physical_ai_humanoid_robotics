---
sidebar_position: 3
---

# Nodes, Topics, and Services

Understanding the core communication patterns in ROS2: nodes, topics, and services.

## Nodes

A node is an executable that uses ROS2 to communicate with other nodes. Nodes are the fundamental building blocks of a ROS2 system. They contain the actual code that performs computations and interacts with the world.

### Node Characteristics
- Each node runs a single-threaded event loop by default
- Nodes can be written in different programming languages (C++, Python, etc.)
- Nodes can be started and stopped independently
- Nodes can be distributed across multiple machines

### Creating a Node
In Python, nodes are created by subclassing `rclpy.Node` and implementing the required functionality.

## Topics

Topics are named buses over which nodes exchange messages. They implement a publish-subscribe communication pattern where publishers send messages to a topic and subscribers receive messages from a topic.

### Topic Communication
- **Publisher**: Sends messages to a topic
- **Subscriber**: Receives messages from a topic
- **Message**: Data structure sent between nodes
- **Quality of Service (QoS)**: Defines delivery guarantees for messages

### Topic Characteristics
- Unidirectional communication (publisher → subscriber)
- Many-to-many: multiple publishers can publish to a topic, multiple subscribers can subscribe to a topic
- Asynchronous: publishers and subscribers don't need to run simultaneously
- Decoupled: publishers don't know about subscribers and vice versa

## Services

Services implement a request-response communication pattern. A service client sends a request to a service server, which processes the request and sends back a response.

### Service Communication
- **Service Client**: Sends requests to a service
- **Service Server**: Processes requests and sends responses
- **Service Definition**: Defines the request and response message types

### Service Characteristics
- Synchronous communication
- One-to-one: one client talks to one server at a time
- Request-response pattern
- Request must be processed before response is sent

## Actions

Actions are a more advanced communication pattern that extends services with feedback and goal preemption capabilities. They're particularly useful for long-running tasks.

### Action Characteristics
- Goal: Request for long-running task
- Result: Final outcome of the task
- Feedback: Periodic updates during task execution
- Preemption: Ability to cancel or replace goals

## Communication Patterns in Humanoid Robotics

In humanoid robotics systems, these communication patterns are used extensively:

- **Topics** for sensor data streaming (IMU, cameras, joint states)
- **Services** for configuration changes and one-time requests
- **Actions** for complex movements and behaviors
- **Nodes** for different subsystems (perception, planning, control)

## Best Practices

1. **Design for Modularity**: Keep nodes focused on specific functions
2. **Use Standard Message Types**: Leverage built-in message types when possible
3. **Consider QoS Settings**: Choose appropriate QoS settings based on requirements
4. **Implement Error Handling**: Handle communication failures gracefully
5. **Follow Naming Conventions**: Use consistent naming for topics and services

## Safety Considerations

When designing communication patterns for humanoid robots:
- Implement timeout mechanisms for services and actions
- Use appropriate message validation
- Consider the impact of communication failures on safety
- Implement redundant communication paths where critical

## Next Steps

Continue with [rclpy Introduction](./rclpy-intro.md) to learn about the Python client library for ROS2.