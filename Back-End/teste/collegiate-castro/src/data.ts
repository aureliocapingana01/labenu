// import { title } from "process";
import { CLASS, teacher, SUBJECT, DEV } from "./type";


export let classes: CLASS[] = [
    {
        id: 1,
        number: 100,
        title: "luanda"
    },
    {
        id: 2,
        number: 200,
        title: "huambo"
    },
    {
        id: 3,
        number: 300,
        title: "benguela"
    }
]


export let teachers: teacher[] = [
    {
        id: 1,
        name: "Aurélio",
        dev: DEV.BACK_END,
        subject: SUBJECT.TYPESCRIPT,
        discription: "Em periodo de aprendizagem"
    },
    {
        id: 2,
        name: "Castro",
        dev: DEV.FRONT_END,
        subject: SUBJECT.HTML
    },
    {
        id: 3,
        name: "Ana",
        dev: DEV.FRONT_END,
        subject: SUBJECT.REACT,
        discription: "Tem controle do conteudo"
    },
    {
        id: 4,
        name: "Zeferina",
        dev: DEV.BACK_END,
        subject: SUBJECT.SQL,
    },
    {
        id: 5,
        name: "Benicio",
        dev: DEV.FULL_STACK,
        subject: SUBJECT.TYPESCRIPT,
        discription: "Com capacidade de ensinar"
    },
    {
        id: 6,
        name: "Manasse",
        dev: DEV.FRONT_END,
        subject: SUBJECT.REACT,
    }
]