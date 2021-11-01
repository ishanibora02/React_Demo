import { greenLightStyle } from "./Style/greenLightStyle";
import { textStyle } from "./Style/textStyle";

export const elements = [
    // TEXT

    {
        id: "t-1",
        data: {label: "Text"},
        position: {x: 110, y: 0},
        type: "input",
        style: textStyle,
        className: "nodrag"
    },
    {
        id: "t-2",
        data: {label: "From 391cv4"},
        position: {x: 1200, y: 0},
        type: "input",
        style: textStyle,
        className: "nodrag"
    },
    {
        id: "t-3",
        data: {label: ""},
        position: {x: 2015, y: 1900},
        type: "output",
        style: textStyle,
        className: "nodrag"
    },
    {
        id: "t-4",
        data: {label: ""},
        position: {x: 2750, y: 1900},
        type: "output",
        style: textStyle,
        className: "nodrag"
    },
    {
        id: "t-5",
        data: {label: ""},
        position: {x: 3580, y: 350},
        type: "output",
        style: textStyle,
        className: "nodrag"
    },

    // LINE

    {
        id: "l-1",
        data: { label: "TEXT"},
        type:"output",
        position: {x: 20, y: 100},
        style:{
            background: "#a9a9a9",
            height: ".3rem",
            width: "15rem"
        },
        className: "nodrag"
    },
    {
        id: "l-2",
        data: { text: "Text"},
        type:"custom-pipe-1",
        position: {x: 25, y: 1000},
        className: "nodrag"
    },
    {
        id: "l-3",
        data: { label: "kj"},
        type:"custom-pipe-3",
        position: {x: 530, y: 915},
        className: "nodrag"
    },
    {
        id: "l-4",
        data: { label: ""},
        type:"output",
        position: {x: 1693, y: 1200},
        style:{
            background: "#a9a9a9",
            height: "1rem",
            width: "17rem",
            border: "none"
        },
        className: "nodrag"
    },
    {
        id: "l-5",
        data: { label: ""},
        type:"input",
        position: {x: 1693, y: 1240},
        style:{
            background: "#a9a9a9",
            height: "1rem",
            width: "17rem",
            border: "none"
        },
        className: "nodrag"
    },
    {
        id: "l-6",
        data: { label: ""},
        type: "custom-pipe-6",
        position: {x: 1900, y: 1400},
        className: "nodrag"
    },

    // GREY BALLS
    {
        id: "gb-1",
        data: { label: ""},
        position: {x: 0, y: 100},
        style:{
            background: "#a9a9a9",
            height: ".3rem",
            width: ".3rem",
            borderRadius: "50%"
        },
        className: "nodrag"
    },
    {
        id: "gb-2",
        data: { label: ""},
        position: {x: 0, y: 1000},
        style:{
            background: "#a9a9a9",
            height: ".3rem",
            width: ".3rem",
            borderRadius: "50%"
        },
        className: "nodrag"
    },
    {
        id: "gb-3",
        data: { label: "M"},
        type: "input",
        position: {x: 990, y: 815},
        style:{
            background: "#a9a9a9",
            borderRadius: "50%",
            width: "2rem",
            height: "2rem",
            color: "#000",
            fontSize: "1.6rem"
        },
        className: "nodrag"
    },
    {
        id: "gb-4",
        data: { label: ""},
        type: "input",
        position: {x: 830, y: 400},
        style:{
            background: "#a9a9a9",
            borderRadius: "50%",
            width: "2rem",
            height: "2rem",
            color: "#000",
            fontSize: "1.6rem"
        },
        className: "nodrag"
    },
    {
        id: "gb-5",
        data: { label: "M"},
        type: "input",
        position: {x: 1230, y: 400},
        style:{
            background: "#a9a9a9",
            borderRadius: "50%",
            width: "2rem",
            height: "2rem",
            color: "#000",
            fontSize: "1.6rem"
        },
        className: "nodrag"
    },
    {
        id: "gb-6",
        data: { label: ""},
        type: "input",
        position: {x: 1480, y: 200},
        style:{
            background: "#a32638",
            borderRadius: "50%",
            width: "3rem",
            height: "3rem",
        },
        className: "nodrag"
    },
    {
        id: "gb-7",
        data: { label: "arrow"},
        type: "input",
        position: {x: 2150, y: 200},
        style:{
            background: "#a32638",
            borderRadius: "50%",
            width: "3rem",
            height: "3rem",
            color: "#fff"
        },
        className: "nodrag"
    },
    {
        id: "gb-8",
        data: { label: "X"},
        type: "input",
        position: {x: 1950, y: 325},
        style:{
            background: "#a99a86",
            borderRadius: "50%",
            width: "3rem",
            height: "3rem",
            color: "#000",
            fontSize: "1.6rem"
        },
        className: "nodrag"
    },
    {
        id: "gb-9",
        data: { label: ""},
        position: {x: 1880, y: 1400},
        style:{
            background: "#a9a9a9",
            height: ".3rem",
            width: ".3rem",
            borderRadius: "50%"
        },
        className: "nodrag"
    },
    {
        id: "gb-10",
        data: { label: "M"},
        type: "input",
        position: {x: 2550, y: 1390},
        style:{
            background: "#a9a9a9",
            borderRadius: "50%",
            width: "2rem",
            height: "2rem",
            color: "#000",
            fontSize: "1.6rem"
        },
        className: "nodrag"
    },
    {
        id: "gb-11",
        data: { label: ""},
        position: {x: 2200, y: 1660},
        style:{
            background: "#f0ffff",
            height: "2rem",
            width: "2rem",
            borderRadius: "50%"
        },
        className: "nodrag"
    },
    {
        id: "gb-12",
        data: { label: "X"},
        position: {x: 2000, y: 1750},
        style:{
            background: "#a99a86",
            height: "2rem",
            width: "2rem",
            borderRadius: "50%"
        },
        className: "nodrag"
    },
    {
        id: "gb-13",
        data: { label: ""},
        position: {x: 2530, y: 1660},
        style:{
            background: "#f0ffff",
            height: "2rem",
            width: "2rem",
            borderRadius: "50%"
        },
        className: "nodrag"
    },
    {
        id: "gb-14",
        data: { label: "X"},
        position: {x: 2730, y: 1750},
        style:{
            background: "#a99a86",
            height: "2rem",
            width: "2rem",
            borderRadius: "50%"
        },
        className: "nodrag"
    },
    {
        id: "gb-15",
        data: { label: ""},
        position: {x: 2650, y: 50},
        style:{
            background: "#a32638",
            height: "2rem",
            width: "2rem",
            borderRadius: "50%"
        },
        className: "nodrag"
    },
    {
        id: "gb-16",
        data: { label: ""},
        position: {x: 3050, y: 300},
        style:{
            background: "#a32638",
            height: "2rem",
            width: "2rem",
            borderRadius: "50%"
        },
        className: "nodrag"
    },
    {
        id: "gb-17",
        data: { label: ""},
        position: {x: 2980, y: 300},
        style:{
            background: "#a32638",
            height: "2rem",
            width: "2rem",
            borderRadius: "50%"
        },
        className: "nodrag"
    },
    {
        id: "gb-18",
        data: { label: "M"},
        position: {x: 3290, y: 80},
        style:{
            background: "#a9a9a9",
            borderRadius: "50%",
            width: "2rem",
            height: "2rem",
            color: "#000",
            fontSize: "1.6rem"
        },
        className: "nodrag"
    },
    {
        id: "gb-19",
        data: { label: ""},
        type: "input",
        position: {x: 3750, y: 80},
        style:{
            background: "#a32638",
            borderRadius: "50%",
            width: "2rem",
            height: "2rem",
            color: "#000",
            fontSize: "1.6rem"
        },
        className: "nodrag"
    },
    {
        id: "gb-20",
        data: { label: "X"},
        position: {x: 3565, y: 220},
        style:{
            background: "#a99a86",
            height: "2rem",
            width: "2rem",
            borderRadius: "50%"
        },
        className: "nodrag"
    },
    {
        id: "gb-21",
        data: { label: ""},
        type: "input",
        position: {x: 4190, y: 300},
        style:{
            background: "#f0ffff",
            height: "2rem",
            width: "2rem",
            borderRadius: "50%"
        },
        className: "nodrag"
    },
    {
        id: "gb-22",
        data: { label: ""},
        type: "input",
        position: {x: 3940, y: 800},
        style:{
            background: "#a32638",
            height: "2rem",
            width: "2rem",
            borderRadius: "50%"
        },
        className: "nodrag"
    },
    {
        id: "gb-23",
        data: { label: ""},
        type: "input",
        position: {x: 3940, y: 970},
        style:{
            background: "#a32638",
            height: "2rem",
            width: "2rem",
            borderRadius: "50%"
        },
        className: "nodrag"
    },
    {
        id: "gb-24",
        data: { label: ""},
        type: "input",
        position: {x: 2650, y: 900},
        style:{
            background: "#a32638",
            height: "2rem",
            width: "2rem",
            borderRadius: "50%"
        },
        className: "nodrag"
    },
    {
        id: "gb-25",
        data: { label: ""},
        type: "input",
        position: {x: 524, y: 996},
        style:{
            background: "#a9a9a9",
            height: ".75rem",
            width: ".75rem",
            borderRadius: "50%",
            border: "1px solid black"
        },
        className: "nodrag"
    },

    //GREY OBJECTS

    {
        id: "g-1",
        data: { label: ""},
        position: {x: 2450, y: 980},
        style:{
            background: "#a9a9a9",
            width: "2rem",
            height: "2rem",
            clipPath: "polygon(0 0, 100% 0, 50% 50%, 100% 100%, 0 100%, 50% 50%)"
        },
        className: "nodrag"
    },
    {
        id: "g-2",
        data: { label: ""},
        position: {x: 2440, y: 1200},
        style:{
            background: "#a9a9a9",
            width: "4rem",
            height: "2px",
        },
        className: "nodrag"
    },
    {
        id: "g-3",
        data: { label: ""},
        type: "output",
        position: {x: 2100, y: 1600},
        style:{
            background: "#696969",
            width: "25rem",
            height: "2rem",
            border: "none"
        },
        className: "nodrag"
    },
    {
        id: "g-4",
        data: { label: ""},
        position: {x: 2000, y: 1600},
        style:{
            background: "#a9a9a9",
            width: "15rem",
            height: "2rem",
        },
        className: "nodrag"
    },
    {
        id: "g-5",
        data: { label: ""},
        position: {x: 2520, y: 1600},
        style:{
            background: "#a9a9a9",
            width: "15rem",
            height: "2rem",
        },
        className: "nodrag"
    },
    {
        id: "g-6",
        data: { label: ""},
        position: {x: 2800, y: 220},
        style:{
            background: "#a9a9a9",
            width: "20rem",
            height: ".5rem",
        },
        className: "nodrag"
    },
    {
        id: "g-7",
        data: { label: ""},
        type: "custom-pipe",
        position: {x: 3300, y: 130},
        className: "nodrag"
    },
    {
        id: "g-8",
        data: { label: ""},
        position: {x: 3500, y: 600},
        style:{
            background: "#a9a9a9",
            width: "15rem",
            height: "2rem",
        },
        className: "nodrag"
    },
    {
        id: "g-9",
        data: { label: ""},
        position: {x: 3350, y: 900},
        style:{
            background: "#a9a9a9",
            width: "40rem",
            height: "2rem",
        },
        className: "nodrag"
    },

    // GREEN LIGHTS

    {
        id: "green-light-1",
        data: { label: "M"},
        type: "input",
        position: {x: 250, y: 90},
        style: greenLightStyle,
        className: "nodrag"
    },
    {
        id: "green-light-2",
        data: { label: ""},
        type: "input",
        position: {x: 745, y: 300},
        style: {
            height: ".5rem",
            width: ".5rem",
            border: "none",
            background: "lime"
        },
        className: "nodrag"
    },
    {
        id: "green-light-3",
        data: { label: ""},
        type: "input",
        position: {x: 1015, y: 300},
        style: {
            height: ".5rem",
            width: ".5rem",
            border: "none",
            background: "lime"
        },
        className: "nodrag"
    },
    {
        id: "green-light-4",
        data: { label: ""},
        type: "input",
        position: {x: 2020, y: 100},
        style: {
            height: ".5rem",
            width: ".5rem",
            border: "none",
            background: "lime"
        },
        className: "nodrag"
    },
    {
        id: "green-light-5",
        data: { label: ""},
        type: "input",
        position: {x: 1920, y: 1450},
        style: {
            height: ".5rem",
            width: ".5rem",
            border: "none",
            background: "lime"
        },
        className: "nodrag"
    },
    {
        id: "green-light-6",
        data: { label: ""},
        type: "input",
        position: {x: 2420, y: 0},
        style: {
            height: ".5rem",
            width: ".5rem",
            border: "none",
            background: "lime"
        },
        className: "nodrag"
    },
    {
        id: "green-light-7",
        data: { label: ""},
        type: "input",
        position: {x: 2530, y: 0},
        style: {
            height: ".5rem",
            width: ".5rem",
            border: "none",
            background: "lime"
        },
        className: "nodrag"
    },
    {
        id: "green-light-8",
        data: { label: ""},
        type: "input",
        position: {x: 3510, y: 0},
        style: {
            height: ".5rem",
            width: ".5rem",
            border: "none",
            background: "lime"
        },
        className: "nodrag"
    },
    {
        id: "green-light-9",
        data: { label: ""},
        type: "input",
        position: {x: 3640, y: 0},
        style: {
            height: ".5rem",
            width: ".5rem",
            border: "none",
            background: "lime"
        },
        className: "nodrag"
    },

    // GREY LIGHT
    {
        id: "grey-light-1",
        data: { label: ""},
        type: "input",
        position: {x: 1900, y: 100},
        style: {
            height: ".5rem",
            width: ".5rem",
            border: "none",
            background: "grey"
        },
        className: "nodrag"
    },
    {
        id: "grey-light-2",
        data: { label: ""},
        type: "input",
        position: {x: 4055, y: 300},
        style: {
            height: ".5rem",
            width: ".5rem",
            border: "none",
            background: "grey"
        },
        className: "nodrag"
    },
    {
        id: "grey-light-3",
        data: { label: ""},
        type: "input",
        position: {x: 4120, y: 300},
        style: {
            height: ".5rem",
            width: ".5rem",
            border: "none",
            background: "grey"
        },
        className: "nodrag"
    },

    // RED LIGHTS
    {
        id: "red-light-1",
        data: { label: ""},
        type: "input",
        position: {x: 615, y: 300},
        style: {
            height: ".5rem",
            width: ".5rem",
            border: "none",
            background: "red"
        },
        className: "nodrag"
    },
    {
        id: "red-light-2",
        data: { label: ""},
        type: "input",
        position: {x: 1140, y: 300},
        style: {
            height: ".5rem",
            width: ".5rem",
            border: "none",
            background: "red"
        },
        className: "nodrag"
    },
    {
        id: "red-light-3",
        data: { label: ""},
        type: "output",
        position: {x: 1980, y: 1195},
        style: {
            height: "1.5rem",
            width: "1.5rem",
            border: "none",
            borderRadius: "50%",
            background: "red"
        },
        className: "nodrag"
    },
    {
        id: "red-light-4",
        data: { label: ""},
        type: "input",
        position: {x: 1980, y: 1240},
        style: {
            height: "1.5rem",
            width: "1.5rem",
            border: "none",
            borderRadius: "50%",
            background: "red"
        },
        className: "nodrag"
    },

    // MACHINES

    {
        id: "m-1",
        type: "machine-left",
        data: { text: "Clinker silo", subText: "491cs1"},
        position: {x: 25, y: 200},
        className: "nodrag"
    },
    {
        id: "m-2",
        data: { text: "Clinker"},
        type: "machine-bottom",
        position: {x: 765, y: 1150},
        className: "nodrag"
    },
    {
        id: "m-3",
        data: { label: "text"},
        position: {x: 600, y: 350},
        style:{
            background: "#506d52",
            color: "#000",
            fontSize: "1.6rem",
            height: "10rem",
            width: "10rem",
            borderRadius: "3px",
            textTransform: "uppercase",
            border: "none",
            clipPath: "polygon(0 0, 100% 0, 100% 70%, 60% 100%, 40% 100%, 0 70%)"
        },
        className: "nodrag"
    },
    {
        id: "m-4",
        data: { label: "text"},
        position: {x: 1000, y: 350},
        style:{
            background: "#506d52",
            color: "#000",
            fontSize: "1.6rem",
            height: "10rem",
            width: "10rem",
            borderRadius: "3px",
            textTransform: "uppercase",
            border: "none",
            clipPath: "polygon(0 0, 100% 0, 100% 75%, 60% 100%, 40% 100%, 0 75%)"
        },
        className: "nodrag"
    },
    {
        id: "power",
        data: { label: ""},
        position: {x: 1400, y: 600},
        style:{
            background: "#a9a9a9",
            color: "#000",
            fontSize: "3rem",
            height: "5rem",
            width: "7rem",
            borderRadius: ".5rem",
            textTransform: "uppercase",
        },
        className: "nodrag"
    },
    {
        id: "m-5",
        data: { text: "hbi a bin"},
        position: {x: 1570, y: 500},
        type: "machine-center-left",
        style:{
            background: "#a9a9a9",
            color: "#000",
            fontSize: "3rem",
            height: "25rem",
            width: "32rem",
            borderRadius: ".5rem",
            textTransform: "uppercase",
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 10% 100%, 0 85%)"
        },
        className: "nodrag"
    },
    {
        id: "m-6",
        data: { text: "dry fly ash bin"},
        type: "machine-center-right",
        position: {x: 2300, y: 500},
        style:{
            background: "#a9a9a9",
            color: "#000",
            fontSize: "3rem",
            height: "25rem",
            width: "32rem",
            borderRadius: ".5rem",
            textTransform: "uppercase",
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 10% 100%, 0 85%)"
        },
        className: "nodrag"
    },
    {
        id: "m-7",
        data: { label: "text"},
        position: {x: 1590, y: 150},
        style:{
            background: "#506d52",
            color: "#000",
            fontSize: "1.6rem",
            height: "10rem",
            width: "10rem",
            borderRadius: "3px",
            textTransform: "uppercase",
            border: "none",
            clipPath: "polygon(0 0, 100% 0, 100% 75%, 60% 100%, 40% 100%, 0 75%)"
        },
        className: "nodrag"
    },
    {
        id: "m-8",
        data: { label: "text"},
        type: "output",
        position: {x: 1890, y: 150},
        style:{
            background: "#506d52",
            color: "#000",
            fontSize: "1.6rem",
            height: "10rem",
            width: "10rem",
            borderRadius: "3px",
            textTransform: "uppercase",
            border: "none",
            clipPath: "polygon(0 0, 100% 0, 100% 75%, 60% 100%, 40% 100%, 0 75%)"
        },
        className: "nodrag"
    },
    {
        id: "m-9",
        data: { label: "text"},
        position: {x: 2400, y: 40},
        style:{
            background: "#506d52",
            color: "#000",
            fontSize: "1.6rem",
            height: "10rem",
            width: "10rem",
            borderRadius: "3px",
            textTransform: "uppercase",
            border: "none",
            clipPath: "polygon(0 0, 100% 0, 100% 75%, 60% 100%, 40% 100%, 0 75%)"
        },
        className: "nodrag"
    },
    {
        id: "m-10",
        data: { label: "text"},
        position: {x: 3500, y: 40},
        style:{
            background: "#506d52",
            color: "#000",
            fontSize: "1.6rem",
            height: "10rem",
            width: "10rem",
            borderRadius: "3px",
            textTransform: "uppercase",
            border: "none",
            clipPath: "polygon(0 0, 100% 0, 100% 75%, 60% 100%, 40% 100%, 0 75%)"
        },
        className: "nodrag"
    },
    {
        id: "m-11",
        data: { text: "dry fly ash silo",subText: "number"},
        type: "machine-right",
        position: {x: 3750, y: 400},
        className: "nodrag"
    },

    // BOX
    {
        id: "b-1",
        data: { label: ""},
        position: {x: 50, y: 700},
        style:{
            background: "red",
            height: "3rem",
            width: "3rem"
        },
        className: "nodrag"
    },
    {
        id: "b-2",
        data: { label: ""},
        position: {x: 145, y: 700},
        style:{
            background: "transparent",
            height: "3rem",
            width: "3rem",
            border: "1px solid black"
        },
        className: "nodrag"
    },
    {
        id: "b-3",
        data: { label: ""},
        position: {x: 240, y: 700},
        style:{
            background: "red",
            height: "3rem",
            width: "3rem"
        },
        className: "nodrag"
    },
    {
        id: "b-4",
        data: { label: ""},
        position: {x: 335, y: 700},
        style:{
            background: "transparent",
            height: "3rem",
            width: "3rem",
            border: "1px solid black"
        },
        className: "nodrag"
    },
    {
        id: "b-5",
        data: { label: ""},
        position: {x: 430, y: 700},
        style:{
            background: "transparent",
            height: "3rem",
            width: "3rem",
            border: "1px solid black"
        },
        className: "nodrag"
    },
    {
        id: "rb-1",
        data: { label: "M"},
        position: {x: 3200, y: 85},
        style: {
            background: "red",
            height: "2rem",
            width: "2rem",
        }
    },
    {
        id: "ggb-1",
        data: { label: ""},
        type: "output",
        position: {x: 4050, y: 333},
        style: {
            background: "#506d52",
            height: "3rem",
            width: "5rem",
            border: "none"
        }
    },

    // EDGES

    {
        id: "els-1",
        type: "straight",
        source: "t-1",
        target: "l-1",
        arrowHeadType: "arrow",
        style: {
            stroke: "#9ACD32",
        }
    },
    {   
        id: "els-2",
        type: "straight",
        source:"green-light-1",
        target: "m-1",
        targetHandle: "cs_a",
        arrowHeadType: "arrow",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-3",
        type: "straight",
        source:"m-1",
        target: "b-1",
        sourceHandle: "cs_b",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-4",
        type: "straight",
        source:"m-1",
        target: "b-2",
        sourceHandle: "cs_c",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-5",
        type: "straight",
        source:"m-1",
        target: "b-3",
        sourceHandle: "cs_d",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-6",
        type: "straight",
        source:"m-1",
        target: "b-4",
        sourceHandle: "cs_e",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-7",
        type: "straight",
        source:"m-1",
        target: "b-5",
        sourceHandle: "cs_f",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-38",
        type: "straight",
        source:"b-2",
        target: "l-2",
        targetHandle: "p1_b",
        arrowHeadType: "arrow",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-39",
        type: "straight",
        source:"b-3",
        target: "l-2",
        targetHandle: "p1_c",
        arrowHeadType: "arrow",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-40",
        type: "straight",
        source:"b-4",
        target: "l-2",
        targetHandle: "p1_d",
        arrowHeadType: "arrow",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-41",
        type: "straight",
        source:"b-5",
        targetHandle: "p1_e",
        target: "l-2",
        arrowHeadType: "arrow",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-8",
        type: "straight",
        source:"b-1",
        target: "l-2",
        targetHandle: "p1_a",
        arrowHeadType: "arrow",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-9",
        type: "straight",
        source:"gb-3",
        target: "m-2",
        arrowHeadType: "arrow",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-10",
        type: "step",
        source:"gb-4",
        target: "m-3",
        style: {
            stroke: "#000"
        }
    },
    {   
        id: "els-11",
        type: "straight",
        source:"m-3",
        target: "l-3",
        arrowHeadType: "arrow",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-12",
        type: "step",
        source:"gb-5",
        target: "m-4",
        style: {
            stroke: "#000"
        }
    },
    {   
        id: "els-13",
        type: "step",
        source:"m-4",
        target: "l-3",
        arrowHeadType: "arrow",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-14",
        type: "straight",
        source:"m-7",
        target: "m-5",
        targetHandle: "hb_a",
        arrowHeadType: "arrow",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-15",
        type: "step",
        source:"gb-6",
        target: "m-7",
        style: {
            stroke: "#000"
        }
    },
    {   
        id: "els-16",
        type: "straight",
        source:"gb-8",
        target: "m-5",
        targetHandle: "hb_c",
        arrowHeadType: "arrow",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-17",
        type: "step",
        source:"gb-7",
        target: "m-8",
        style: {
            stroke: "#000"
        }
    },
    {   
        id: "els-18",
        type: "step",
        source:"t-2",
        target: "m-5",
        targetHandle: "hb_b",
        arrowHeadType: "arrow",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-19",
        type: "straight",
        source:"m-5",
        target: "l-4",
        arrowHeadType: "arrow",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-20",
        type: "straight",
        source:"red-light-4",
        target: "l-6",
        targetHandle: "p6_a",
        arrowHeadType: "arrow",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-21",
        type: "straight",
        source:"m-6",
        target: "g-1",
        sourceHandle: "db_c",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-22",
        type: "straight",
        source:"g-1",
        target: "g-2",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-23",
        type: "straight",
        source:"g-2",
        target: "l-6",
        targetHandle: "p6_b",
        arrowHeadType: "arrow",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-24",
        type: "straight",
        source:"l-6",
        target: "g-3",
        sourceHandle: "p6_c",
        arrowHeadType: "arrow",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-25",
        type: "straight",
        source:"g-4",
        target: "gb-12",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-26",
        type: "straight",
        source:"g-5",
        target: "gb-14",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-27",
        type: "straight",
        source:"gb-12",
        target: "t-3",
        arrowHeadType: "arrow",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-28",
        type: "straight",
        source:"gb-14",
        target: "t-4",
        arrowHeadType: "arrow",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-29",
        type: "step",
        source:"gb-15",
        target: "m-9",
        style: {
            stroke: "#000"
        }
    },
    {   
        id: "els-30",
        type: "straight",
        source:"m-9",
        target: "m-6",
        targetHandle: "db_a",
        arrowHeadType: "arrow",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-31",
        type: "step",
        source:"g-6",
        target: "m-6",
        targetHandle: "db_b",
        arrowHeadType: "arrow",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-32",
        type: "step",
        source:"g-7",
        target: "g-6",
        arrowHeadType: "arrow",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-33",
        type: "step",
        source:"gb-19",
        target: "m-10",
        style: {
            stroke: "#000"
        }
    },
    {   
        id: "els-34",
        type: "straight",
        source:"g-8",
        target: "g-9",
        arrowHeadType: "arrow",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-35",
        type: "step",
        source:"g-9",
        target: "g-7",
        arrowHeadType: "arrow",
        style: {
            stroke: "#9ACD32"
        }
    },
    {   
        id: "els-36",
        type: "straight",
        source:"gb-21",
        target: "ggb-1",
        style: {
            stroke: "#000"
        }
    },
    {   
        id: "els-37",
        type: "straight",
        source:"gb-20",
        target: "t-5",
        arrowHeadType: "arrow",
        style: {
            stroke: "#9ACD32"
        }
    },
    // 42 se start hoga
]

