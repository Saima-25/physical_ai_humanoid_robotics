---
sidebar_position: 5
---

# URDF Fundamentals

Understanding URDF (Unified Robot Description Format), the XML-based format used to describe robot models in ROS.

## What is URDF?

URDF (Unified Robot Description Format) is an XML-based format used to describe robot models in ROS. It defines the physical and visual properties of a robot, including its links, joints, and other components. URDF is essential for simulation, visualization, and control of robotic systems.

## Basic URDF Structure

A minimal URDF file contains:

```xml
<?xml version="1.0"?>
<robot name="my_robot">
  <link name="base_link">
    <visual>
      <geometry>
        <box size="1 1 1"/>
      </geometry>
    </visual>
    <collision>
      <geometry>
        <box size="1 1 1"/>
      </geometry>
    </collision>
  </link>
</robot>
```

## Links

Links represent rigid bodies in the robot. Each link has:

- **Visual**: How the link appears in visualization
- **Collision**: How the link interacts in physics simulation
- **Inertial**: Mass, center of mass, and inertia properties

### Link Properties

```xml
<link name="link_name">
  <visual>
    <origin xyz="0 0 0" rpy="0 0 0"/>
    <geometry>
      <box size="1 1 1"/>
      <!-- or <cylinder radius="0.5" length="1"/> -->
      <!-- or <sphere radius="0.5"/> -->
      <!-- or <mesh filename="package://path/to/mesh.stl"/> -->
    </geometry>
    <material name="color">
      <color rgba="0.8 0.2 0.2 1.0"/>
    </material>
  </visual>
  <collision>
    <origin xyz="0 0 0" rpy="0 0 0"/>
    <geometry>
      <box size="1 1 1"/>
    </geometry>
  </collision>
  <inertial>
    <mass value="1.0"/>
    <inertia ixx="0.1" ixy="0.0" ixz="0.0" iyy="0.1" iyz="0.0" izz="0.1"/>
  </inertial>
</link>
```

## Joints

Joints connect links and define their relative motion. Common joint types:

- **Fixed**: No relative motion between links
- **Revolute**: Single-axis rotation with limits
- **Continuous**: Single-axis rotation without limits
- **Prismatic**: Single-axis translation with limits
- **Planar**: Motion on a plane
- **Floating**: 6-DOF motion

### Joint Properties

```xml
<joint name="joint_name" type="revolute">
  <parent link="parent_link"/>
  <child link="child_link"/>
  <origin xyz="0 0 0" rpy="0 0 0"/>
  <axis xyz="0 0 1"/>
  <limit lower="-1.57" upper="1.57" effort="10.0" velocity="1.0"/>
  <dynamics damping="0.1" friction="0.0"/>
</joint>
```

## Robot Transmissions

Transmissions define the relationship between joints and actuators:

```xml
<transmission name="transmission_name">
  <type>transmission_interface/SimpleTransmission</type>
  <joint name="joint_name">
    <hardwareInterface>hardware_interface/EffortJointInterface</hardwareInterface>
  </joint>
  <actuator name="actuator_name">
    <hardwareInterface>hardware_interface/EffortJointInterface</hardwareInterface>
    <mechanicalReduction>1</mechanicalReduction>
  </actuator>
</transmission>
```

## Gazebo-Specific Elements

When using URDF with Gazebo simulation:

```xml
<gazebo reference="link_name">
  <material>Gazebo/Blue</material>
  <mu1>0.2</mu1>
  <mu2>0.2</mu2>
</gazebo>

<gazebo>
  <plugin name="gazebo_ros_control" filename="libgazebo_ros_control.so">
    <robotNamespace>/robot_name</robotNamespace>
  </plugin>
</gazebo>
```

## Common URDF Patterns

### Robot Base
```xml
<link name="base_link">
  <inertial>...</inertial>
  <visual>...</visual>
  <collision>...</collision>
</link>
```

### Fixed Joint
```xml
<joint name="fixed_joint" type="fixed">
  <parent link="base_link"/>
  <child link="sensor_link"/>
  <origin xyz="0.1 0 0.2" rpy="0 0 0"/>
</joint>
```

### Rotating Joint
```xml
<joint name="rotating_joint" type="continuous">
  <parent link="base_link"/>
  <child link="rotating_part"/>
  <axis xyz="0 0 1"/>
  <origin xyz="0 0 0.1" rpy="0 0 0"/>
</joint>
```

## Best Practices

1. **Start Simple**: Begin with a basic model and add complexity gradually
2. **Use Meshes**: For complex geometries, use mesh files instead of primitive shapes
3. **Validate Inertias**: Ensure inertial properties are physically realistic
4. **Check Joint Limits**: Set appropriate limits for revolute joints
5. **Use Standard Names**: Follow conventions for common robot components
6. **Organize with Xacro**: Use Xacro for complex models to avoid repetition

## Xacro for Complex Models

Xacro (XML Macros) allows you to create parameterized URDF models:

```xml
<?xml version="1.0"?>
<robot xmlns:xacro="http://www.ros.org/wiki/xacro" name="my_robot">
  <xacro:property name="wheel_radius" value="0.1"/>
  <xacro:property name="wheel_width" value="0.05"/>

  <xacro:macro name="wheel" params="prefix parent xyz rpy">
    <joint name="${prefix}_wheel_joint" type="continuous">
      <parent link="${parent}"/>
      <child link="${prefix}_wheel"/>
      <origin xyz="${xyz}" rpy="${rpy}"/>
      <axis xyz="0 1 0"/>
    </joint>
    <link name="${prefix}_wheel">
      <visual>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </visual>
    </link>
  </xacro:macro>

  <xacro:wheel prefix="front_left" parent="base_link" xyz="0.2 0.2 0" rpy="0 0 0"/>
</robot>
```

## Safety Considerations

When designing URDF models for humanoid robots:
- Ensure realistic inertial properties to prevent simulation instabilities
- Include collision geometry for safety checks
- Consider the physical limits of actuators in joint definitions
- Validate that the model represents the actual robot accurately

## Next Steps

Explore [Simulation](../simulation/index.md) to learn how URDF models are used in robotic simulation environments.