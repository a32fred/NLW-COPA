import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data:{
            name: 'Fred por Fred',
            email: 'fredporfred@gmail.com',
            avatarUrl: 'https://github.com/a32fred.png'
        }
    })

    const pool = await prisma.pool.create({
        data:{
            title: 'Example Title Pool',
            code: 'BOL123',
            ownerId: user.id,
            participants:{
                create:{
                    userId: user.id
                }
            }
        }
    })

    await prisma.game.create({
        data:{
            date: '2022-11-11T13:00:00.512Z',
            firstTeamCountryCode: 'DE',
            secondTeamCountryCode: 'BR',
        }
    })

    await prisma.game.create({
        data:{
            date: '2022-11-11T13:00:00.512Z',
            firstTeamCountryCode: 'AR',
            secondTeamCountryCode: 'BR',

            guesses:{
                create:{
                    firstTeamPoints: 0,
                    secondTeamPoints: 4,
                    participant: {
                        connect:{
                            userId_poolId: {
                                userId: user.id,
                                poolId: pool.id,
                            }
                        }
                    }
                }
            }
        }
    })
}

main()