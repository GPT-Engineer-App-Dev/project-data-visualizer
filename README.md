# project-data-visualizer

Create an internal tool for uploading and viewing CSV data about projects and code edits. It should have the following features:

- A form to upload a CSV file 
- Parse the CSV data and store it in state
- Display a list of project IDs from the parsed data
- When a project ID is selected, show a list of its code edits
- For each edit, display:
  - Metadata like created_at, created_by, etc.
  - Code blocks with syntax highlighting (if available in the data)
  - Commit SHA (if status is not failed)
- Use Chakra UI components for layout and form elements

Don't worry about styling too much for now, just focus on the core functionality. We can iterate to improve the UI later. Let me know if you have any questions!

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with REPLACE_WITH_TECH_STACK_SUMMARY.

REPLACE_WITH_TECH_STACK_POINTS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App-Dev/project-data-visualizer.git
cd project-data-visualizer
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
