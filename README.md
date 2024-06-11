# Technical Project Management

## Overview

This project explores the principles of technical project management using practical examples and interactive tasks. It demonstrates how Pareto's Law (80-20 rule) can be applied to project management and cooking, illustrating the importance of planning and execution in achieving efficient outcomes.

## Features

- **Journey Board**: An interactive component that displays project tasks and assets.
- **Project Assets**: A list of tasks and their associated assets (videos, articles, etc.).
- **Hover and Click Animations**: Smooth animations for better user experience.
- **Responsive Design**: Ensures compatibility with different screen sizes.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/vvc10/dt-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd [your-project-directory]
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

## Project Structure

- `src/components`: Contains React components such as `JourneyBoard` and `ProjectAssets`.
- `src/assets/css`: Contains CSS files for styling the components.
- `src/data`: Contains the project data in JSON format.

## Usage

### JourneyBoard Component

The `JourneyBoard` component displays a floating board with project tasks and assets. It slides into view when hovered over or clicked, and hides when not in use.

**Props:**
- `data`: An object containing task and asset information.

### ProjectAssets Component

The `ProjectAssets` component displays a list of tasks and their details.

**Props:**
- `tasks`: An array of task objects, each containing details like task title, description, and assets.

### Example Data Structure

```json
{
  "tasks": [
    {
      "task_id": 18882,
      "task_title": "Explore the world of management",
      "task_description": "As a project manager, you play an important role in leading a project...",
      "assets": [
        {
          "asset_id": 18883,
          "asset_title": "Technical Project Management",
          "asset_description": "Story of Alignment...",
          "asset_content": "https://www.youtube.com/embed/TiMRwri1xJ8",
          "asset_type": "display_asset",
          "asset_content_type": "video"
        }
      ]
    }
  ]
}
