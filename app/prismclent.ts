import { PrismaClient } from "@prisma/client";

export async function user() {
  const prisma = new PrismaClient();
  /* 
  await prisma.user.create({
    data: {
      name: "getahun",
      email: "gg@gg",
    },
  }); */
  const users = await prisma.user.findMany();
  return users;
}
