# Marine Life

Marine Life is a single-page website that takes visitors from the ocean surface to deep-sea habitats. Five sections introduce marine animals found at increasing depths, while the background gradually changes from blue to almost black.

The project uses HTML, CSS and JavaScript, with a simple structure inspired by the [Lime-Light-TechLead Parallax-scrolling example](https://github.com/Lime-Light-TechLead/Parallax-scrolling).

## Features

- An ocean surface introduction with a title and a link to start the descent.
- Five illustrated sections covering clownfish, chambered nautilus, fangtooth, dumbo octopus and Mariana snailfish.
- Parallax movement for the surface, decorative bubbles, title and animal images.
- A continuous gradient that makes the water darker farther down the page.
- A responsive layout that places images below the text on narrow screens.
- Support for the system's reduced-motion preference.
- Image credits and links to marine biology references in the footer.

## Ocean habitats

| Section | Animal | Illustrative depth |
| --- | --- | --- |
| Sunlight zone | Clownfish | 20 m |
| Twilight zone | Chambered nautilus | 400 m |
| Midnight zone | Fangtooth | 1,500 m |
| Abyssal zone | Dumbo octopus | 4,000 m |
| Hadal zone | Mariana snailfish | 7,500 m |

The page presents different ocean habitats rather than a literal dive at one location. Species depth ranges overlap, and images do not necessarily depict animals at the depth shown. The deepest ocean extends beyond the final stop.

## Technologies

- **HTML5** for the page structure, text and images.
- **CSS3** for the layout, background gradient, responsive styles and image presentation.
- **JavaScript** for the scroll-based parallax effect.

No frameworks, jQuery, package installation or build tools are required.

## Running locally

Download the project folder and open `index.html` in a modern browser. Alternatively, open the folder in Visual Studio Code and launch the page with Live Server.

Keep the image files beside the HTML, CSS and JavaScript files. The page works offline; external source and reference links require an internet connection.

## Project structure

```text
test-hw/
|-- index.html
|-- style.css
|-- script.js
|-- README.md
|-- surface.jpg
|-- clownfish.jpg
|-- chambered-nautilus-01.jpg
|-- Fangtooth_Fish.jpeg
|-- dumbo_octopus_web_optimized.jpg
`-- Mariana.snailfish.CTview4.AdamSummers.jpg
```

`index.html` contains the introduction, five animal sections and footer. `style.css` defines the visual appearance. `script.js` contains the `parallaxScroll` function, which moves elements at different rates using the current scroll position and the starting position of each section.

## Image credits

The site uses a combination of photographs, a 3D model preview, an illustration and a scientific CT scan. The source links below correspond to the files currently displayed on the page.

| Local file | Credit and source |
| --- | --- |
| `surface.jpg` | [John Lockwood / Unsplash](https://unsplash.com/photos/wavy-ocean-in-aerial-photography-LUiw-54S7Ek), [Unsplash License](https://unsplash.com/license). |
| `clownfish.jpg` | [Jan Derk / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Common_clownfish.jpg), public domain. |
| `chambered-nautilus-01.jpg` | 3D model preview by [Nestaeric / RenderHub](https://www.renderhub.com/nestaeric/chambered-nautilus). [Source image](https://cdn.renderhub.com/nestaeric/chambered-nautilus/chambered-nautilus-01.jpg). |
| `Fangtooth_Fish.jpeg` | [Richmond Mom, item 8](https://richmondmom.com/most-unique-sea-creatures-around-the-world/). [Source image](https://cdn.richmondmom.com/wp-content/uploads/2024/09/Fangtooth_Fish.jpeg). The article does not identify the original photographer. |
| `dumbo_octopus_web_optimized.jpg` | Illustration sourced from [Angry Octopus Diving](https://angryoctopusdiving.com/). [Source image](https://angryoctopusdiving.com/wp-content/uploads/2025/06/dumbo_octopus_web_optimized.webp). An illustrator credit could not be verified. |
| `Mariana.snailfish.CTview4.AdamSummers.jpg` | CT scan by Adam Summers / University of Washington. [Research news article](https://www.washington.edu/news/2017/11/28/theres-a-deeper-fish-in-the-sea/). [Source image](https://cdn.uw.edu/wp-content/uploads/sites/6/2017/11/04133331/Mariana.snailfish.CTview4.AdamSummers.jpg). |

Images are fitted to the layout using CSS. Third-party images retain their respective rights; attribution does not imply an open license or transfer of ownership.

## References

- [NOAA Fisheries: Chambered nautilus](https://www.fisheries.noaa.gov/species/chambered-nautilus)
- [MBARI: Fangtooth](https://www.mbari.org/animal/fangtooth/)
- [NOAA Ocean Exploration: Dumbo octopus](https://oceanexplorer.noaa.gov/multimedia/explorations-19biolum-background-cephalopods-media-dumbo-octopus/)
- [University of Washington: There's a deeper fish in the sea](https://www.washington.edu/news/2017/11/28/theres-a-deeper-fish-in-the-sea/)
