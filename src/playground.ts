import { db } from "./server/db";

await db.user.create({
  data: {
    emailAddress: "test",
    firstName: "a",
    lastName: "b",
  },
});
