# Data Model: Hakathon Robotics AI Book

## Content Entities

### Documentation Page
- **Fields**: id, title, content, author, created_date, updated_date, module_id, prerequisites, tags, difficulty_level
- **Relationships**: belongs to one Module, has many Navigation Items, has many Code Examples
- **Validation**: title required, content required, valid markdown format
- **State transitions**: draft → review → published → archived

### Module
- **Fields**: id, name, description, order, prerequisites, learning_objectives, estimated_time
- **Relationships**: has many Documentation Pages, belongs to one Category
- **Validation**: name required, description required, unique order within category
- **State transitions**: planned → active → completed

### Navigation Item
- **Fields**: id, title, url, parent_id, order, module_id, page_id, visible
- **Relationships**: belongs to one Documentation Page, may have parent Navigation Item
- **Validation**: title required, valid URL format
- **State transitions**: draft → active → hidden

### Code Example
- **Fields**: id, title, code, language, description, page_id, tags
- **Relationships**: belongs to one Documentation Page
- **Validation**: code required, valid language identifier
- **State transitions**: draft → review → approved

### Category
- **Fields**: id, name, description, order, icon
- **Relationships**: has many Modules
- **Validation**: name required, unique name
- **State transitions**: planned → active → deprecated

### User Guide
- **Fields**: id, title, description, target_audience, prerequisites, duration, related_modules
- **Relationships**: connects to many Modules
- **Validation**: title required, target_audience required
- **State transitions**: draft → review → published

## Content Relationships

### Module → Documentation Page (1:M)
A module contains multiple documentation pages that build upon each other to teach specific concepts.

### Category → Module (1:M)
A category groups related modules together (e.g., "Foundations" category contains ROS2 and Simulation modules).

### Documentation Page → Code Example (1:M)
A documentation page can contain multiple code examples to illustrate concepts.

### Documentation Page → Navigation Item (1:1)
Each documentation page has a corresponding navigation item for site structure.

### User Guide → Module (M:M)
A user guide can reference multiple modules to create learning paths.

## Content States

### Documentation Status
- **Draft**: Initial content creation
- **Review**: Content under editorial review
- **Published**: Content available to users
- **Archived**: Content no longer maintained

### Difficulty Levels
- **Beginner**: No prior knowledge required
- **Intermediate**: Basic understanding required
- **Advanced**: Deep technical knowledge expected

### Content Tags
- **Theory**: Conceptual understanding
- **Practice**: Hands-on implementation
- **Safety**: Safety considerations
- **Simulation**: Simulation-focused content
- **Hardware**: Hardware-specific content