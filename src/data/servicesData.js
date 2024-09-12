// Dynamic service data with alternating content sections
import Image from "next/image";

const services = {
  "3-waters": {
    title: "3 Waters & Contamination",
    description:
      "Climate change is taking a toll on New Zealand’s aging three water infrastructure. There is now a vital need to renew and rebuild these systems to ensure that they continue to meet performance standards. Our mission at GDC Consultants is to provide sustainable, effective, and value-added engineering solutions for your 3 Waters project. We pride ourselves on being both experts in technical design guidance and pioneers of innovative solutions in the industry.​",
    image: "/images/services/waters-engineering-and-contamination.webp",
    sections: [
      {
        id: 1,
        title: "Contamination Assessments",
        description:
          "Site contamination can have a major impact on human health and the environment, as well as serious economic and legal consequences for landowners. We offer a pragmatic and tailored approach to get effective results and minimize harm. We can assist our clients with a full spectrum of contaminated land analysis services, including:",
        points: [
          "Site investigation",
          "Contaminated land auditing",
          "Groundwater analysis",
          "Site remedial planning and contracting",
          "Ecological risk and human health and safety services",
          "Due diligence and contamination liability cost assessment",
          "Property portfolio risk analysis.",
        ],
        image: "/images/services/Environmental Engineering.webp",
      },
      {
        id: 2,
        title: "Our Other Services Include",
        description:
          "We provide a wide range of additional services to support various aspects of water management and contamination solutions. Our expertise extends to:",
        points: [
          "Hydraulic modelling",
          "Feasibility studies",
          "Flood impact assessment",
          "Erosion, sediment, and dust management",
          "Construction supervision",
          "Environmental effect analysis",
          "Resource consent application",
          "Soakage survey and analysis",
          "Water infrastructure design",
          "Optimization and cost analysis",
          "Stormwater treatment device design",
          "Erosion protection design",
          "Regeneration of waterways.",
        ],
        image: "/images/services/8.-Contamination-Assessment.webp",
      },
    ],
    uniqueContent: (
      <div className="mt-10 px-4 md:px-6 lg:px-15">
        {/* First Unique Section */}
        <div
          className="relative w-full h-64 md:h-72 flex items-center justify-center bg-cover bg-center shadow-md rounded-md mb-6 md:mb-10 animate-slide-up transition-all duration-700 ease-in-out"
          style={{ backgroundImage: `url('/images/services/image-50.webp')` }}
        >
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
          <div className="relative z-10 text-center text-white p-4 md:p-6 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
              Stormwater Modelling and On-Site Carpark Stormwater Design for
              Claudelands Arena
            </h2>
            <p className="text-sm md:text-base mb-4 md:mb-6">
              GDC Consultants are experts in delivering quality services. We
              have access to the right resources in all contaminated land
              disciplines including soil science, hydrogeology, geotechnical,
              toxicology, risk analysis, and remedial technologies.
            </p>
          </div>
        </div>

        {/* Animated Cards Section */}
        <div className="mt-8 md:mt-10 px-4 md:px-6 lg:px-10">
          <h1 className="text-2xl md:text-4xl text-customBlue font-bold text-center mb-6 md:mb-8 animate-fade-in-up">
            3 Waters Engineering
          </h1>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            {[
              {
                title: "Storm Water",
                description:
                  "GDC Consultants can help with technical design plans, strategy development, cohesive catchment planning, and fit-for-purpose design solutions.",
                image: "/images/services/storm-water.jpg",
              },
              {
                title: "Waste Water",
                description:
                  "We are experts in wastewater network performance analysis. We can assist in choosing an affordable containment option and help identify the most cost-effective combination for improvement works.",
                image: "/images/services/waste-water.jpg",
              },
              {
                title: "Water Supply",
                description:
                  "We provide a wide variety of professional services for onsite water supply systems, including surface and groundwater supplies.",
                image: "/images/services/water-supply.png",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="group relative w-full md:w-80 rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105 animate-scale-up duration-500 ease-in-out"
              >
                {/* Image Section */}
                <div className="relative w-full h-48 md:h-96 animate-zoom-in transition-opacity duration-700 ease-in-out">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={320}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                  {/* Dark Overlay for Better Text Visibility */}
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-white z-10 animate-fade-in">
                  <h3 className="text-lg md:text-2xl text-center font-bold mb-2">
                    {card.title}
                  </h3>
                  {/* Description hidden on smaller screens */}
                  <p className="hidden md:block text-sm md:text-base text-center">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  "architectural-designs": {
    title: "Architectural Designs",
    description:
      "GDC Consultants excel in delivering high-end, sustainable architecture solutions tailored to complex design requirements. Their services include concept design, construction documentation, project management, and site feasibility studies.",
    image: "/images/services/architectural-designs-gdc-consultants.webp",
    sections: [
      {
        id: 1,
        title: "Pursuit of Architectural Excellence",
        description:
          "We are experts in developing comprehensive and sustainable architecture solutions. Equipped with a deep understanding of New Zealand’s local intricacies, expertise, and experience, we plan and design high-end architecture while providing long-lasting, sustainable, and impactful solutions to unique and complex design requirements. The architectural services that GDC Consultants typically provide include concept design and development, preparation of construction documents, and construction administration. We also provide additional services such as architectural programming, project management, and site feasibility checks.",
        image: "/images/services/architectural.webp",
      },
      {
        id: 2,
        title: "Structural Plan and Design",
        description:
          "The substructure of your building project needs to be well-designed before the construction phase of its superstructure. During the schematic design phase, our experts make drawings and plans related to the foundation sections, floor plans of slabs, structural beams, slab reinforcement, doors, windows, and lintel, and other custom structural needs as per the requirements of the individual project.",
        image: "/images/services/building-foundations.webp",
      },
      {
        id: 3,
        title: "MEP Engineering",
        description:
          "We can design safe and functional MEP drawings that perfectly cater to your requirements timeline. Our services include master designs of HVAC, electrical, plumbing, sewage, and other systems.",
        image: "/images/services/plan_design_full.webp",
      },
      {
        id: 4,
        title: "Interior Plans",
        description:
          "We design safe and functional MEP drawings that perfectly cater to your requirements timeline. Our services include master designs of HVAC, electrical, plumbing, sewage, and other systems.",
        image: "/images/services/image-25.webp",
      },
      {
        id: 5,
        title: "3D Modelling",
        description:
          "We use state-of-the-art techniques to provide our clients with a comprehensive 3D model of their building before construction starts. This ensures that clients are completely satisfied with the designs before they are implemented, and helps in saving a significant amount of time, energy, and cost that might have been wasted correcting designs during construction.",
        image: "/images/services/Vertex_BD_005.webp",
      },
    ],
    uniqueContent: (
      <div className="mt-10 px-6 lg:px-15">
        {/* First Unique Section */}
        <div
          className="relative w-full h-72 flex items-center justify-center bg-cover bg-center shadow-md rounded-md animate-fade-in-up transition-all duration-700 ease-in-out"
          style={{
            backgroundImage: `url('/images/services/mmexport1567995357055.webp')`,
          }}
        >
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black opacity-60 rounded-md"></div>
          <div className="relative z-10 text-center text-white p-6 animate-slide-up">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in">
              Landscaping
            </h2>
            <p className="mb-6 animate-fade-in">
              We take pride in creating beautiful surroundings for your property
              that meet your every need and want. We have a wide range of
              designs for backyard, patio, and paving options. We are also happy
              to meet any of our custom requirements.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  "electrical-engineering": {
    title: "Electrical Engineering",
    description: "",
    image: "/images/services/electrical.webp",
    sections: [
      {
        id: 1,
        title:
          "GDC Consultants : New Zealand’s Top Electrical Engineering Specialists",
        description:
          "GDC Consultants are industry leaders in electrical engineering. Our clients know us for providing high-quality designs, innovative electrical engineering solutions, and comprehensive control systems. Our extensive experience in the industrial engineering sector enables us to execute projects with a high level of professionalism, attention to detail, and integrity.",
        image: "/images/services/electrical.webp",
      },
      {
        id: 2,
        title:
          "Hire GDC Consultants for the Conceptual Framework & Electrical Setup for your Project",
        description:
          "Our electrical engineering solutions will provide the best answers to your problems.",
        points: [
          "We look beyond the problem to the causes – the why behind the what",
          "We evaluate multiple possible solutions and cater our final selection to the exact needs of the project",
          "We are able to design, plan, execute, and implement the entire project",
          "We make sure to provide an upfront and reasonable estimate of the total cost of all entailed project work",
        ],
        image: "/images/services/electrical.webp",
      },
    ],
    uniqueContent: (
      <div className="mt-10">
        {/* Image section with flex layout for left text and right cards */}
        <div
          className="relative w-full h-96 flex items-center justify-center bg-cover bg-center shadow-md rounded-md"
          style={{ backgroundImage: `url('/images/services/structural.webp')` }}
        >
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black opacity-60 rounded-md"></div>

          {/* Flex container to position left text and right cards */}
          <div className="relative z-10 flex w-full h-full p-6">
            {/* Left Side: Text Content */}
            <div className="flex flex-col justify-center w-1/2 text-white pr-4">
              <h2 className="text-3xl font-bold mb-4">
                Electrical Engineering Services by GDC Consultants
              </h2>
              <p className="mb-4">
                We take pride in creating beautiful surroundings for your
                property that meet your every need and want. We have a wide
                range of designs for backyard, patio, and paving options. We are
                also happy to meet any of our custom requirements.
              </p>
            </div>

            {/* Right Side: Cards */}
            <div className="w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto max-h-80 scrollbar-hide scrollable-section">
              {[
                {
                  title: "Switchboard Design and Renovation",
                  description:
                    "We can plan and implement new switchboards or make modifications to existing systems.",
                },
                {
                  title: "Technical Equipment Specifications",
                  description:
                    "We provide technical equipment specifications for a wide range of electrical systems including transformers, switchgear, and other supplementary equipment.",
                },
                {
                  title: "Hardware Design and Control Systems",
                  description:
                    "We are experts in providing innovative and modern control systems. An updated system can optimize your process, protect your hardware, and reduce labour costs.",
                },
                {
                  title: "Industrial Lighting Designs and Models",
                  description:
                    "Lighting design is essential to the visibility and safety of any industrial property. We design a comprehensive installation specification document for each individual project.",
                },
                {
                  title: "Earthing",
                  description:
                    "Earthing is crucial to ensure the safety of any electrical system. At GDC Consultants, we always ensure proper grounding, to make sure that people and equipment are appropriately protected during fault issues.",
                },
                {
                  title: "Machine Safety Systems",
                  description:
                    "We can design and implement a range of safety techniques, including guarding and mechanical barriers, to eliminate any hazards from your future industrial worksite.",
                },
                {
                  title: "Electrical Assessment and Failure Investigation",
                  description:
                    "Understanding the current condition of the infrastructure is essential to ensuring the future safety and consistent power supply of your project. We perform a comprehensive assessment of preexisting infrastructure and investigate, identify, and solve any existing failures.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-70 rounded-lg shadow-lg p-4 flex flex-col items-start transition-transform transform hover:scale-105"
                >
                  <h3 className="text-xl text-customBlue font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-customBlue">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },

  "project-management": {
    title: "Project & Construction Management",
    description: "​",
    image: "/images/services/Project & Construction Management.webp",
    sections: [
      {
        id: 1,
        title: "Thinking of starting a new project?",
        description:
          "We are able to manage your project from start to finish – all according to your exact requirements.\nGDC are specialists in planning and design, quality control, contractor management, and government approvals.\nWe are active in a variety of sectors that include housing, infrastructure, commercial, healthcare, education, and corporate.",
        image: "/images/services/Project & Construction Management.webp",
      },
      {
        id: 2,
        title: "Project Management",
        description:
          "As a project manager operating on our client’s behalf, we aim to manage the project timeline with consistent and complete quality, achieving or exceeding all financial goals. We strive to keep every stakeholder on-board through regular project reports. \nFrom developing integrated plans for logistics, to managing budget and expenditure, to coordination of schedules and resources –our team utilizes their expertise to achieve outstanding results. Some of our key project management services include;",
        points: [
          "Preconstruction/Design",
          "Scope definition",
          "Communications protocols",
          "Master schedule development",
          "Site selection assistance",
          "Architecture consultancy",
          "Cost estimate and value analysis",
          "Procedure and logistic assessment",
        ],
        image: "/images/services/Project & Construction Management.webp",
      },
      {
        id: 3,
        title: "Construction Management",
        description:
          "GDC Consultants provide a range of construction consultancy and management services for a variety of projects. From roadways and buildings, to utility lines and restorations –our construction managers, engineers, and inspectors are able to deliver projects well within estimated timeframes and budgets. \nOur construction management services include;",
        points: [
          "Program management",
          "Construction management",
          "Engineering and inspection",
          "Quality control",
          "A/E selection",
          "Cost estimation and bid management",
          "Construction scheduling",
          "Dispute resolution and claims mitigation",
          "Constructability assessment",
          "Contractor services",
          "Asset management",
        ],
        image: "/images/services/Project & Construction Management.webp",
      },
    ],
  },

  "geotechnical-engineering": {
    title: "Geotechnical Engineering",
    description: "​",
    image: "/images/services/geotechnical.webp",
    sections: [
      {
        id: 1,
        title: "We Specialise in Geotechnical Engineering & Reporting",
        description:
          "We strive to design safe and effective retention systems and foundations, employing our extensive expertise and experience and a pragmatic approach. From investigation, to reporting, to designing and implementing solutions, we provide industry-leading geotechnical services within New Zealand.",
        image: "/images/services/geotechnical.webp",
      },
      {
        id: 2,
        title: "Geotechnical Engineering",
        description:
          "Geotechnical inspections, site observations, and testing are an essential requirement from council before embarking on many kinds of project. They are undertaken during the construction phase by specialist geotechnical engineers. It is always important to confirm that the ground conditions are appropriate for the kind of development you are proposing, and that it is possible to build adequate foundations in the area. \nThe following are some of the services we offer:",
        points: [
          "Inspection of building platform subgrade",
          "Pad foundation/shallow strip excavation inspection",
          "Bored pipe hole assessment",
          "Earthworks monitoring and inspection",
          "Hard-fill density observation and floor slabs underneath testing",
          "CBR testing of road, pavement, access way etc.",
          "Slope stability assessment",
          "Excavation support system design",
          "Seepage analysis of water retaining structures",
          "Dynamic design parameters analysis for foundations",
          "Remediation of problematic soil conditions",
          "Site improvement systems design",
          "Pile load test analysis",
        ],
        image: "/images/services/geotechnical.webp",
      },
      {
        id: 3,
        title: "Geotechnical Engineering",
        description:
          "A Geotechnical or Soil report is a mandatory requirement for building development as a part of Building Consent Process.Commissioning a Geotechnical Investigation Report minimizes the risk of future foundation issues or stability concerns. This report also provides the information required by architects and structural engineers to continue to the design process. \nExamples of some types of projects which usually require a geotechnical report include:",
        points: [
          "Residential and Commercial (remedial works, addition and renovation, alteration, multi-story buildings, new projects)",
          "Land Development",
          "Large, medium and small scale subdivision",
          "Infrastructure and Public works (pipelines, pavements, roads)",
        ],
        image: "/images/services/geotechnical.webp",
      },
    ],
  },

  infrastructure: {
    title: "Infrastructure & Subdivision Engineerin",
    description: "",
    image: "/images/services/Infrastructure & Subdivision Engineering.webp",
    sections: [
      {
        id: 1,
        title: "Our Vision of Creating Liveable Communities",
        description:
          "GDC Consultants provide a wide range of infrastructure and subdivision engineering services, with a focus on land development and municipal infrastructure. \nWe offer a complete consultancy package, including feasibility checks, planning, design approvals, and construction. Throughout the entire process, we remain focused on project quality, performance, efficiency, and client satisfaction.",
        image: "/images/services/Infrastructure & Subdivision Engineering.webp",
      },
      {
        id: 2,
        title: "Master Infrastructure Planning Support",
        description:
          "Being a team of expert urban planners, environmental specialists, architects, and civil engineers, we are able to collaborate to provide infrastructure planning services for individual outline plans, neighborhood structure plans, and area structure plans.",
        image: "/images/services/Infrastructure & Subdivision Engineering.webp",
      },
      {
        id: 3,
        title: "Feasibility Studies",
        description:
          "GDC Consultants can help with evaluating the financial feasibility of a project by performing a comprehensive study of its design costs, maintenance and construction costs, servicing capacities, and any applicable council rates and fees.",
        image: "/images/services/Infrastructure & Subdivision Engineering.webp",
      },
      {
        id: 4,
        title: "Low Impact Development",
        description:
          "Low Impact Development is a progressive approach to storm water management that utilizes rainfall as a resource to benefit and enhance the natural environment of your property and its surroundings. We have embraced LID at GDC, and we are able to design green roofs, rain gardens, absorbent landscapes, bio-swales, permeable pavements, and other innovative designs which encourage on-site retention and absorption.",
        image: "/images/services/Infrastructure & Subdivision Engineering.webp",
      },
      {
        id: 5,
        title: "Subdivision Design",
        description:
          "We are able to provide comprehensive deigns for all types of subdivision – small and large, public and private sector. We provide 3D surface modelling, detailed site grading and earth balance calculations, storm water management, sewer system design, report preparation, water distribution system designs, and much more.",
        image: "/images/services/Infrastructure & Subdivision Engineering.webp",
      },
      {
        id: 6,
        title: "Sedimentation and Erosion Control",
        description:
          "Side grading, dewatering, and the disturbance of exposed subsoils by wind and construction equipment are all significant potential issues for your project because they can result in sediments blocking storm sewers and water channels. \nWe are certified experts in preparing erosion and sediment control reports, recommending potential mitigation methods, and providing construction monitoring to ensure that these methods are properly implemented.",
        image: "/images/services/Infrastructure & Subdivision Engineering.webp",
      },
      {
        id: 7,
        title: "Contract Administration",
        description:
          "We can provide you with comprehensive contract administration, including: preparation of documents such as tenders, contracts, and progress payments; inspection services throughout the construction phase; and progress monitoring to document and ensure compliance with standards.",
        image: "/images/services/Infrastructure & Subdivision Engineering.webp",
      },
    ],
  },

  "research-development": {
    title: "Research & Development",
    description:
      "Process consultancy and R&D are both essential to any successful project. The need to ensure quality, follow a timeline, and facilitate collaboration between disciplines, all has to be balanced against the need for R&D.Research and Development is crucial to any project involving unusual design or construction challenges. We embrace these challenges, and pride ourselves on our ability to deliver innovative solutions every time. By keeping our skills updated, developing extensive expertise, and maintaining a high capacity for flexibility, we offer high-quality and innovative product development that can be completely customized to the needs of any particular client and their problems.",
    image: "/images/services/Research & Development.webp",
    sections: [
      {
        id: 1,
        title: "Key Benefits of Contracting GDC",
        description: "",
        points: [
          "Access to the latest planning and construction technology",
          "Wider operational experience",
          "Risk reduction through comprehensive engineering",
          "Reliable solutions for complex issues",
          "Cost optimization through extensive R&D expertise.",
        ],
        image: "/images/services/Research & Development.webp",
      },
      {
        id: 2,
        title:
          "GDC Consultants LTD Recent Research & Development Studies Include:",
        description: "",
        points: [
          "Product development",
          "Studies",
          "Micro simulation and analysis",
          "Trials",
        ],
        image: "/images/services/Research & Development.webp",
      },
      {
        id: 3,
        title: "GDC Consultants - The Solution to All your Engineering R&D",
        description:
          "We possess the latest and best science and technology in a wide range of engineering disciplines – mechanical, electrical, petroleum, physical, chemical, civil, and software –all under one roof. \nSo that we can quickly and comprehensively understand the nature of each project, we work alongside our clients from the earliest possible stage. We typically undertake feasibility studies which employ the full range of our research and development and pilot engineering to deliver a practical and economic solution.",
        image: "/images/services/Research & Development.webp",
      },
      {
        id: 4,
        title: "We provide research and development services that cover:",
        description:
          "We often consult clients that need innovative solutions for unusual challenges or wish to make use of our up-to-date technical skills and high operational experience.",
        points: [
          "Feasibility studies",
          "Modelling and simulation",
          "Scientific assessment and documentation",
          "Prototyping",
          "Full scale testing",
          "Product development.",
        ],
        image: "/images/services/Research & Development.webp",
      },
    ],
    uniqueContent: (
      <div className="mt-10 px-6 lg:px-15">
        {/* First Unique Section */}
        <div
          className="relative w-full h-72 flex items-center justify-center bg-cover bg-center shadow-md rounded-md"
          style={{ backgroundImage: `url('/images/services/structural.webp')` }}
        >
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black opacity-60 rounded-md"></div>
          <div className="relative z-10 text-center text-white p-6">
            <h2 className="text-3xl font-bold mb-4">Internships</h2>
            <p className="mb-6">
              To help maintain a constant influx of fresh ideas and talent into
              our company, we offer a range of internship opportunities
              throughout the year across multiple different disciplines.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  "road-transport": {
    title: "Road Transport",
    description: "​",
    image: "/images/services/Road Transport.webp",
    sections: [
      {
        id: 1,
        title:
          "GDC Consultants: Road Engineering & Design Services for Modern Infrastructure",
        description:
          "For our communities to progress and thrive economically, they must have the latest and most effective transportation infrastructure possible. Our industry-leading road engineering and design consultancy services provide a variety of transportation infrastructure solutions, from major highways, roads, and bridges to works on local transport networks. \nWe are constantly helping our country grow by connecting its people, services, and goods.We operate across several different infrastructure markets as both an employer and a design contractor. Our clients include government and local authorities, contractors, and private developers.",
        image: "/images/services/Road Transport.webp",
      },
      {
        id: 2,
        title: "Road Safety Consultancy",
        description:
          "In addition to providing our own designs, we also offer advice and support to other roading designers by undertaking road safety audits. Our services can consider junction geometry, vehicle restraint, traffic signage, road markings, and other utility management features.",
        image: "/images/services/Road Transport.webp",
      },
      {
        id: 3,
        title: "Smart Civil Engineering Services",
        description:
          "We are able to deliver and implement smart engineering designs for roads, pavements, and highways; including full smart motorways. \nGDC Consultants are specialists in BIM (Building Information Modelling), a digital system which allows us to make informed decisions throughout the project timeline, from design, to the creation of an execution plan, to the preparation and management of data, to construction. We are experts in modelling, data analytics, and clash detection.",
        image: "/images/services/Road Transport.webp",
      },
      {
        id: 4,
        title:
          "We are one of the industry leaders for road engineering in New Zealand. We offer:",
        description: "",
        points: [
          "Asphalt surfacing",
          "Highways construction",
          "Groundworks",
          "Carriageway remodeling",
          "Town centre improvements",
          "Civil engineering",
          "Clash detection",
          "Junction geometry",
          "Road markings",
          "Traffic signs",
          "Utility management",
        ],
        image: "/images/services/Road Transport.webp",
      },
    ],
    uniqueContent: (
      <div className="mt-10 px-6 lg:px-15">
        {/* First Unique Section */}
        <div
          className="relative w-full h-72 flex items-center justify-center bg-cover bg-center shadow-md rounded-md"
          style={{
            backgroundImage: `url('/images/services/Road Transport.webp')`,
          }}
        >
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black opacity-60 rounded-md"></div>
          <div className="relative z-10 text-center text-white p-6">
            <h2 className="text-3xl font-bold mb-4">
              Pavement Design & Engineering
            </h2>
            <p className="mb-6">
              We have a team of pavement experts who have extensive experience
              in working with local authorities, consultancy work, laboratory
              testing, and performing asset management. <br />
              By employing the latest technologies and techniques, our solutions
              are designed with a life-long approach that will ensure long-term
              design viability.Successful projects are the product of
              innovation, experience, and expertise. By choosing GDC
              Consultants, you ensure that your project has all three.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  "seismic-engineering": {
    title: "Seismic Engineering",
    description: "​",
    image: "/images/services/Seismic Engineering.webp",
    sections: [
      {
        id: 1,
        title: "One of the Forefront Areas for Engineering",
        description:
          "At GDC Consultants, our commitment to Seismic engineering excellence in New Zealand sets us apart. With a wealth of expertise, we specialize in crafting robust designs for buildings and structures, ensuring their resilience to seismic activity. Our approach is meticulous, considering the unique requirements of each project, the geographical location, and the inherent level of seismic risk. \nAdhering to the highest standards and codes, our dedicated team employs cutting-edge techniques to develop structures that not only meet regulatory requirements but also exceed expectations. We understand the importance of risk reduction, and our designs are strategically crafted to minimize the reliance on seismic braces, promoting a streamlined and efficient structural response during seismic events. \nIn our pursuit of innovation, GDC Consultants prioritizes the integration of cost-effective solutions that not only enhance seismic performance but also optimize construction efficiency. By implementing state-of-the-art technology and forward-thinking engineering practices, we ensure that our designs not only withstand seismic challenges but also contribute to sustainable and resource-efficient construction processes. \nOur commitment to seismic engineering excellence is underlined by our continuous efforts to stay abreast of the latest developments in the field. At GDC Consultants, we pride ourselves on being at the forefront of seismic engineering in New Zealand, delivering solutions that safeguard lives, investments, and the integrity of structures in the face of seismic uncertainties.",
        image: "/images/services/Seismic Engineering.webp",
      },
      {
        id: 2,
        title: "Our seismic engineering services include",
        description: "",
        points: [
          "Seismic calculations",
          "Design engineering",
          "Vibration isolation design",
          "Site inspection, support, and installation",
          "Equipment anchorage design and calculations",
          "BOM assistance",
          "Anchors, fixings, and fasteners",
          "Restraint HVAC, tanks, and sprinkler systems",
          "Seismic braces installation",
          "Components and services clearance",
          "Passive fire restraint",
          "Full 3D Revit BIM service and development",
          "Seismic risk assessment",
          "Performance evaluation",
          "Peer review of new design",
          "Seismic repair design",
          "Non-structural systems assessment",
        ],
        image: "/images/services/Seismic Engineering.webp",
      },
      {
        id: 3,
        title: "Why you need GDC Consultants Seismic Engineering Services",
        description:
          "Effective seismic analysis and design requires a practical understanding of seismology and structure responses. Having investigated numerous major structures in the past, we have an in-depth understanding of the seismic behavior of a range of structures. This allows to achieve performance-based design engineering that achieves the desired seismic response. \nResearch Based Seismic Testing Capability \nWe are experts in seismic engineering and material science. From evaluating the performance of building elements to fatigue and fracture testing of individual structural works –we provide solutions that make structures safer, limit earthquake damage, and allow clients to safely and quickly return their buildings to regular service. We aim to minimize disruption to your operations throughout the seismic strengthening process.",
        image: "/images/services/Seismic Engineering.webp",
      },
      {
        id: 4,
        title: "Our Seismic Engineering Assessments",
        description:
          "From our Seismic assessments, our expert engineers are able to develop Retrofit Design plans to make the building more resistant to seismic activity, ground motion or soil failure due to earthquakes. These are mainly structural improvements to the core of the building to increase strengthening and give a high NBS%",
        image: "/images/services/Seismic Engineering.webp",
      },
    ],
    uniqueContent: (
      <div className="mt-10 px-6 lg:px-15">
        {/* First Unique Section */}
        <div
          className="relative w-full h-72 flex items-center justify-center bg-cover bg-center shadow-md rounded-md"
          style={{
            backgroundImage: `url('/images/services/Seismic Engineering.webp')`,
          }}
        >
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black opacity-60 rounded-md"></div>
          <div className="relative z-10 text-center text-white p-6">
            <h2 className="text-3xl font-bold mb-4">
              Seismic Assessments and Seismic Upgrade for Rotorua Museum – Te
              Whare Taonga o Te Arawa
            </h2>
          </div>
        </div>
      </div>
    ),
  },

  "structural-engineering": {
    title: "Structural Engineering",
    description:
      "At GDC Consultants, we match every structure with a redesign that is innovative and responsive to changing demands. From large corporate structures to distinctive home designs –we create a masterpiece every time. Stay on schedule and avoid expensive and time-consuming reworkings with GDC’s flexible structural engineering consulting services!​",
    image: "/images/services/structural.webp",
    sections: [
      {
        id: 1,
        title: "",
        description:
          "Having an expert structural team like ours onboard is crucial for the success of any multi-discipline engineering project. We cater to a wide range of industrial designs for small and large construction projects. We offer our services to owners and operators in both conventional and emerging industries. \nWe believe that design and construction should go hand-in-hand! This means that our structural engineering designs are always based not just on the applicable codes and standards, but also the latest and best design principles and ideas – making them both functional and aesthetic spaces. \nGDC’s structural engineering designs are created with a focus on safety, ease of installation, and constructability. We are experienced in designing optimal-modularized building systems, which lower costs, enhance safety, and help to limit field-work. \nWe are consistently ranked amongst the top consulting engineering companies in New Zealand – so you can be sure that we will provide cost-effective designs every time.",
        image: "/images/services/structural.webp",
      },
      {
        id: 2,
        title: "Structural Engineering Services",
        description: "",
        points: [
          "Structural Engineering Services",
          "Reviews for structural adequacy and alignment with IFC structural drawings.",
          "Structural designs, rack supports, foundation drawings and main structural frames, platforms and access, architectural plans, and load foundation calculations.",
          "Structural engineering designs that include concrete and steel structures, piling and foundations, steel buildings, and related elements.",
        ],
        image: "/images/services/structural.webp",
      },
    ],
    uniqueContent: (
      <div className="mt-10">
        {/* Image section with flex layout for left text and right cards */}
        <div
          className="relative w-full h-96 flex items-center justify-center bg-cover bg-center shadow-md rounded-md"
          style={{ backgroundImage: `url('/images/services/structural.webp')` }}
        >
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black opacity-60 rounded-md"></div>

          {/* Flex container to position left text and right cards */}
          <div className="relative z-10 flex w-full h-full p-6">
            {/* Left Side: Text Content */}
            <div className="flex flex-col justify-center w-1/2 text-white pr-4">
              <h2 className="text-3xl font-bold mb-4">
                Civil Structural Engineering Services
              </h2>
            </div>

            {/* Right Side: Cards */}
            <div className="w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto scrollbar-hide">
              {[
                {
                  title: "Civil Structures",
                  description:
                    "Design and calculations for roads, drainage, earth tank site grading, crossings, and bridges based on applicable codes and standards",
                },
                {
                  title: "Support & Supervision of Earthwork",
                  description: "Perform engineering checks for code compliance",
                },
                {
                  title: "RFQ & PO Packages",
                  description: "RFQ and PO packages for infrastructure",
                },
                {
                  title: "Foundations",
                  description:
                    "Design and calculations for foundations in vertical or horizontal capacities, piling, as well as foundation settlements",
                },
                {
                  title: "RFIs Responses",
                  description: "",
                },
                {
                  title: "Structural Design Drawings",
                  description: "for engineering agreements",
                },
                {
                  title: "Preparation & Cost Estimates",
                  description:
                    "Prepare work packages, MTOs and estimates for civil/structural proposals and bids",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-90 rounded-lg shadow-lg p-4 flex flex-col items-start transition-transform transform hover:scale-105"
                >
                  <h3 className="text-xl text-customBlue font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-customBlue">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 px-6 lg:px-15">
          {/* First Unique Section */}
          <div
            className="relative w-full h-72 flex items-center justify-center bg-cover bg-center shadow-md rounded-md"
            style={{
              backgroundImage: `url('/images/services/structural.webp')`,
            }}
          >
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black opacity-60 rounded-md"></div>
            <div className="relative z-10 text-center text-white p-6">
              <h2 className="text-3xl font-bold mb-4">
                Structural & Foundation design for Abbotsford Apartments,
                Hamilton City
              </h2>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  planning: {
    title: "Planning",
    description: "",
    image: "/images/services/Planning.webp",
    sections: [
      {
        id: 1,
        title: "Planning Made Easy",
        description:
          "The resource consent stage of your project can be one of the most challenging. \nNo matter the scope, size, or complexity of your project, GDC Consultants can guide you through the resource management process with expertise. \nWith our team of experienced environmental planners (also known as resource planners, urban planners, and town and country planners) and with assistance from our expert in-house engineers and designers, GDC promises to provide a streamlined delivery on-time and within-budget.",
        image: "/images/services/Planning.webp",
      },
      {
        id: 2,
        title: "Our Planning and Resource Management services include",
        description: "",
        points: [
          "Site suitability assessments and general planning advice",
          "Applications for certificates of compliance",
          "Preparation of resource consents",
          "Assessment of environmental effects",
          "Representation in council and/or court hearings",
          "Resource consent condition compliance assistance",
          "Assistance with plan change applications",
          "Consultation with affected parties",
        ],
        image: "/images/services/Planning.webp",
      },
      {
        id: 3,
        title: "Extensive Experience",
        description:
          "Our planners have extensive experience in both the public and private sectors. \nOur previous private sector projects have ranged from multi-unit commercial developments to rural subdivisions, to holiday parks, to simple residential alterations. \nWe have also worked on papākainga and other projects for Iwi. \nOur previous projects for local and central government include:",
        points: ["Pedestrian/cycle walkways", "Dog pounds"],
        image: "/images/services/Planning.webp",
      },
      {
        id: 4,
        title: "We also offer:",
        description: "",
        points: [
          "Natural Hazard Assessments",
          "Assessment against National Policy Statements (NES) and National Policy Statements (NPS), including NPS - Indigenous Biodiversity, NPS - Freshwater, NPS – Highly Productive Land",
          "Surveying",
          "Traffic and Transport Engineering",
          "Landscape design",
          "A full range of architectural, structural, and engineering services",
        ],
        image: "/images/services/Planning.webp",
      },
      {
        id: 5,
        title: "Nationwide Service",
        description:
          "GDC offers planning services anywhere in New Zealand. We have office locations in:",
        points: [
          "Auckland",
          "Hamilton",
          "Rotorua",
          "Thames",
          "Napier",
          "Wellington",
        ],
        image: "/images/services/Planning.webp",
      },
    ],
    uniqueContent: (
      <div className="mt-10 px-6 lg:px-15">
        {/* First Unique Section */}
        <div
          className="relative w-full h-72 flex items-center justify-center bg-cover bg-center shadow-md rounded-md mb-10" // Added margin-bottom for spacing
          style={{ backgroundImage: `url('/images/services/Planning.webp')` }}
        >
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black opacity-60 rounded-md"></div>
          <div className="relative z-10 text-center text-white p-6">
            <h2 className="text-3xl font-bold mb-4">Future Focused</h2>
            <p className="mb-6">
              Our planners are ready to guide you and your projects through the
              future of environmental planning in New Zealand. We have a strong
              understanding of the current Resource Management Act and are
              constantly adapting to changes in law and policy, including the
              proposed resource management reform. The effects of climate change
              are already being felt in many areas and we can provide planning
              solutions which will ensure the future vibrancy of your project.
            </p>
          </div>
        </div>

        {/* Animated Cards Section */}
        <div className="mt-10 px-6 lg:px-10">
          <h1 className="text-4xl text-customBlue font-bold text-center mb-8">
            Recent Planning Projects
          </h1>
          <div className="flex flex-wrap gap-6 justify-center">
            {[
              {
                title: "Lost Springs",
                image: "/images/services/Planning.webp", // Replace with your actual image path
              },
              {
                title: "Kennedy Bay",
                image: "/images/services/Planning.webp", // Replace with your actual image path
              },
              {
                title: "Kennedy Bay",
                image: "/images/services/Planning.webp", // Replace with your actual image path
              },
              {
                title: "Brownlee Avenue Dog Pound",
                image: "/images/services/Planning.webp", // Replace with your actual image path
              },
            ].map((card, index) => (
              <div
                key={index}
                className="group relative w-80 h-90 rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105"
              >
                {/* Image Section */}
                <div className="relative w-full h-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={320} // Set width and height explicitly
                    height={384} // Adjust these values to fit your design
                    className="w-full h-full object-cover"
                  />
                  {/* Dark Gradient Overlay for Better Text Visibility */}
                  <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-green-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <div className="flex flex-col justify-center items-center h-full p-4">
                    <h3 className="text-2xl font-bold text-center text-white">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  surveying: {
    title: "Surveying",
    description: "​",
    image: "/images/services/survey.webp",
    sections: [
      {
        id: 1,
        title: "Quantity Surveying",
        description:
          "Our Quantity Surveying services encompass a detailed range of activities. This involves meticulously estimating project costs by analysing materials, labor, and other resources. \nThe Surveyor team creates comprehensive bills of quantities, outline the quantities and costs of all project elements.  ",
        image: "/images/services/survey.webp",
      },
      {
        id: 2,
        title: "Precision in Project Finances: Excel in Quantity Surveying",
        description:
          "Additionally, our surveyors excel in budget preparation, cost monitoring, and value engineering to ensure optimal financial control throughout the lifecycle of the construction process. \nOur commitment lies in delivering detailed and accurate Quantity Surveying solutions to enhance overall project efficiency and success. \nWe utilise industry-leading systems, backed by comprehensive local data, ensuring that our clients can always rely on us for superior support and outcomes.",
        image: "/images/services/survey.webp",
      },
      {
        id: 3,
        title: "Cadastral Surveying",
        description:
          "Our surveying services involve precise measurement, analysis, and mapping of land parcels. Our expertise lies in delineating property boundaries, preparing legal surveys, and ensuring compliance with land regulations. Through meticulous cadastral surveys, our team provides accurate records of land ownership, aiding in property transactions, land development, and overall land management. Our commitment is to deliver reliable cadastral surveying solutions to meet the specific needs of clients in land-related projects.",
        image: "/images/services/survey.webp",
      },
    ],
  },

  training: {
    title: "Training",
    description:
      "Training and retaining fresh talent is vital for a company’s future success. At GDC, we believe in supporting young engineers and consider them an important resource. The experienced professionals at GDC Consultants share always giving advice which accelerates the professional development of young talent. We strongly believe that by developing our staff, we increase the value of the company as a whole.​",
    image: "/images/services/Training.webp",
    sections: [
      {
        id: 1,
        title: "Nurturing Young Minds to Become Leading Professionals",
        description:
          "GDC Consultants offer multiple targeted training programmes taught by our in-house subject experts. The purpose of these programmes is to increase our bench strength in the areas we are focusing on for future growth. Each new employee at GDC Consultants participates in a number of general training classes intended to provide them with a deeper understanding of corporate ethics, culture, safety, and career growth. Additionally, each department offers industry-specific training. We also offer formal mentorship and training to passionate engineers who are majored in civil and structural engineering. These training programs can be customized according to the needs of individuals or organizations. \nOur standard coaching, mentoring, & training systems include:",
        points: [
          "Pathway assistance and mentorship to become a Chartered Professional Engineer.",
          "Infra-training NZQA Level 6 qualifications in civil engineering and asset management.",
          "Contract management and procurement procedures.",
          "Training programs related to improving business intelligence, technical skills, and performance.",
          "Member development through one-on-one coaching, career guidance, and performance management",
          "Leadership mentorship to prepare the bench strength of leaders for management responsibilities.",
        ],
        image: "/images/services/Training.webp",
      },
      {
        id: 2,
        title: "Comprehensive Assessment",
        description:
          "We conduct comprehensive assessments to ensure all aspects of the water systems are optimized.",
        image: "/images/services/Training.webp",
      },
    ],
  },
};

export default services;
