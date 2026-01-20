 import main from "./images/steak.jpg";
  import drink from "./images/cocktail.jpg";
 import appetizer from "./images/golden_beet3.jpg";
export function initialPageLoad() {
    const content = document.querySelector('#content');

    // 1. Build Navigation
    const nav = document.createElement('nav');
    nav.classList.add('navbar');

    const navContainer = document.createElement('div');
    navContainer.classList.add('nav-container');

    const navLeft = document.createElement('div');
    navLeft.classList.add('nav-left');

    // Create Logo
    const logo = document.createElement('a');
    logo.href = '#';
    logo.classList.add('logo');
    logo.textContent = 'LUMINA';

    // Create Links Container
    const navLinks = document.createElement('div');
    navLinks.classList.add('nav-links');

    // Array of link names to loop through
    const links = ['Menu', 'Experience', 'About'];
    links.forEach(linkText => {
        const btn = document.createElement('button');
        btn.classList.add('nav-btn');
        btn.textContent = linkText;
        navLinks.appendChild(btn);
    });

    // Assemble Nav Left
    navLeft.appendChild(logo);
    navLeft.appendChild(navLinks);

    // Add to Nav Container
    navContainer.appendChild(navLeft);

    // Add Nav to Content
    nav.appendChild(navContainer);
    content.appendChild(nav);

    const navRight = document.createElement("div");
    navRight.classList.add('nav-right');
    // Inside your loadNavigation or initialPageLoad function:

    // 1. Create the button
    const bookBtn = document.createElement('button');

    // 2. Add the class for styling
    bookBtn.classList.add('book-btn');

    // 3. Add the text content
    bookBtn.textContent = 'Book a Table';

    // 4. Append the button to its parent container
    navRight.appendChild(bookBtn);

    navContainer.append(navLeft, navRight);

    // Create the mini-content wrapper
    const miniContent = document.createElement('div');
    miniContent.id = 'mini-content';

    // Create the hero header
    const heroHeader = document.createElement('header');
    heroHeader.classList.add('hero');

    // Create the glass card container
    const glassCard = document.createElement('div');
    glassCard.classList.add('glass-card', 'animate-fade-up');

    // Start nesting
    heroHeader.appendChild(glassCard);
    miniContent.appendChild(heroHeader);
    content.appendChild(miniContent);
    // 1. Create the main headline
    const headline = document.createElement('h1');
    headline.textContent = 'Elevated Classics, '; // Safe plain text

    // 2. Create the line break
    const lineBreak = document.createElement('br');

    // 3. Create the italicized span
    const italicText = document.createElement('span');
    italicText.classList.add('italic');
    italicText.textContent = 'Illuminated'; // Safe plain text

    // 4. Put it all together
    headline.appendChild(lineBreak);
    headline.appendChild(italicText);

    // Now add it to the card
    // Create the description paragraph (p)
    const description = document.createElement('p');
    description.textContent = 'Experience the art of seasonal dining at Lumina. From sun-drenched brunches to refined evening plates, we bring a modern glow to New American cuisine.';

    // 3. Create the actions container (div)
    const heroActions = document.createElement('div');
    heroActions.classList.add('hero-actions');

    // 4. Create the buttons
    const viewMenuBtn = document.createElement('button');
    viewMenuBtn.classList.add('primary-btn');
    viewMenuBtn.textContent = 'View Menu';

    const experienceBtn = document.createElement('button');
    experienceBtn.classList.add('secondary-btn');
    experienceBtn.textContent = 'The Experience';
    heroActions.append(viewMenuBtn, experienceBtn);
    glassCard.append(headline, description, heroActions);

    // 1. Create the Section
    const menuSection = document.createElement('section');
    menuSection.id = 'menu';
    menuSection.classList.add('menu-section');

    // 2. Create the Section Header
    const sectionHeader = document.createElement('div');
    sectionHeader.classList.add('section-header');

    const displayTitle = document.createElement('h2');
    displayTitle.classList.add('display-title');
    displayTitle.textContent = 'Signature Creations';

    const goldDivider = document.createElement('div');
    goldDivider.classList.add('gold-divider');

    const sectionSubtitle = document.createElement('p');
    sectionSubtitle.classList.add('section-subtitle', 'italic');
    sectionSubtitle.textContent = "A curated selection of our chef's favorite seasonal masterpieces.";

    // Assemble Header
    sectionHeader.append(displayTitle, goldDivider, sectionSubtitle);
    menuSection.appendChild(sectionHeader);

    // 3. Create the Grid Container
    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menu-grid');
    menuSection.appendChild(menuGrid);

    // Add the whole section to our main content
    content.appendChild(menuSection);

    // 1. Define the data
    const menuItems = [
        {
            name: 'Golden Beet Carpaccio',
            category: 'Starter',
            img: appetizer,
            description: 'Thinly sliced heirloom beets, whipped goat cheese, toasted pistachios, and a honey-balsamic glaze.',
            price: '$16'
        },
        {
            name: 'Lumina Prime Ribeye',
            category: 'Main',
            img: main,
            description: '14oz dry-aged beef, roasted garlic bone marrow butter, and charred broccolini.',
            price: '$54'
        },
        {
            name: 'The Solar Flare',
            category: 'Cocktail',
            img: drink,
            description: 'Spicy mezcal, fresh passionfruit, lime, and a tajin-dusted rim.',
            price: '$18'
        }
    ];

    // 2. Loop and Create
    menuItems.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('menu-card');

        // Create Image Wrapper and Overlay
        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('image-wrapper');

        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.name;

        const overlay = document.createElement('div');
        overlay.classList.add('image-overlay');
        const categorySpan = document.createElement('span');
        categorySpan.textContent = item.category;
        overlay.appendChild(categorySpan);

        imgWrapper.append(img, overlay);

        // Create Text Content
        const title = document.createElement('h3');
        title.classList.add('item-title');
        title.textContent = item.name;

        const desc = document.createElement('p');
        desc.classList.add('item-desc');
        desc.textContent = item.description;

        const price = document.createElement('p');
        price.classList.add('item-price');
        price.textContent = item.price;

        // Assemble and Append
        card.append(imgWrapper, title, desc, price);
        menuGrid.appendChild(card);
    });
   // --- 4. BUILD FOOTER ---
    const footer = document.createElement('footer');
    footer.classList.add('main-footer');

    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footer-container');

    // A. Brand Column
    const brandCol = document.createElement('div');
    brandCol.classList.add('footer-col');
    const footerLogo = document.createElement('h4');
    footerLogo.classList.add('logo');
    footerLogo.textContent = 'LUMINA';
    const footerDesc = document.createElement('p');
    footerDesc.textContent = 'Illuminating the culinary landscape with modern American classics and seasonal inspiration.';
    brandCol.append(footerLogo, footerDesc);

    // B. Hours Column
    const hoursCol = document.createElement('div');
    hoursCol.classList.add('footer-col');
    const hoursTitle = document.createElement('h5');
    hoursTitle.textContent = 'Hours';
    const hoursList = document.createElement('ul');
    const times = ['Mon - Thu: 11am — 10pm', 'Fri - Sat: 11am — 11pm', 'Sun: 10am — 9pm'];
    times.forEach(time => {
        const li = document.createElement('li');
        li.textContent = time;
        hoursList.appendChild(li);
    });
    hoursCol.append(hoursTitle, hoursList);

    // C. Location Column
    const locationCol = document.createElement('div');
    locationCol.classList.add('footer-col');
    const locationTitle = document.createElement('h5');
    locationTitle.textContent = 'Location';
    const address = document.createElement('p');
    address.appendChild(document.createTextNode('123 Radiance Blvd'));
    address.appendChild(document.createElement('br'));
    address.appendChild(document.createTextNode('San Francisco, CA 94105'));
    address.appendChild(document.createElement('br'));
    address.appendChild(document.createTextNode('(555) 123-4567'));
    locationCol.append(locationTitle, address);

    // D. Follow Column
    const followCol = document.createElement('div');
    followCol.classList.add('footer-col');
    const followTitle = document.createElement('h5');
    followTitle.textContent = 'Follow';
    const socialLinks = document.createElement('div');
    socialLinks.classList.add('social-links');
    const icons = ['facebook', 'camera_alt', 'alternate_email'];
    icons.forEach(iconName => {
        const anchor = document.createElement('a');
        anchor.href = '#';
        const iconSpan = document.createElement('span');
        iconSpan.classList.add('material-icons');
        iconSpan.textContent = iconName;
        anchor.appendChild(iconSpan);
        socialLinks.appendChild(anchor);
    });
    followCol.append(followTitle, socialLinks);

    // --- FINAL ASSEMBLY ---
    // 1. Add all 4 columns to the container
    footerContainer.append(brandCol, hoursCol, locationCol, followCol);

    // 2. Add container to footer
    footer.appendChild(footerContainer);

    // 3. Finally, add the footer to the main content
    content.appendChild(footer);
    // --- 5. BUILD FOOTER BOTTOM BAR ---
const footerBottom = document.createElement('div');
footerBottom.classList.add('footer-bottom');

const bottomContent = document.createElement('div');
bottomContent.classList.add('footer-bottom-content');

// Copyright Text
const copyright = document.createElement('p');
copyright.textContent = '© 2026 Lumina Kitchen & Bar. All rights reserved.';

// Legal Links Container
const legalLinks = document.createElement('div');
legalLinks.classList.add('legal-links');

const policies = ['Privacy Policy', 'Careers'];
policies.forEach(policyText => {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = policyText;
    legalLinks.appendChild(link);
});

// Assemble Bottom Bar
bottomContent.append(copyright, legalLinks);
footerBottom.appendChild(bottomContent);

// Add to the main footer (after the footerContainer)
footer.appendChild(footerBottom);
}