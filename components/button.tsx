"use client";

import prisma from "@/lib/prisma";

function Button() {
  const update = async () => {
    const users = await prisma?.users.findMany();
    console.log(users);
  };
  return <button onClick={update}>UPDATE</button>;
}

export default Button;
