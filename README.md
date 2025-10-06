# Rumah Belajar Ibnu Abbas Landing Page

This is the official landing page for Rumah Belajar Ibnu Abbas, an Islamic educational institution. The page is built with React and Vite, and it uses Tailwind CSS for styling and Framer Motion for animations.

## Project Structure

The project is structured as follows:

```
├── public
│   ├── foto1.jpg
│   ├── foto2.jpg
│   ├── foto3.jpg
│   ├── foto4.jpg
│   ├── foto5.jpg
│   ├── foto6.jpg
│   └── logo.png
├── src
│   ├── components
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Program.jsx
│   │   └── Stats.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Components

### `App.jsx`

The main component that renders all the other components.

### `Navbar.jsx`

The navigation bar at the top of the page. It is sticky and has a transparent background that becomes opaque on scroll. It also has a mobile menu that slides in from the right.

### `Hero.jsx`

The hero section of the page, with a background image and a call to action.

### `Stats.jsx`

A section that displays some statistics about the institution.

### `About.jsx`

A section that provides information about the institution, including its vision and mission.

### `Program.jsx`

A section that describes the educational programs offered by the institution.

### `Blog.jsx`

A section that displays a list of blog posts. Clicking on a blog post opens a modal with the full content of the post.

### `Footer.jsx`

The footer of the page, with contact information and a contact form.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username_/your_project_name.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Run the development server
    ```sh
    npm run dev
    ```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m '''Add some AmazingFeature'''`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
