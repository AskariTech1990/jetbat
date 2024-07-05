------------------------------------------------------------------------------------------------------------
                                            HEADER COMPONENT
------------------------------------------------------------------------------------------------------------

/*---------------------------------------------------------------------------------------
  Header Component
  This component serves as the navigation bar for the website, providing links to various
  sections, social media icons, and a responsive design that adapts to different screen sizes.

  Purpose:
  - To provide an intuitive and accessible navigation experience for users on both desktop
    and mobile devices.

  Dependencies:
  - React: Frontend JavaScript library for building user interfaces.
  - next/image: Component for optimizing images in Next.js applications.
  - '../assets/logo.png': Logo image asset imported for display.
  - react-icons/md: Icon library for Material Design icons (used for dropdown arrow).
  - react-icons/ri: Icon library for Remix icons (used for Twitter icon).
  - react-icons/fa: Icon library for Font Awesome icons (used for Telegram, Facebook, Instagram, and YouTube icons).

  Design:
  - Uses Tailwind CSS for styling, including responsive design classes.
  - Includes hover effects to enhance user experience and visual feedback.
  - Mobile-friendly design with a toggleable menu and dropdown.

  Content:
  - Logo section displaying the brand logo.
  - Navigation links including an "About" dropdown with multiple subsections.
  - Social media icons linking to respective platforms.
  - Mobile menu with a slide-in animation for smaller screens.

  Key Features:
  - Responsive Design: Adjusts layout based on screen size, providing an optimal experience
    on both desktop and mobile devices.
  - Dropdown Menu: "About" section with a dropdown menu containing links to "Jebat", 
    "Roadmap", "Tokenomics", "Staking/Rewards", and "FAQ".
  - Mobile Menu: Accessible via a hamburger icon, displaying a slide-in menu with the same
    links as the desktop navigation.
  - Social Media Integration: Icons linking to Twitter, Telegram, Facebook, Instagram, and
    YouTube profiles, enhancing the brand's online presence.

  Detailed Structure:
  - Header: The main container with a black background and white text.
  - Container: A flexbox container to align logo, navigation, and social icons.
  - Logo: Displayed using the next/image component for optimized performance.
  - Desktop Navigation: A list of links, including the "About" dropdown.
  - Social Icons: Displayed as buttons with hover effects, hidden on mobile.
  - Mobile Menu Button: A hamburger icon to toggle the mobile menu visibility.
  - Mobile Menu: A fixed position menu with a gradient background, containing navigation links and social icons.

  This component ensures that users can easily navigate the website, access important
  information, and connect with the brand through various social media platforms.
---------------------------------------------------------------------------------------*/



------------------------------------------------------------------------------------------------------------------
                                                BANNER COMPONENT
------------------------------------------------------------------------------------------------------------------


/*---------------------------------------------------------------------------------------
  Banner Component
  This component displays the main banner section of the website, showcasing key 
  information about the $JEBAT token sale.

  Purpose:
  - To inform users about the $JEBAT token sale and provide actions to learn more 
    and purchase tokens.

  Dependencies:
  - React: Frontend JavaScript library for building user interfaces.
  - Tailwind CSS: Utility-first CSS framework for styling.
  - Modal (imported): Modal component for additional functionality (not explicitly 
    used in this snippet but can be part of extended functionality).

  Structure:
  - Top section: Displays token name and a headline about purchasing $JEBAT.
  - Middle section: Provides brief information and options for users, including how 
    to learn more and purchase $JEBAT.

  Design:
  - Uses Tailwind CSS for responsive and utility-based styling.
  - Employs a flexible layout with sections that adapt to different screen sizes.
  - Incorporates visually appealing elements such as background colors and border styles.

  Content:
  - Token Information: Name and brief description of the $JEBAT token.
  - Headline: A catchy headline encouraging users to purchase $JEBAT tokens.
  - Subheadline: A brief description providing additional context.
  - Action Button: "How it works" button to direct users to more information.
  - Information Panel: Displays key details about the token sale, including presale status, 
    countdown, amount raised, user's purchase percentage, current stage, and token price.
  - Action Buttons: "Connect" and "Purchase" buttons for user interactions.

  Key Features:
  - Responsive Design: Ensures the banner is visually appealing and functional on both 
    desktop and mobile devices.
  - Token Sale Information: Provides real-time updates and key metrics about the $JEBAT 
    token sale.
  - User Interaction: Includes buttons for users to connect to the platform and purchase 
    tokens directly.

  Detailed Structure:
  - Banner Container: A flexbox container for aligning the top and middle sections.
    - Top Section:
      - Token Information: Displays the token name and a brief description.
      - Main Headline: A prominent headline encouraging token purchase.
      - Subheadline: Additional information in a smaller text.
      - Action Button: A button labeled "How it works" for further information.
    - Middle Section:
      - Information Panel: A card-like element with a white background displaying various 
        details about the token sale.
        - Presale Status: Indicates the current status of the presale.
        - Countdown Timer: Shows the time remaining until the next price increase.
        - Amount Raised: Displays the total amount raised in USD.
        - Purchase Percentage: Shows the user's purchase percentage of $JEBAT tokens.
        - Sale Stage: Indicates the current stage of the token sale.
        - Token Price: Displays the current price of $JEBAT tokens.
        - Placeholder: Placeholder for ETH and Jebat amounts.
        - Action Buttons: "Connect" and "Purchase" buttons for user interactions.

  This component is designed to engage users by providing essential information about the 
  $JEBAT token sale and facilitating easy actions to learn more and participate in the sale.
---------------------------------------------------------------------------------------*/


------------------------------------------------------------------------------------------------------------------
                                                ABOUT COMPONENT
------------------------------------------------------------------------------------------------------------------


/*---------------------------------------------------------------------------------------
  About Component
  This component provides detailed information about Jebat AI, including its features
  and benefits, through visually engaging sections with images and descriptive text.

  Purpose:
  - To inform users about Jebat AI, its capabilities, and how it contributes to a sustainable
    future.
  - To visually represent different aspects of AI and their relevance to Jebat AI.

  Dependencies:
  - React: Frontend JavaScript library for building user interfaces.
  - next/image: Component for optimizing images in Next.js applications.
  - '../assets/bot.png': Image asset representing Artificial Intelligence.
  - '../assets/girl.png': Image asset representing AI Prompt.
  - '../assets/bot2.png': Image asset representing Jebat AI SinglePrompt.

  Structure:
  - Main container: Div with a margin-bottom and an ID of "about" for section identification.
  - Header: Displays the title "ABOUT JEBAT AI" and a descriptive paragraph about Jebat AI.
  - Three sections: Each section describes a specific feature of Jebat AI with an image and text.
    - First Section: Focuses on Artificial Intelligence.
    - Second Section: Describes AI Prompt.
    - Third Section: Explains Jebat AI SinglePrompt.

  Design:
  - Uses Tailwind CSS for styling, including responsive design classes and animations.
  - Incorporates background colors and blurs for visual appeal.
  - Ensures text is readable on different screen sizes with appropriate font sizes and colors.

  Content:
  - Header:
    - Title: "ABOUT JEBAT AI".
    - Divider: A horizontal line with a green background.
    - Description: Brief introduction to Jebat AI's mission and eco-friendly rewards.
  - Sections:
    - Each section includes a title, description, and a "BUY NOW" button.
    - Images: Positioned with responsive layouts and background effects.

  Key Features:
  - Responsive Design: Adapts layout based on screen size for optimal viewing experience.
  - Informative Content: Provides clear and concise information about Jebat AI's features.
  - Visual Appeal: Uses images and background effects to enhance user engagement.
  - Call-to-Action: "BUY NOW" buttons to encourage user interaction.

  Detailed Structure:
  - Main Container:
    - Header Section:
      - Title: "ABOUT JEBAT AI".
      - Divider: Green horizontal line.
      - Description: "We're sending Elon's fave towards a more sustainable future. Stake $JEBAT today to start earning eco-friendly rewards."
    - First Section: Artificial Intelligence (AI)
      - Image: bot.png with a yellow background blur.
      - Title: "Artificial Intelligence (AI)"
      - Description: Detailed text about AI and its capabilities.
      - Button: "BUY NOW"
    - Second Section: AI Prompt
      - Title: "AI Prompt"
      - Description: Explanation of AI prompts and their importance.
      - Button: "BUY NOW"
      - Image: girl.png with a purple background blur.
    - Third Section: Jebat AI SinglePrompt
      - Image: bot2.png with a gray background blur.
      - Title: "Jebat AI SinglePrompt"
      - Description: Information about the SinglePrompt feature.
      - Button: "BUY NOW"

  This component aims to educate users about Jebat AI's functionalities and advantages while
  providing an engaging and visually appealing user experience.
---------------------------------------------------------------------------------------*/


------------------------------------------------------------------------------------------------------------------
                                                INFORMATION COMPONENT
------------------------------------------------------------------------------------------------------------------



/*---------------------------------------------------------------------------------------
  Information Component
  This component displays key information about Jebat AI, including introductory text,
  buttons for actions, and images showcasing AI-related concepts.

  Purpose:
  - Presents introductory information about Jebat AI and its offerings.

  Dependencies:
  - React: Frontend JavaScript library for building user interfaces.
  - next/image: Component for optimizing images in Next.js applications.
  - '../assets/aboutImage.webp': Image asset imported for display.
  - '../assets/aboutImage2.webp': Another image asset imported for display.

  Design:
  - Uses Tailwind CSS for styling, including responsive design classes.
  - Employs animation effects for visual appeal and user engagement.

  Content:
  - Headline introducing Jebat AI and its mission.
  - Paragraph describing the sustainable goals of Jebat AI.
  - Buttons for immediate actions: "Start Now" and "How it works".
  - Image sections illustrating AI concepts with descriptive captions and call-to-action buttons.

  Designed to engage users with clear, concise information and visually appealing 
  representations of AI concepts supported by animations.

---------------------------------------------------------------------------------------*/



------------------------------------------------------------------------------------------------------------------
                                                ROADMAP COMPONENT
------------------------------------------------------------------------------------------------------------------



/*---------------------------------------------------------------------------------------
  Roadmap Component
  This component displays the roadmap section of the Jebat AI website.

  Purpose:
  - Provides a structured view of the project's development stages and milestones.

  Dependencies:
  - React: Frontend JavaScript library for building user interfaces.

  Design:
  - Utilizes Tailwind CSS for styling, ensuring responsiveness and visual consistency.
  - Organizes stages into a vertical list with detailed descriptions.

  Content:
  - Divided into multiple stages (Stage 1 to Stage 6) each with specific tasks and goals.
  - Highlights important milestones such as website launch, presale, marketing efforts,
    and exchange listings.

  Designed to inform users about the progress and future plans of Jebat AI, enhancing
  transparency and community engagement.

---------------------------------------------------------------------------------------*/



------------------------------------------------------------------------------------------------------------------
                                                TOKENOMICS COMPONENT
------------------------------------------------------------------------------------------------------------------


/*---------------------------------------------------------------------------------------
  Tokenomics Component
  This component displays information about the tokenomics of the Jebat AI project.

  Purpose:
  - Provides details about the token distribution and economic model of $JEBAT.

  Dependencies:
  - React: Frontend JavaScript library for building user interfaces.
  - Graph component: Displays a graphical representation of token allocation.

  Design:
  - Uses Tailwind CSS for styling, ensuring responsive and visually appealing layout.
  - Includes an image representation and textual description of tokenomics.

  Content:
  - Displays key information about $JEBAT token distribution:
    - Presale, Staking/Reward, Project Fund, Marketing, and Dex/Cex liquidity percentages.
  - Integrates an image for visual appeal and a graph component for visualizing token allocation.

  Designed to inform users about the token distribution strategy and economic principles 
  of $JEBAT, enhancing understanding and transparency for potential investors and users.

---------------------------------------------------------------------------------------*/



------------------------------------------------------------------------------------------------------------------
                                                REWARDS COMPONENT
------------------------------------------------------------------------------------------------------------------

/*---------------------------------------------------------------------------------------
  Reward Component
  This component represents the rewards calculator section of the Jebat AI website.

  Purpose:
  - Allows users to calculate the potential value of $JEBAT tokens based on amount and price.

  Dependencies:
  - React: Frontend JavaScript library for building user interfaces.

  State:
  - amount: Tracks the amount of $JEBAT tokens purchased.
  - price: Tracks the price of $JEBAT tokens.

  Design:
  - Utilizes Tailwind CSS for styling, ensuring responsiveness and visual appeal.
  - Includes a slider for interactive adjustment of token price.

  Functionality:
  - Calculates and displays the current value of $JEBAT tokens based on user inputs.
  - Provides descriptive text about $JEBAT and its potential benefits.
  - Offers a button to initiate token purchase.

  Designed to enhance user engagement and provide transparency on token value calculations
  for potential investors in Jebat AI.

---------------------------------------------------------------------------------------*/


------------------------------------------------------------------------------------------------------------------
                                                FOOTER COMPONENT
------------------------------------------------------------------------------------------------------------------


/*---------------------------------------------------------------------------------------
  Footer Component
  This component represents the footer section of the Jebat AI website.

  Structure:
  - Contains sections for logo, navigation links, legal links, and address.

  Dependencies:
  - React: Frontend JavaScript library for building user interfaces.
  - next/image: Component for optimizing images in Next.js applications.
  - '../assets/logo.png': Logo image imported for display.

  Design:
  - Uses Tailwind CSS for styling, including responsive design classes.

  Content:
  - Links to various sections such as ABOUT, ROADMAP, REWARDS, FAQ.
  - Legal links including PRIVACY POLICY, COOKIES, TERMS & CONDITIONS.
  - Address information of Jebat Trade Center in Panama.

  Footer text:
  - Includes copyright information for Jebat AI.

  Designed for clear navigation and legal information presentation in the footer area
  of Jebat AI website.

---------------------------------------------------------------------------------------*/
