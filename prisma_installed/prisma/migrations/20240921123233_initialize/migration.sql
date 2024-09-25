-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "todo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
