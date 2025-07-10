import type {Publication} from "~/data/types";

const PUBLICATIONS: Publication[] = [
    {
        title: "Techniques to Conceal Dark Standby Flying Light Specks",
        authors: ["Hamed Alimohammadzadeh", "Shuqin Zhu", "Shahram Ghandeharizadeh"],
        summary: "In this paper, we use reliability groups with dark standby FLSs to minimize the duration of time a point remains dark in an FLS illumination. We introduce three techniques to prevent a dark standby FLS from obstructing the user’s field of view, FoV. All three move the FLS out of the user’s FoV.",
        publisher: "ACM Transactions on Multimedia Computing, Communications and Applications Journal",
        year: "2025",
        resources: [
            {
                name: "paper",
                link: "https://dl.acm.org/doi/abs/10.1145/3724399"
            },
            {
                name: "code",
                link: "https://github.com/flyinglightspeck/StandbyFLSs"
            }
        ],
        image: "images/reliability_tom.png"
    },
    {
        title: "Swazure: Swarm Measurement of Pose for Flying Light Specks",
        authors: ["Hamed Alimohammadzadeh", "Shahram Ghandeharizadeh"],
        summary: "Flying light specks quantify their position relative to one another in order to realize a shape. They utilize tracking devices like cameras to do so which have a sweet range in which they are the most accurate and at some ranges the sensor data is missing. Swazure provides for the physical independence of an FLS from the operating range of its sensor. It solves the missing sensor data using cooperation among FLSs.",
        publisher: "Holodecks",
        year: "2024",
        resources: [
            {
                name: "paper",
                link: "https://www.holodecks.quest/_files/ugd/fb2888_c1bca9ab88a247579a554a3b901ec688.pdf?index=true"
            },
            {
                name: "code",
                link: "https://github.com/flyinglightspeck/Swazure"
            }
        ],
        image: "images/swazure.png"
    },
    {
        title: "Swarical: An Integrated Hierarchical Approach to Localizing Flying Light Specks",
        authors: ["Hamed Alimohammadzadeh", "Shahram Ghandeharizadeh"],
        summary: "We assume we have a heterogeneous mix of drones each equipped with Aruco markers and a camera facing a different direction. In a relative localization problem drones track one another and adjust their relative position to create a formation or a 3D shape. Here we present a decentralized technique for drones to cooperatively create a 3D shape based on an input mesh file.",
        publisher: "ACM Multimedia",
        year: "2024",
        resources: [
            {
                name: "paper",
                link: "https://dl.acm.org/doi/10.1145/3664647.3681080"
            },
            {
                name: "code",
                link: "https://github.com/flyinglightspeck/Swarical"
            },
            {
                name: "video",
                link: "https://youtu.be/GncnoqqYT_w"
            }
        ],
        image: "images/swarical.png"
    },
    {
        title: "Reliability Groups with Standby Flying Light Specks",
        authors: ["Hamed Alimohammadzadeh", "Shuqin Zhu", "Jiadong Bai", "Shahram Ghandeharizadeh"],
        summary: "In a 3D multimedia display consisted of Flying Light Specks, failure of FLSs is a norm. Here we introduce dark standby FLSs to replace failed FLSs to increase the reliability of such displays. In addition we compare techniques for hiding the dark FLSs from users' view.",
        publisher: "ACM Multimedia Systems",
        year: "2024",
        resources: [
            {
                name: "paper",
                link: "https://dl.acm.org/doi/10.1145/3625468.3647606"
            },
            {
                name: "code",
                link: "https://github.com/flyinglightspeck/StandbyFLSs"
            }
        ],
        image: "images/reliability.png"
    },
    {
        title: "Force-Feedback Through Touch-based Interactions With A Nanocopter",
        authors: ["Yang Chen", "Hamed Alimohammadzadeh", "Shahram Ghandeharizadeh", "Heather Culbertson"],
        summary: "This paper introduces a novel approach using Crazyflie-based quadcopters as haptic rendering devices to simulate virtual stiffness. By designing a specialized cage and implementing control using Crazyswarm and both centralized and decentralized localization techniques, we implemented the smallest dronebased direct-touch encounter-type haptic feedback device. We conducted a user study, which revealed that even with only 21 grams of the force output range, participants could distinguish between the proportional levels, perceiving higher proportional levels as increased stiffness.",
        publisher: "IEEE Haptics Symposium (HAPTICS)",
        year: "2024",
        resources: [
            {
                name: "paper",
                link: "https://ieeexplore.ieee.org/abstract/document/10520851"
            },
            {
                name: "code",
                link: "https://github.com/HaRVI-Lab/TouchSwarm.git"
            },
            {
                name: "video",
                link: "https://www.youtube.com/watch?v=z_e2M33Gim8"
            }
        ],
        image: "images/touch_swarm.png"
    },
    {
        title: "An Evaluation of Decentralized Group Formation Techniques for Flying Light Specks",
        authors: ["Hamed Alimohammadzadeh", "Heather Culbertson", "Shahram Ghandeharizadeh"],
        summary: "Group formation is fundamental for 3D displays that use Flying Light Specks, FLSs, to illuminate shapes and provide haptic interactions. Groups of G FLSs may implement reliability techniques to tolerate FLS failures, provide kinesthetic haptic feedback in response to a user’s touch, and facilitate a divide and conquer approach to challenges such as localizing FLSs to render a shape. This paper evaluates four decentralized techniques to form groups. An FLS implements a technique autonomously using asynchronous communication and without a global clock.",
        publisher: "ACM Multimedia Asia",
        year: "2023",
        resources: [
            {
                name: "paper",
                link: "https://dl.acm.org/doi/10.1145/3595916.3626460"
            },
            {
                name: "code",
                link: "https://github.com/flyinglightspeck/Group-Formation"
            }
        ],
        image: "images/group_formation.png"
    },
    {
        title: "A Conceptual Model of Intelligent Multimedia Data Rendered using Flying Light Specks",
        authors: ["Nima Yazdani", "Hamed Alimohammadzadeh", "Shahram Ghandeharizadeh"],
        summary: "This paper presents a conceptual model for data display via a 3D multimedia displays to enable content-based queries. The model empowers users of an FLS display to annotate the illuminations by adding semantics to the data, extending a multimedia repository with information and knowledge. We present a core conceptual model and demonstrate its extensions for two diverse applications, authoring tools with entertainment and MRI scans with healthcare.",
        publisher: "Holodecks",
        year: "2023",
        resources: [
            {
                name: "paper",
                link: "https://www.holodecks.quest/_files/ugd/fb2888_4cf85d8951b241d1a86a378af2144cdb.pdf?index=true"
            }
        ],
        image: "images/conceptual_model.png"
    },
    {
        title: "SwarMer: A Decentralized Localization Framework for Flying Light Specks",
        authors: ["Hamed Alimohammadzadeh", "Shahram Ghandeharizadeh"],
        summary: "Flying Light Specks are drones equipped with lights, tracking sensors, network, and computation power. To display a point cloud using swarms of Flying Light Specks in a GPS-denied environment, FLSs can position themselves relative to one another. This paper presents decentralized algorithm to localize thousands of FLSs using inter-FLS position measurements.",
        publisher: "Holodecks",
        year: "2023",
        resources: [
            {
                name: "paper",
                link: "https://www.holodecks.quest/_files/ugd/fb2888_f3e51e31182f4cd9b61204547b6b89f3.pdf?index=true"
            },
            {
                name: "code",
                link: "https://github.com/flyinglightspeck/SwarMer"
            },
            {
                name: "video 1",
                link: "https://www.youtube.com/watch?v=Lh11tWWOP5Y"
            },
            {
                name: "video 2",
                link: "https://www.youtube.com/watch?v=BIiBxD_aUz8"
            },
            {
                name: "video 3",
                link: "https://www.youtube.com/watch?v=4GhhlSq4UrM"
            },
            {
                name: "video 4",
                link: "https://www.youtube.com/watch?v=cZrz0e61txU"
            },
            {
                name: "video 5",
                link: "https://www.youtube.com/watch?v=a0fFu0z6BU0"
            }
        ],
        image: "images/swarmer.png"
    },
    {
        title: "Towards Enabling Complex Touch-based Human-Drone Interaction",
        authors: ["Yang Chen", "Hamed Alimohammadzadeh", "Shahram Ghandeharizadeh", "Heather Culbertson"],
        summary: "In this paper, we introduce an approach to multi-human robot interaction using omnicopters. These aerial vehicles are able of performing 6 degrees of freedom (6DoF) movements. When used as a haptic device, unlike traditional systems, our method enables haptic rendering without the need for tilt, offering a more intuitive and seamless interaction experience.",
        publisher: "IROS WS on Human Multi-Robot Interaction",
        year: "2023",
        resources: [
            {
                name: "paper",
                link: "https://bpb-us-e2.wpmucdn.com/sites.uci.edu/dist/2/5230/files/2023/09/79_SCR_23_Yang_Chen.pdf"
            }
        ],
        image: "images/complex_touch_interaction.png"
    },
    {
        title: "Dronevision: An Experimental 3D Testbed for Flying Light Specks",
        authors: ["Hamed Alimohammadzadeh", "Rohit Bernard", "Yang Chen", "Trung Phan", "Prashant Singh", "Shuqin Zhu", "Heather Culbertson", "Shahram Ghandeharizadeh"],
        summary: "Today's robotic laboratories for drones are housed in a large room. At times, they are the size of a warehouse. These spaces are typically equipped with permanent devices to localize the drones, e.g., Vicon cameras. One may use these laboratories to develop a 3D multimedia system with miniature sized drones configured with light sources. As an alternative, this brave new idea paper envisions shrinking these room-sized laboratories to the size of a cube or cuboid that sits on a desk.",
        publisher: "Holodecks",
        year: "2023",
        resources: [
            {
                name: "paper",
                link: "https://www.holodecks.quest/_files/ugd/fb2888_81c0a99042be474ca28580df45458716.pdf?index=true"
            }
        ],
        image: "images/dronevision.png"
    },
    {
        title: "Modeling Illumination Data with Flying Light Specks",
        authors: ["Hamed Alimohammadzadeh", "Daryon Mehraban", "Shahram Ghandeharizadeh"],
        summary: "3D multimedia displays using Flying Light Specks illuminate an object in a 3D volume. Here we design and implement these illuminations and their data models. We introduce a conceptual model of drone flight paths to render static, slide, and motion illuminations. We describe a physical implementation of the conceptual model using bag files.",
        publisher: "ACM Multimedia Systems",
        year: "2023",
        resources: [
            {
                name: "paper",
                link: "https://dl.acm.org/doi/10.1145/3587819.3592544"
            },
            {
                name: "code",
                link: "https://github.com/flyinglightspeck/FLSbagfile"
            },
            {
                name: "video",
                link: "https://www.youtube.com/watch?v=zaZwAiCsZUU&feature=youtu.be"
            }
        ],
        image: "images/illumination_data_model.png"
    },
    {
        title: "An Evaluation of Three Distance Measurement Sensors for Flying Light Specks",
        authors: ["Trung Phan", "Hamed Alimohammadzadeh", "Heather Culbertson", "Shahram Ghandeharizadeh"],
        summary: "This study evaluates the accuracy of three different types sensors to measure distance using IR, ultrasonic, and UWB. We envision the possible use of these sensors to localize swarms of flying light specks (FLSs) to illuminate objects.",
        publisher: "Intelligent Metaverse Technologies and Applications (iMETA)",
        year: "2023",
        resources: [
            {
                name: "paper",
                link: "https://ieeexplore.ieee.org/document/10294597"
            }
        ],
        image: "images/distance_measurement.png"
    },
    {
        title: "Towards a Stable 3D Physical Human-Drone Interaction",
        authors: ["Yang Chen", "Hamed Alimohammadzadeh", "Heather Culbertson", "Shahram Ghandeharizadeh"],
        summary: "Key requirements of physical human-drone interactions are that the system is stable, safe, and expressive. In this paper, we present the lessons learned from our prior work and discuss implications advancements and limitations of different controllers for physical human-drone interaction.",
        publisher: "Holodecks",
        year: "2023",
        resources: [
            {
                name: "paper",
                link: "https://www.holodecks.quest/_files/ugd/fb2888_25a58674ba6c49bea8e53b76bb7a106d.pdf?index=true"
            }
        ],
        image: "images/stable_touch.png"
    },
]

export default PUBLICATIONS
