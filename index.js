const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());
app.use(express.json());
// có thể thấy được thư mực bên trong 
app.use(express.static('.'))
app.listen(3000);

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();


app.get('/api/user/get-all-user', async (req, res) => {
    let data = await prisma.user.findMany();
    res.send(data)
})

app.get('/api/user/get-specifi-user', async (req, res) => {
    let data = await prisma.like_res.findMany({
        include: {
            user: true,
            restaurant: true
        },
        // where: {
        //     full_name: {
        //         contains: 'a'
        //     }
        // }


        // link nhiều bảng 
        // let data2 = await prisma.user.findMany({
        //     include: {
        //         like_res: {
        //             include: {
        //                 restaurant: true
        //             }
        //         }
        //     },
        // where: {
        //     full_name: {
        //         contains: 'a'
        //     }
        // }
    });

    res.send(data)
});


app.get('/api/user/create-user', async (req, res) => {
    let { full_name, email, pass_word } = req.body;
    let newData = {
        full_name, email, pass_word
    }
    await prisma.user.create({ data: newData })

    // await prisma.user.update({ data: newData, where: { user_id } })
    // await prisma.user.delete({ where: { user_id } })

    res.send(newData)
});
