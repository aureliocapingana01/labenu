import express,{Request, Response} from "express"
import cors from 'cors'
import { AddressInfo } from "net"

const app = express();
app.use(express.json());
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;
 //exer1
app.get('/', (req:Request, res:Response) => {
    console.log("Hello World")
    res.status(200).send('Olá Mundo!!!')
})

//exer2
type Person = {
    id :  number,
    name : string,
    phone: number |string,
    email: string,
    city : string,
}

//exr3
const users: Person[] = [
    {
        id: 1,
        name: 'Leanne Graham',
        phone: '123456-789',
        email: 'Leanne@hot.com',
        city: 'Gwenborough'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        phone: '23456-7890',
        email: 'Ervin@gmail.com',
        city:  'Wisokyburgh'
    },
    {
        id: 3,
        name: 'Patricia Lebsack',
        phone: '34567-8901',
        email: 'Patricia@hotlook.com',
        city:  'South Elvis'
    },
    
]

//exer4
app.get('/users', (req:Request, res:Response) => {
    res.status(200).send('OK, Deus tudo certo')
})

