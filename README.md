## Required Software
- NPM
- Gulp CLI
- SCSS

## Installation
Run `npm install` to install all dependancies

## Running slide shows
Run `gulp dev` to spin up a web server and view your work in progress

Run `gulp` to build the project with no web server.  The build gets sent to the `/docs` folder.

## Dependancies

### Slides
- [RevealJS](https://github.com/hakimel/reveal.js/) - Main slide framework
- [Highlight.js](https://highlightjs.org) - this is used for syntax highlighting code.

### Build Process
- NPM
- Gulp
- (gulp-file-include)https://www.npmjs.com/package/gulp-file-include - This Gulp plugin acts as the main page templating engine for this site.

## Folder Structure

    .
    ├── docs                    # Build Directory
    ├── libs                    # 3rd party libraries
    └── src                     # Templates
        ├── Assessments         # Tests
        ├── Assignments         # Saturday based assignments
        ├── Exercises           # Class based exercises
        ├── Legacy              # Older decks from year one
        ├── sass
        └── templates           
            ├── resources       # collections of slides on all the specific topics
            ├── sessions        # Indivdual decks for each class session made up of resource slides
            └── index.html      # Full listing of all available decks.