---
sidebar_position: 4
---

# rclpy Introduction

An introduction to rclpy, the Python client library for ROS2, covering its basic usage and common patterns.

## What is rclpy?

rclpy is the Python client library for ROS2. It provides a Python API for ROS2 concepts such as nodes, publishers, subscribers, services, and actions. rclpy is built on top of the ROS2 C client library (rcl) and provides a Pythonic interface to ROS2 functionality.

## Basic Node Structure

A minimal rclpy node consists of:

```python
import rclpy
from rclpy.node import Node

def main(args=None):
    rclpy.init(args=args)
    node = YourNodeClass()
    rclpy.spin(node)
    node.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Creating a Publisher Node

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello World: %d' % self.i
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data)
        self.i += 1
```

## Creating a Subscriber Node

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalSubscriber(Node):
    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(
            String,
            'topic',
            self.listener_callback,
            10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)
```

## Creating a Service Server

```python
import rclpy
from rclpy.node import Node
from example_interfaces.srv import AddTwoInts

class MinimalService(Node):
    def __init__(self):
        super().__init__('minimal_service')
        self.srv = self.create_service(AddTwoInts, 'add_two_ints', self.add_two_ints_callback)

    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info('Incoming request\na: %d b: %d' % (request.a, request.b))
        return response
```

## Creating a Service Client

```python
import rclpy
from rclpy.node import Node
from example_interfaces.srv import AddTwoInts

class MinimalClient(Node):
    def __init__(self):
        super().__init__('minimal_client')
        self.cli = self.create_client(AddTwoInts, 'add_two_ints')
        while not self.cli.wait_for_service(timeout_sec=1.0):
            self.get_logger().info('service not available, waiting again...')
        self.req = AddTwoInts.Request()

    def send_request(self, a, b):
        self.req.a = a
        self.req.b = b
        self.future = self.cli.call_async(self.req)
        rclpy.spin_until_future_complete(self, self.future)
        return self.future.result()
```

## Quality of Service (QoS) Settings

QoS settings allow you to specify delivery guarantees for messages:

```python
from rclpy.qos import QoSProfile, ReliabilityPolicy, HistoryPolicy

qos_profile = QoSProfile(
    depth=10,
    reliability=ReliabilityPolicy.RELIABLE,
    history=HistoryPolicy.KEEP_LAST
)
```

## Working with Parameters

Nodes can accept parameters that can be configured at runtime:

```python
def __init__(self):
    super().__init__('parameter_node')
    self.declare_parameter('my_parameter', 'default_value')
    my_param = self.get_parameter('my_parameter').value
```

## Threading and Callbacks

rclpy provides several execution strategies:
- **Single-threaded executor**: Default, processes callbacks sequentially
- **Multi-threaded executor**: Processes callbacks in parallel threads
- **Custom executors**: For specialized execution patterns

## Best Practices

1. **Use Context Managers**: Use `rclpy.init()` as a context manager when possible
2. **Handle Exceptions**: Properly handle exceptions in callbacks
3. **Validate Inputs**: Validate message data before processing
4. **Use Appropriate QoS**: Choose QoS settings based on requirements
5. **Log Appropriately**: Use the node's logger for consistent output
6. **Clean Up Resources**: Properly destroy nodes and shut down rclpy

## Safety Considerations

When using rclpy in humanoid robotics:
- Implement proper error handling for communication failures
- Use timeouts for service calls and action clients
- Validate message contents to prevent unsafe behavior
- Consider the impact of node failures on the overall system

## Next Steps

Continue with [URDF Fundamentals](./urdf-fundamentals.md) to learn about robot description in ROS2.