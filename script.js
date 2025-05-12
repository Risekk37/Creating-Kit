// DOM Elements
const homeTab = document.getElementById('home-tab');
const projectTab = document.getElementById('project-tab');
const resumeTab = document.getElementById('resume-tab');
const homeView = document.getElementById('home-view');
const artworkView = document.getElementById('artwork-view');
const resumeView = document.getElementById('resume-view');
const projectDetailView = document.getElementById('project-detail-view');
const backToProjectsBtn = document.getElementById('back-to-projects');

// 프로젝트 데이터 - 실제 프로젝트 정보로 채워넣으세요
const projectsData = {
    project1: {
        category: "Computational Tool",
        year: "2025",
        title: "The Grocery Link",
        description: `
            <div class="project-detail-section">
                <h3>Overview</h3>
                <p>The Grocery Link analyzes food accessibility challenges in the United States through a novel framework that combines traditional "food desert" concepts with grocery delivery service coverage, creating a more comprehensive understanding of food access issues.</p>
                
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project1/main.jpg" alt="Food Accessibility Problem">
                    <figcaption>The Grocery Link</figcaption>
                </figure>
                </div>
                
                <h3>Multi-dimensional Food Access Issues</h3>
                <p>
                - Food Deserts: Approximately 25% of U.S. area lacks grocery stores selling fresh food within 1 mile in urban areas and 10 miles in rural areas, affecting 13% of the U.S. population.<br><br>
                - Delivery Service Gaps: Nearly half of U.S. area cannot access grocery delivery services, impacting 15% of the total population.<br><br>
                - Priority Access Areas: Identified two critical types of vulnerable regions:<br>
                   * Access Voids: Communities that are both food deserts and excluded from grocery delivery service areas<br>
                   * Vulnerable Zones: Urban food deserts overlapping with high poverty rates, where delivery costs create economic barriers<br>
                </p>
                
                <div class="project-image-full">
                <figure>
                    <img src="Project_img/project1/Food_Desert.png" alt="Food Desert Map">
                    <figcaption>Food deserts across the United States</figcaption>
                </figure>
                </div>
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project1/Delivery_Desert.png" alt="Delivery Gap Map">
                        <figcaption>Delivery service gaps across the United States</figcaption>
                    </figure>
                </div>
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project1/Priority_Food_Access_Areas.png" alt="Priority Food Access Areas">
                        <figcaption>Priority food access areas: Access Voids and Vulnerable Zones</figcaption>
                    </figure>
                </div>

                <h3>Food Access Mapping Tool</h3>
                <p>
                Developed an interactive web platform for data-driven decision support:<br><br>
                -Integrated multiple datasets including USDA Food Access Research Atlas, U.S. Census Bureau data, and delivery service coverage<br>
                -Provided educational storytelling section alongside detailed analytical tools<br>
                -Enabled exploration of regions through various filters based on population, poverty rates, and socioeconomic factors<br>
                </p>
                <div class="project-image-grid">
                <figure>
                    <img src="Project_img/project1/Access_Void.png" alt="Access Void Analysis">
                    <figcaption>Tool interface showing Access Void communities</figcaption>
                </figure>
                <figure>
                    <img src="Project_img/project1/Vulnerable_Zone.png" alt="Vulnerable Zone Analysis">
                    <figcaption>Tool interface showing Vulnerable Zone communities</figcaption>
                </figure>
                </div>
                <div class="project-image-full">
                <figure>
                    <img src="Project_img/project1/The_Gorcery_Link_Interactive.gif" alt="Interactive Tool Demo">
                    <figcaption>Interactive features of the Food Access Mapping Tool</figcaption>
                </figure>
                </div>

                <h3>Innovative Example: Group Delivery System</h3>
                <p>
                Developed a Chrome extension for group delivery to overcome economic barriers:<br><br>
                - Multiple households combine orders for a single delivery<br>
                - Creates benefits for consumers, grocery stores, and existing delivery customers<br>
                - User-friendly interface displays nearby delivery groups and enables participation<br>
                </p>
                 <div class="project-image-grid">
                <figure>
                    <img src="Project_img/project1/Chrome_Extension.png" alt="Chrome Extension Interface">
                    <figcaption>Group Delivery Chrome Extension</figcaption>
                </figure>
                <figure>
                    <img src="Project_img/project1/Group_delivery.png" alt="Group Delivery Example">
                    <figcaption>Example of group delivery options across multiple retailers</figcaption>
                </figure>
                </div>
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project1/Chrome_extension_Gif.gif" alt="Chrome Extension Demo">
                        <figcaption>View of the Group Delivery Chrome Extension</figcaption>
                    </figure>
                </div>

                <h3>Technology Stack</h3>
                <p>
                Data Analysis: Python, Pandas, GeoPandas, GIS, Google API<br>
                Web Development: JavaScript, React, Mapbox API<br>
                Chrome Extension: JavaScript, HTML/CSS, Chrome Extension API<br>
                Data Visualization: D3.js
                </p>

                <h3>Impact and Significance</h3>
                <p>
                This project provides a more comprehensive understanding of food accessibility and helps policymakers identify regions where limited resources can have maximum impact. By proposing innovative delivery-based solutions alongside traditional infrastructure-focused approaches, it offers potential for faster and more effective improvements in food accessibility.
                </p>

                <h3><a href="https://risekk37.github.io/The_Grocery_Link/" target="_blank" rel="noopener noreferrer">Visit Project Website</a></h3>
            </div>
        `
    },
    project2: {
        category: "Automated Fabrication",
        year: "2024",
        title: "Transformative Automation",
        description: `
            <div class="project-detail-section">
                <h3>Overview</h3>
                <p>Transformative Automation is a tool developed to advance infill structure design through robotic automation. It transforms a 3D grid, generated by applying diagonal undulation to a 2D grid, into executable scripts created in Grasshopper and Python, which are then adapted for use with robotic plug-ins for physical prototyping. For the creation of physical prototype models, Arduino was employed to bridge the script with the robotic arm. This setup includes supplementary design elements, such as an end-ef- fector equipped with a heating element (solenoid) and a motor-driven series of wheels to release wood veneer tape.</p>
                
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project2/main.jpg" alt="Food Accessibility Problem">
                    <figcaption>Transformative Automation</figcaption>
                </figure>
                </div>
                
                <h3>From grid to structural infill</h3>
                <p>
                TransformativeAutomation is a suite of .gh and .py scripts designed to generate a 3D grid framework from a 2D grid. This tool facilitates automation by integrating robotic plug-in languages, enabling the transformation of the 3D grid into precise point-to-point movements. It dynamically adapts to situational conditions for end-effector actions, including release (with wait time), stamp (with wait time), and directional adjustments, such as moving upward along the Z-axis for trajectory changes.
                </p><br>
                <p>Design Tool Highlights</p>
                <p>
                1. Input — Base Geometry X, Y Grid with Diagonal with Z directional Grids<br>
                2. Flexible and Light Frame Structural System<br>
                3. Automation to Enhance Scalability
                </p>
                
                <h3>Input Bounds</h3>
                <p>
                The dimensions of each modular unit in this structural system are defined in .gh as 12" x 12" x 3". The grid density is initially set at 2-inch increments, which can also be adjusted to 4-inch increments.
                </p>

                <div class="project-image-full">
                <figure>
                    <img src="Project_img/project2/2D_to_3D.jpg" alt="Food Desert Map">
                    <figcaption>input bounds x, y, z 12" by 12" by 3", diagram</figcaption>
                </figure>
                </div>

                <h3>Creating the logic</h3>
                <p>
                Algorithm Development<br>
                The .gh and .py scripts generate integral and proportional algorithms for X, Y, Z directional grid creation. This 3D grid structure is composed of squares and diagonal curves, multiplying into clusters for modularity and scalability.
                <br><br>
                Robotic Integration<br>
                The .gh plug-in for robots takes the polylines generated by the initial algorithm and translates them into a series of calculated movement points. Simulating the robotic arm’s movement, the system accommodates travel from one point to the next, incorporating additional actions such as waiting or adjusting vertically along the Z-axis.
                <br><br>
                Physical Prototyping<br>
                Physical prototyping employs tools such as Arduino kits to interface with the robotic system. These kits include a solenoid paired with a heating element for controlled pressing actions and a motor-driven wheel assembly for dispensing wood veneer tape. Once the .gh and .py scripts are translated into the .gh plug-in for robots, the Arduino kits are integrated to complete the end-effector system. The Arduino kits connect to the digital outputs of the robotic arm, enabling real-time communication and execution of commands for the end effectors.
                </p>

                <div class="project-image-full">
                <figure>
                    <img src="Project_img/project2/Logic.jpg" alt="Access Void Analysis">
                    <figcaption>process diagram for TransformativeAutomation Tool</figcaption>
                </figure>
                </div>

                <h3>Logic 1</h3>
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project2/Robot_Arm_GIF.gif" alt="Chrome Extension Demo">
                        <figcaption>simulation of .gh+.py process generating 3d grid from 2d grid</figcaption>
                    </figure>
                </div>

                <h3>Logic 2</h3>
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project2/Grid_GIF.gif" alt="Chrome Extension Demo">
                        <figcaption>simulation of .gh plug-in .robots process calibrating robotic arm movement for prototype automation</figcaption>
                    </figure>
                </div>
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project2/Gh_code.gif" alt="Chrome Extension Demo">
                        <figcaption>.Gh Coding</figcaption>
                    </figure>
                </div>

                <h3>Lgic 3</h3>
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project2/Robotic_connection_Diagram.png" alt="Chrome Extension Demo">
                        <figcaption>Physical modeling process diagram from input (script into robotic arm) to outputs (solenoid + end effector)</figcaption>
                    </figure>
                </div>

                <h3>End-effector Design</h3>
                <p>
                Material feed mechanism<br>
                A series of wheels with a motor controls the wood veneer tape, enabling it to move forward or stop as needed.
                <br><br>
                Heating and pressing system<br>
                A solenoid attached to a heating element performs a timed pressing action to heat the wood veneer tape at specified X, Y, Z nodes.
                <br><br>
                Design and prototyping process<br>
                PAll components were initially sketched by hand, then scaled and modeled in Rhino, followed by 3D printing as prototypes.
                </p>
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project2/Endeffector-ANI.gif" alt="Chrome Extension Demo">
                        <figcaption>End effector houses motor to turn and release the wood veneer tape and solenoid and the heating element.</figcaption>
                    </figure>
                </div>
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project2/DI-EndEffector.png" alt="Chrome Extension Demo">
                        <figcaption>End effector attaches to the robotic arm.</figcaption>
                    </figure>
                </div>

                <h3>End-effector Design</h3>
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project2/Robot_video.gif" alt="Chrome Extension Demo">
                        <figcaption>Video displays the automation in action.</figcaption>
                    </figure>
                </div>

                <h3>Prototype Model</h3>
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project2/DI-BuiltForm.png" alt="Chrome Extension Demo">
                        <figcaption>Physical model created using 3/4-inch wood veneer tape. </figcaption>
                    </figure>
                </div>
                
            </div>
        `
    },
    project3: {
        category: "Architectural Design, AI research",
        year: "2023",
        title: "Liminal Urbanism",
        description: `
            <div class="project-detail-section">
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project3/main.png" alt="Food Accessibility Problem">
                    </figure>
                </div>
                
                <h3>Overview</h3>
                <p>
                The shortage of public spaces in Seoul has been a persistent issue due to urban overcrowding. South Korea's capital, Seoul, has various natural landscapes such as the Han River, Gwanak moun- tain, and many public spaces like Gwanghwamun Square and Seoul Forest. However, compared to the high population, the public space is insufficient. As public spaces hold significant connection to the lives of urban residents, that should be formed and utilized in a closer relationship with the daily lives. Nevertheless, due to the high land values and real estate prices within Seoul, creating and offering public spaces has become a task requiring considerable financial investment. These factors have contributed to an imbalance in public spaces due to poor residential conditions and the dense population within downtown Seoul.
                <br>In this regard, focusing on the characteristics of contemporary spaces, I propose a solution through the integration of two types of spaces. Presently, activities considered "public" don't solely occur within designated public spaces, and conversely, the same applies. At cafes, for example, people pay for a cup of coffee and utilize private commercial spaces, yet they use these spaces much like they would public ones. Furthermore, temporary shops emerge in parks, squares, and other public spaces for various activities and facilitating private use. These composed activities don't hinder the space but rather infuse it with vitality, creating a synergistic effect that transcends the distinction between public and private activities.
                <br>By analyzing the public and commercial spaces, integrate the form and layout of public spaces with commercial areas. This integration involves a grid network established based on an analysis of public spaces, residential populations, and commercial vacancy rates in Seoul. Utilizing existing commercial spaces through this mixture, the network of relations is formed with neighboring resi- dential areas, emphasizing connectivity rather than isolated distribution of public spaces.
                </p>
                
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project3/1.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project3/2.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project3/3.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project3/4.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project3/5.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>

                <h3>Technology Stack</h3>
                <p>
                AI Analysis: 3D GAN AI(Made by Python)<br>
                Data Analysis: Python, Pandas, GeoPandas, GIS, Google API<br>
                Vsiualization: Phtoshop, Illustrator
                </p>
                
                
                
            </div>
        `
    },
    project4: {
        category: "Website, Data Analysis",
        year: "2021",
        title: "Cities of Bail",
        description: `
            <div class="project-detail-section">
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project4/main.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>
                
                <h3>Overview</h3>
                <p>
               Cities of Bail visualizes how urban county residents in the U.S. mortgage their homes to secure bail bonds for themselves or loved ones. The project maps six diverse cities from 2000 to the present, showing where bail liens were created, satisfied, or foreclosed. Approximately 60-75% of those in local jails are unconvicted defendants awaiting trial, often detained because they cannot afford bail. Secured money bail systems remain widespread, with commercial bail bond companies requiring nonrefundable premiums and collateral like home mortgages.
                <br>Every year, the bail industry issues $14 billion in bonds and collects $2 billion in profits. While providing an alternative to pretrial detention, this system can entrap families in debt, leading to lost income, child custody, and even homes. Even without foreclosure, bail-related mortgages can harm credit and block access to financial opportunities for years.
                <br>Users can explore any of the six cities from the landing page to understand why they were included and what they reveal about the commercial bail industry. Map overlays provide demographic data and other contextual details, while a Stories tab offers guided narratives. Data is sourced from public records, but individual details are often locked behind paywalls and fragmented systems. To protect privacy, personal information is anonymized, but researchers can request access to de-anonymized data by contacting the project director.
                </p>
                
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project4/2.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project4/3.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project4/4.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>
                
                <h3>Technology Stack</h3>
                <p>
                Data Analysis: GIS <br>
                Vsiualization: Zavascript, D3
                </p>
                
                
                
            </div>
        `
    },
    project5: {
        category: "Research Paper",
        year: "2022",
        title: "Autonomous Vehicles on Urban spatial",
        description: `
            <div class="project-detail-section">
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project5/main.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>
                
                <h3>Overview</h3>
                <p>
                The changes in travel opportunity cost due to the spread of autonomous vehicles are expected to reduce the burden of long-distance travel and affect preferred residential areas of urban households. This study aims to predict the impact of the spread of autonomous vehicles on urban spatial structures, focusing on the distribution of hosing prices in the Seoul met- ropolitan area as it relates to the changes in travel opportunity cost.
                <br>The current housing price and travel opportunity cost were an- alyzed through a hedonic price model, and the future housing prices of different scenarios considering the changes in travel opportunity cost were predicted and compared. 
                <br>The scenarios were constructed based on prior research regard- ing changes in travel time, both increases and decreases, as well as changes in travel time value and fuel savings resulting from the fleet size of autonomous vehicles. Travel time changes were categorized into three stages: 20%, 60%, and 100% adoption rates, while changes in travel time value and fuel savings were set at two levels each, from the minimum to the maximum. Based on these factors, four potential scenarios for the future were estimated to determine housing prices in the metropolitan area.
                <br>Compared to the present, the relative housing price distribution or relative price index (RPI) decreased, the distribution of the median range of housing prices shifted from downtown Seoul to the adjacent Gyeonggi region.
                <br>The results of this study suggest that the reduction in travel op- portunity cost due to the spread of autonomous vehicles may allow urban households to prefer areas other than the city cen- ter as residential areas and mitigate the housing price gap in the Seoul Metropolitan Area.
                </p>
                
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project5/1.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project5/2.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>
                
                <h3>Technology Stack</h3>
                <p>
                Data Analysis: Python, Gis, Scrapping, Hedonic Price Model<br>
                Vsiualization: Phtoshop, Illustrator
                </p>
                
                
                
            </div>
        `
    },
    project6: {
        category: "Architectural Design, Data Analysis",
        year: "2021",
        title: "Ignite Behavior",
        description: `
            <div class="project-detail-section">
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project6/main.png" alt="Food Accessibility Problem">
                    </figure>
                </div>
                
                <h3>Overview</h3>
                <p>
                A city is not only a space where buildings exist, but also place where people lead their lives together. There are a variety of things that occur in these cities, and we think these actions gather to make the city more colorful and vibrant. Among them, the project was started with focusing on borrowing the city space as privately used space as needed. These urban space borrowing activities, which are common in South Korean cities, appear with a variety of objects, and these activities make unexpected events in the grid-organized urban system. It also focused on the rooftop structure commonly found in South Korean cities. It is common for Korean houses that built flat roofs for the installation of water tanks to use the space in the residential style of rooftop, and this is illegal under the Building Act,  but we focused on it as something that happens openly.
                </p>
                
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project6/1.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project6/2.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project6/3.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project6/4.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>
                
                <h3>Technology Stack</h3>
                <p>
                Data Analysis: Python, Pandas, YOLO Algorithm<br>
                Vsiualization: Phtoshop, Illustrator, Rhino 3D, Ghrasshopper
                </p>
                
                
                
            </div>
        `
    },
    project7: {
        category: "Architectural Design, Data Analysis",
        year: "2021",
        title: "Urban Stereoscopic Expansion",
        description: `
            <div class="project-detail-section">
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project7/main.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>
                
                <h3>Overview</h3>
                <p>
                In city, there are various urban elements such as housing, commerce, leisure, nature and so on. There were phenomena that elements spread or shrink, bump, stray, merge into one as needed. Even around the site, Seoul, South Korea, when the residential area is located in front of the park or educational facilities, the elements spread through each other.
                <br>Spaces that spread and overlap in this way can also give rise to new characteristics. The convergence of residential and commercial areas can sometimes form small-scale commercial zones, and the merging of na- ture and habitation can lead to the creation of low-altitude, low-density structures that make it easier to access nature.
                <br>The analysis was initially conducted through QGIS, where each urban element area is formed according to the designated zones set by local authorities. However, due to a certain degree of flexibility within the established framework, these areas are relatively loosely configured. The formation of these areas was redefined by applying weights based on the characteristics of the fluctuating population and influence, resulting in a new area map. Through this process, the emergence of new spaces be- tween each area was identified.
                <br>The project started with "What if urban elements meet in three dimen- sions, not just in a plane?" In vertical city, urban elements have starting point that are inflated by their own forces, meeting and crushing in various directions to create areas. The changes brought about by these numerous directions of transformation can create more points of contact between various spaces, increasing opportunities for the emergence of new character spaces among them.
                </p>
                
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project7/1.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project7/2.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>
                
                <h3>Technology Stack</h3>
                <p>
                Data Analysis: Python, Gis, Cartogram<br>
                Vsiualization: Phtoshop, Illustrator, Rhino 3D, Ghrasshopper
                </p>
                
                
                
            </div>
        `
    },
    project8: {
        category: "Pavilion, Architectural Design",
        year: "2021",
        title: "SUM",
        description: `
            <div class="project-detail-section">
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project8/main.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>
                
                <h3>Overview</h3>
                <p>
                In daily lives, there are disasters that change our daily lives big and small. Among them, fine dust that has permeated our daily lives and has become familiar can be the most fatal disaster. Fine dust is characterized by inability to respond actively except for masks, and these points have made us stand by and watch fine dust even though they cause serious damage to people. 
                <br>In South Korea, ultra-fine dust warnings have increased 2.4 times year-on-year, and long-term exposure of fine dust can lead to respiratory and various diseases. However, un- like other disasters, fine dust becomes common and makes us stand by because it is difficult for us to respond directly. Therefore, most people have already become accustomed to disasters and do not try to respond actively. By setting these people as the main users of Pavilion, we would like to encourage them to recognize the reduction of fine dust through participation in Pavilion and to recognize that fine dust is no longer an unresponsive disaster.
                <br>In this situation, we are considering ways to reduce fine dust by utilizing the adsorption of water through rain re- ducing fine dust. 
                </p>
                
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project8/1.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project8/2.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project8/3.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project8/4.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>

                
                
            </div>
        `
    },
    project9: {
        category: "Architectural Design, AI Research",
        year: "2022",
        title: "Elemental Sabotage",
        description: `
            <div class="project-detail-section">
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project9/main.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>
                
                <h3>Overview</h3>
                <p>
                The traditional architectural style of Korea possesses a distinctively East Asian aesthetic. Based on these synchronic and conceptual understandings of architecture, aim to explore a design method that utilizes the latest technologies to create a culture-specific design. Various archi- tectural elements used in Korea throughout different eras were first divided according to their functions. Elements in each function category merged and gave birth to new elements that in- corporate the Korean understanding of functional morphologies.
                <br>Start with discussion about the concept and the elements of Korean Architecture. Analyzing the organization, composition & decomposition, and the logic of different precedents is done. We want to make a testbed to observe numerous applications of different compositional logics to existing examples beyond the original composition of architecture.
                <br>Finally we play with the possibilities of re-composed elements and develop the design from 3 different elemental morphology compositions with own scenarios.
                </p>
                
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project9/1.png" alt="Food Accessibility Problem">
                    </figure>
                </div>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project9/2.jpg" alt="Food Accessibility Problem">
                    </figure>
                </div>
            </div>
        `
    },
    
};

// Function to reset all tabs and views
function resetAll() {
    // Remove active class from all tabs
    projectTab.classList.remove('active');
    resumeTab.classList.remove('active');
    
    // Hide all views
    homeView.classList.remove('active-view');
    artworkView.classList.remove('active-view');
    resumeView.classList.remove('active-view');
    projectDetailView.classList.add('hidden');
}

// 프로젝트 상세 페이지 표시 함수
function showProjectDetail(projectId) {
    // 프로젝트 데이터 가져오기
    const project = projectsData[projectId];
    
    if (!project) {
        console.error('Project not found:', projectId);
        return;
    }
    
    // 상세 페이지 요소 가져오기
    const detailCategory = projectDetailView.querySelector('.project-detail-category');
    const detailYear = projectDetailView.querySelector('.project-detail-year');
    const detailTitle = projectDetailView.querySelector('.project-detail-title');
    const detailContent = projectDetailView.querySelector('.project-detail-content');
    
    // 프로젝트 정보로 상세 페이지 채우기
    detailCategory.textContent = project.category;
    detailYear.textContent = project.year;
    detailTitle.textContent = project.title;
    detailContent.innerHTML = project.description;
    
    // 모든 뷰 숨기기
    homeView.classList.remove('active-view');
    artworkView.classList.remove('active-view');
    resumeView.classList.remove('active-view');
    
    // 상세 페이지 표시
    projectDetailView.classList.remove('hidden');
    
    // 브라우저 히스토리에 상태 추가
    window.history.pushState({view: 'project', projectId: projectId}, '', '#project/' + projectId);
}

// Home tab (logo) click event
homeTab.addEventListener('click', function() {
    resetAll();
    homeView.classList.add('active-view');
    
    // 브라우저 히스토리 상태 업데이트
    window.history.pushState({view: 'home'}, '', '#home');
});

// Project tab click event
projectTab.addEventListener('click', function() {
    resetAll();
    projectTab.classList.add('active');
    artworkView.classList.add('active-view');
    
    // 브라우저 히스토리 상태 업데이트
    window.history.pushState({view: 'projects'}, '', '#projects');
});

// Resume tab click event
resumeTab.addEventListener('click', function() {
    resetAll();
    resumeTab.classList.add('active');
    resumeView.classList.add('active-view');
    
    // 브라우저 히스토리 상태 업데이트
    window.history.pushState({view: 'resume'}, '', '#resume');
});

// 프로젝트 아이템 클릭 이벤트 (Read More 버튼)
document.querySelectorAll('.project-read-more').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation(); // 이벤트 버블링 방지
        
        // 부모 프로젝트 아이템의 ID 가져오기
        const projectItem = this.closest('.project-item');
        const projectId = projectItem.dataset.projectId;
        
        // 프로젝트 상세 페이지 표시
        showProjectDetail(projectId);
    });
});

// 프로젝트 이미지 클릭 이벤트
document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', function() {
        const projectId = this.dataset.projectId;
        showProjectDetail(projectId);
    });
});

// 홈 뷰에서의 Read More 버튼 처리 부분을 다음과 같이 수정
document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 프로젝트 카드에서 data-project-id 속성 값 가져오기
        const projectCard = this.closest('.project-card');
        const projectId = projectCard.dataset.projectId;
        
        console.log('Read More clicked for project:', projectId); // 디버깅 로그
        
        // 프로젝트 ID가 유효한 경우에만 상세 페이지로 이동
        if (projectId) {
            // 먼저 브라우저 히스토리 상태 업데이트 (순서 중요)
            window.history.pushState({view: 'home'}, '', '#home');
            window.history.pushState({view: 'project', projectId: projectId}, '', '#project/' + projectId);
            
            // 그 다음 프로젝트 탭으로 이동하고 해당 프로젝트 상세 페이지 표시
            resetAll();
            projectTab.classList.add('active');
            showProjectDetail(projectId);
        } else {
            console.error('Project ID not found for this card');
        }
    });
});

// 뒤로 가기 버튼 클릭 이벤트
backToProjectsBtn.addEventListener('click', function() {
    projectDetailView.classList.add('hidden');
    projectTab.classList.add('active');
    artworkView.classList.add('active-view');
    
    // 브라우저 히스토리에서 이전 상태로 이동하지 않고, 직접 프로젝트 목록 상태로 이동
    window.history.pushState({view: 'projects'}, '', '#projects');
});


// 브라우저 뒤로가기/앞으로가기 이벤트 처리 - 완전히 새로 작성
window.addEventListener('popstate', function(event) {
    console.log('popstate event:', event.state);
    
    // 이전 상태가 없는 경우 (초기 상태)
    if (!event.state) {
        resetAll();
        homeView.classList.add('active-view');
        return;
    }
    
    // 상태에 따라 적절한 뷰 표시
    resetAll();
    
    if (event.state.view === 'project') {
        // 프로젝트 상세 페이지로 이동
        projectTab.classList.add('active');
        showProjectDetail(event.state.projectId);
        
    } else if (event.state.view === 'projects') {
        // 프로젝트 목록 페이지로 이동
        projectTab.classList.add('active');
        artworkView.classList.add('active-view');
        
    } else if (event.state.view === 'home') {
        // 홈 페이지로 이동
        homeView.classList.add('active-view');
        
    } else if (event.state.view === 'resume') {
        // 이력서 페이지로 이동
        resumeTab.classList.add('active');
        resumeView.classList.add('active-view');
    }
});

// 페이지 로드 시 초기 히스토리 상태 설정 - 수정
document.addEventListener('DOMContentLoaded', function() {
    // 먼저 모든 로그 확인용 코드 실행
    console.log('DOM Content Loaded');
    
    // 프로젝트 카드의 dataset 확인
    document.querySelectorAll('.project-card').forEach((card, index) => {
        console.log(`Project card ${index + 1}, ID:`, card.dataset.projectId);
    });
    
    // 초기 상태 설정
    resetAll();
    homeView.classList.add('active-view');
    
    // URL 해시에 따라 적절한 뷰 표시
    const hash = window.location.hash;
    
    if (hash.startsWith('#project/')) {
        const projectId = hash.replace('#project/', '');
        resetAll();
        projectTab.classList.add('active');
        showProjectDetail(projectId);
        
    } else if (hash === '#projects') {
        resetAll();
        projectTab.classList.add('active');
        artworkView.classList.add('active-view');
        
    } else if (hash === '#resume') {
        resetAll();
        resumeTab.classList.add('active');
        resumeView.classList.add('active-view');
        
    } else {
        // 다른 경우 홈 페이지로 설정
        resetAll();
        homeView.classList.add('active-view');
        // 초기 히스토리 상태 설정
        window.history.replaceState({view: 'home'}, '', '#home');
    }
});